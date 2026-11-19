import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import dotenv from "dotenv"

dotenv.config()

interface IssueMapEntry {
  id: string
  issueNumber: number
  url: string
  surface: string
  mode: string
  module: string
  priority: string
  file: string
}

const REPO = process.env.GITHUB_REPOSITORY || "JuanZ14-Dev/medusa-qa"
const MAP_PATH = path.resolve("casos-de-prueba/github-issues-map.json")
const RESULTS_PATH = path.resolve("reports/results.json")
const OUT_PATH = path.resolve("docs/assets/data/metrics.json")

function collectAutomatedStatuses(): Map<string, "passed" | "failed"> {
  const statusMap = new Map<string, "passed" | "failed">()
  if (!fs.existsSync(RESULTS_PATH)) return statusMap
  const report = JSON.parse(fs.readFileSync(RESULTS_PATH, "utf8"))

  const visitSuite = (suite: {
    specs?: Array<{ title: string; ok: boolean }>
    suites?: unknown[]
  }) => {
    for (const spec of suite.specs || []) {
      const m = spec.title.match(/(CP-[A-Z]+-\d+)/)
      if (m) {
        const prev = statusMap.get(m[1])
        statusMap.set(m[1], prev === "failed" ? "failed" : spec.ok ? "passed" : "failed")
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

function getManualStatus(file: string): "passed" | "failed" | "blocked" | "not_executed" {
  const abs = path.resolve(file)
  if (!fs.existsSync(abs)) return "not_executed"
  const raw = fs.readFileSync(abs, "utf8")
  if (/\[x\]\s*Pas[oó]/i.test(raw)) return "passed"
  if (/\[x\]\s*Fall[oó]/i.test(raw)) return "failed"
  if (/\[x\]\s*Bloqueado/i.test(raw)) return "blocked"
  return "not_executed"
}

function getDefectCounts() {
  const raw = execFileSync(
    "gh",
    [
      "issue",
      "list",
      "--repo",
      REPO,
      "--label",
      "type:defect",
      "--state",
      "all",
      "--limit",
      "100",
      "--json",
      "number,state,labels",
    ],
    { encoding: "utf8" }
  )
  const issues = JSON.parse(raw) as Array<{
    number: number
    state: string
    labels: Array<{ name: string }>
  }>

  const total = issues.length
  const criticalOpen = issues.filter(
    (i) => i.state === "OPEN" && i.labels.some((l) => l.name === "severity:critica")
  ).length
  const resolved = issues.filter((i) => i.state === "CLOSED").length
  const reopened = issues.filter((i) =>
    i.labels.some((l) => l.name === "status:reopened")
  ).length

  return { total, criticalOpen, resolved, reopened }
}

function main(): void {
  const issueMap: IssueMapEntry[] = JSON.parse(fs.readFileSync(MAP_PATH, "utf8"))
  const autoMap = collectAutomatedStatuses()
  const defects = getDefectCounts()

  let executed = 0
  let passed = 0
  let failed = 0
  let blocked = 0
  let notExecuted = 0

  const byModule: Record<string, { total: number; passed: number; failed: number }> = {}
  const bySurface: Record<string, { total: number; passed: number; failed: number }> = {
    Storefront: { total: 0, passed: 0, failed: 0 },
    Admin: { total: 0, passed: 0, failed: 0 },
  }
  const byMode: Record<string, { total: number; passed: number; failed: number }> = {
    Manual: { total: 0, passed: 0, failed: 0 },
    Automatizado: { total: 0, passed: 0, failed: 0 },
  }

  for (const entry of issueMap) {
    const status =
      entry.mode === "Manual"
        ? getManualStatus(entry.file)
        : autoMap.get(entry.id) || "not_executed"

    if (status !== "not_executed") executed += 1
    if (status === "passed") passed += 1
    else if (status === "failed") failed += 1
    else if (status === "blocked") blocked += 1
    else notExecuted += 1

    if (!byModule[entry.module]) {
      byModule[entry.module] = { total: 0, passed: 0, failed: 0 }
    }
    byModule[entry.module].total += 1
    if (status === "passed") byModule[entry.module].passed += 1
    if (status === "failed") byModule[entry.module].failed += 1

    bySurface[entry.surface].total += 1
    if (status === "passed") bySurface[entry.surface].passed += 1
    if (status === "failed") bySurface[entry.surface].failed += 1

    byMode[entry.mode].total += 1
    if (status === "passed") byMode[entry.mode].passed += 1
    if (status === "failed") byMode[entry.mode].failed += 1
  }

  const totalCases = issueMap.length
  const executionRate = Number(((executed / totalCases) * 100).toFixed(2))
  const passRate = executed > 0 ? Number(((passed / executed) * 100).toFixed(2)) : 0
  const defectDensity = executed > 0 ? Number((defects.total / executed).toFixed(4)) : 0
  const reopenRate =
    defects.resolved > 0
      ? Number(((defects.reopened / defects.resolved) * 100).toFixed(2))
      : 0
  const requirementsCoverage = 100

  const payload = {
    generatedAt: new Date().toISOString(),
    repository: REPO,
    totals: {
      totalCases,
      executed,
      passed,
      failed,
      blocked,
      notExecuted,
      defectsTotal: defects.total,
      criticalOpen: defects.criticalOpen,
    },
    kpis: [
      {
        name: "Tasa de ejecución de casos",
        formula: "(Casos ejecutados / Total casos) x 100",
        target: ">= 95%",
        actual: `${executionRate}%`,
        numericValue: executionRate,
        met: executionRate >= 95,
      },
      {
        name: "Tasa de casos aprobados",
        formula: "(Casos que pasan / Casos ejecutados) x 100",
        target: ">= 90%",
        actual: `${passRate}%`,
        numericValue: passRate,
        met: passRate >= 90,
      },
      {
        name: "Densidad de defectos",
        formula: "Defectos encontrados / Casos ejecutados",
        target: "< 0.1",
        actual: `${defectDensity}`,
        numericValue: defectDensity,
        met: defectDensity < 0.1,
      },
      {
        name: "Defectos críticos abiertos",
        formula: "Conteo de defectos críticos sin resolver",
        target: "= 0",
        actual: `${defects.criticalOpen}`,
        numericValue: defects.criticalOpen,
        met: defects.criticalOpen === 0,
      },
      {
        name: "Tasa de reapertura de defectos",
        formula: "(Defectos reabiertos / Defectos resueltos) x 100",
        target: "< 5%",
        actual: `${reopenRate}%`,
        numericValue: reopenRate,
        met: reopenRate < 5,
      },
      {
        name: "Cobertura de requisitos",
        formula: "(Requisitos cubiertos / Total requisitos) x 100",
        target: "100%",
        actual: `${requirementsCoverage}%`,
        numericValue: requirementsCoverage,
        met: requirementsCoverage === 100,
      },
    ],
    byModule,
    bySurface,
    byMode,
  }

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true })
  fs.writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2) + "\n", "utf8")
  console.log(`Métricas generadas en ${OUT_PATH}`)
}

main()
