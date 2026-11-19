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
  file: string
}

const REPO = process.env.GITHUB_REPOSITORY || "JuanZ14-Dev/medusa-qa"
const MAP_PATH = path.resolve("casos-de-prueba/github-issues-map.json")
const RESULTS_PATH = path.resolve("reports/results.json")

type CaseStatus = "passed" | "failed" | "blocked"

function collectAutomatedStatuses(): Map<string, CaseStatus> {
  const statusMap = new Map<string, CaseStatus>()
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
        const prev = statusMap.get(m[1])
        const next: CaseStatus = spec.ok ? "passed" : "failed"
        statusMap.set(m[1], prev === "failed" ? "failed" : next)
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

function collectManualStatuses(issueMap: IssueMapEntry[]): Map<string, CaseStatus> {
  const statusMap = new Map<string, CaseStatus>()
  for (const entry of issueMap) {
    if (entry.mode !== "Manual") continue
    const absFile = path.resolve(entry.file)
    if (!fs.existsSync(absFile)) continue
    const content = fs.readFileSync(absFile, "utf8")
    if (/\[x\]\s*Pas[oó]/i.test(content)) {
      statusMap.set(entry.id, "passed")
    } else if (/\[x\]\s*Fall[oó]/i.test(content)) {
      statusMap.set(entry.id, "failed")
    } else if (/\[x\]\s*Bloqueado/i.test(content)) {
      statusMap.set(entry.id, "blocked")
    }
  }
  return statusMap
}

function main(): void {
  if (!fs.existsSync(MAP_PATH)) {
    throw new Error("No existe casos-de-prueba/github-issues-map.json. Ejecute gh:sync-cases primero.")
  }

  const issueMap: IssueMapEntry[] = JSON.parse(fs.readFileSync(MAP_PATH, "utf8"))
  const autoStatuses = collectAutomatedStatuses()
  const manualStatuses = collectManualStatuses(issueMap)

  let syncedCount = 0
  for (const entry of issueMap) {
    const status =
      entry.mode === "Manual"
        ? manualStatuses.get(entry.id)
        : autoStatuses.get(entry.id)
    if (!status) continue

    const nextLabel = `status:${status}`
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

    const commentBody =
      entry.mode === "Manual"
        ? `Actualización de ejecución manual (${entry.id}, 19/11/2026): estado **${status.toUpperCase()}** (evidencia en \`docs/evidencias/\`).`
        : `Actualización automática de ejecución Playwright (${entry.id}, 19/11/2026): estado **${status.toUpperCase()}**.`

    execFileSync(
      "gh",
      [
        "issue",
        "comment",
        String(entry.issueNumber),
        "--repo",
        REPO,
        "--body",
        commentBody,
      ],
      { stdio: "inherit" }
    )
    syncedCount += 1
  }

  console.log(`Sincronización completada para ${syncedCount} casos de prueba en GitHub Issues.`)
}

main()
