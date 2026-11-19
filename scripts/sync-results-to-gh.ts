import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import dotenv from "dotenv"

dotenv.config()

interface IssueMapEntry {
  id: string
  issueNumber: number
  url: string
  mode: string
}

const REPO = process.env.GITHUB_REPOSITORY || "JuanZ14-Dev/medusa-qa"
const MAP_PATH = path.resolve("casos-de-prueba/github-issues-map.json")
const RESULTS_PATH = path.resolve("reports/results.json")

function collectAutomatedStatuses(): Map<string, "passed" | "failed"> {
  const statusMap = new Map<string, "passed" | "failed">()
  if (!fs.existsSync(RESULTS_PATH)) return statusMap

  const report = JSON.parse(fs.readFileSync(RESULTS_PATH, "utf8"))
  const visitSuite = (suite: {
    specs?: Array<{
      title: string
      ok: boolean
    }>
    suites?: unknown[]
  }) => {
    for (const spec of suite.specs || []) {
      const m = spec.title.match(/(CP-[A-Z]+-\d+)/)
      if (m) {
        statusMap.set(m[1], spec.ok ? "passed" : "failed")
      }
    }
    for (const child of (suite.suites as typeof suite[]) || []) {
      visitSuite(child)
    }
  }

  for (const suite of report.suites || []) {
    visitSuite(suite)
  }

  return statusMap
}

function main(): void {
  if (!fs.existsSync(MAP_PATH)) {
    throw new Error("No existe casos-de-prueba/github-issues-map.json. Ejecute gh:sync-cases primero.")
  }

  const issueMap: IssueMapEntry[] = JSON.parse(fs.readFileSync(MAP_PATH, "utf8"))
  const autoStatuses = collectAutomatedStatuses()

  for (const entry of issueMap) {
    const status = autoStatuses.get(entry.id)
    if (!status) continue

    const nextLabel = status === "passed" ? "status:passed" : "status:failed"
    execFileSync(
      "gh",
      [
        "issue",
        "edit",
        String(entry.issueNumber),
        "--repo",
        REPO,
        "--remove-label",
        "status:not-executed,status:passed,status:failed,status:blocked",
        "--add-label",
        nextLabel,
      ],
      { stdio: "inherit" }
    )

    execFileSync(
      "gh",
      [
        "issue",
        "comment",
        String(entry.issueNumber),
        "--repo",
        REPO,
        "--body",
        `Actualización automática de ejecución (${entry.id}): estado **${status.toUpperCase()}**.`,
      ],
      { stdio: "inherit" }
    )
  }

  console.log(`Sincronización de resultados completada para ${autoStatuses.size} casos automatizados.`)
}

main()
