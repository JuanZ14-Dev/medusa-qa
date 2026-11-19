import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import dotenv from "dotenv"

dotenv.config()

interface TestCaseRow {
  id: string
  nombre: string
  modulo: string
  superficie: "Storefront" | "Admin"
  modalidad: "Manual" | "Automatizado"
  prioridad: "Alta" | "Media" | "Baja"
  tipo: string
  tecnica: string
  historia: string
  archivo: string
}

interface ExistingIssue {
  number: number
  title: string
  url: string
}

interface IssueMapEntry {
  id: string
  issueNumber: number
  url: string
  title: string
  surface: string
  mode: string
  module: string
  priority: string
  file: string
}

const REPO = process.env.GITHUB_REPOSITORY || "JuanZ14-Dev/medusa-qa"
const MATRIZ_PATH = path.resolve("casos-de-prueba/matriz-casos.md")
const MAP_PATH = path.resolve("casos-de-prueba/github-issues-map.json")
const TRAZABILIDAD_PATH = path.resolve("docs/matriz-trazabilidad.md")

function parseMatriz(): TestCaseRow[] {
  const raw = fs.readFileSync(MATRIZ_PATH, "utf8")
  const rows: TestCaseRow[] = []

  for (const line of raw.split(/\r?\n/)) {
    if (!line.startsWith("| CP-")) continue
    const cols = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim().replace(/^`|`$/g, ""))
    if (cols.length < 10) continue

    rows.push({
      id: cols[0],
      nombre: cols[1],
      modulo: cols[2],
      superficie: cols[3] as "Storefront" | "Admin",
      modalidad: cols[4] as "Manual" | "Automatizado",
      prioridad: cols[5] as "Alta" | "Media" | "Baja",
      tipo: cols[6],
      tecnica: cols[7],
      historia: cols[8],
      archivo: cols[9],
    })
  }

  return rows
}

function buildIssueBody(tc: TestCaseRow): string {
  const absFile = path.resolve(tc.archivo)
  if (tc.modalidad === "Manual" && fs.existsSync(absFile)) {
    return (
      fs.readFileSync(absFile, "utf8") +
      `\n\n---\n**Archivo fuente:** \`${tc.archivo}\`\n`
    )
  }

  const responsable =
    tc.superficie === "Storefront" ? "SA-04 (QA Automatizador)" : "SA-05 (QA Automatizador)"

  return [
    `# ${tc.id}: ${tc.nombre}`,
    "",
    "| Campo | Descripción |",
    "| --- | --- |",
    `| **ID del caso** | \`${tc.id}\` |`,
    `| **Nombre** | ${tc.nombre} |`,
    `| **Historia de usuario** | \`${tc.historia}\` |`,
    `| **Precondiciones** | Instancias de Medusa operativas (${tc.superficie === "Storefront" ? "http://localhost:8000" : "http://localhost:9000/app"}) y datos semilla disponibles. |`,
    `| **Datos de entrada** | Configurados en \`tests/fixtures/test-data.fixture.ts\` para \`${tc.id}\`. |`,
    `| **Pasos de ejecución** | Ejecución automatizada mediante Playwright (\`${tc.archivo}\`). |`,
    `| **Resultado esperado** | Todas las aserciones UI/API de \`${tc.id}\` finalizan en estado exitoso. |`,
    `| **Resultado obtenido** | Pendiente de ejecución |`,
    `| **Estado** | \`[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado\` |`,
    `| **Prioridad** | ${tc.prioridad} |`,
    `| **Tipo de prueba** | ${tc.tipo} |`,
    `| **Técnica aplicada** | ${tc.tecnica} |`,
    `| **Responsable** | \`${responsable}\` |`,
    `| **Fecha de ejecución** | \`Pendiente\` |`,
    `| **Defectos asociados** | \`N/A\` |`,
    `| **Observaciones** | Caso automatizado E2E/API en Playwright (\`${tc.archivo}\`). |`,
  ].join("\n")
}

function getExistingIssues(): ExistingIssue[] {
  const out = execFileSync(
    "gh",
    [
      "issue",
      "list",
      "--repo",
      REPO,
      "--label",
      "type:test-case",
      "--state",
      "all",
      "--limit",
      "100",
      "--json",
      "number,title,url",
    ],
    { encoding: "utf8" }
  )
  return JSON.parse(out) as ExistingIssue[]
}

function updateTraceabilityMatrix(mapEntries: IssueMapEntry[]): void {
  if (!fs.existsSync(TRAZABILIDAD_PATH)) return
  const byId = new Map(mapEntries.map((e) => [e.id, e]))
  const lines = fs.readFileSync(TRAZABILIDAD_PATH, "utf8").split(/\r?\n/)
  const updated = lines.map((line) => {
    const match = line.match(/\|\s*(CP-[A-Z]+-\d+)\s*\|/)
    if (!match) return line
    const entry = byId.get(match[1])
    if (!entry) return line
    const cols = line.split("|")
    // Column index 7 corresponds to "Issue GitHub" (1-based after leading pipe)
    if (cols.length >= 10) {
      cols[7] = ` [#${entry.issueNumber}](${entry.url}) `
      return cols.join("|")
    }
    return line
  })
  fs.writeFileSync(TRAZABILIDAD_PATH, updated.join("\n"), "utf8")
}

function main(): void {
  const cases = parseMatriz()
  if (cases.length !== 45) {
    throw new Error(`Se esperaban 45 casos en matriz-casos.md, se encontraron ${cases.length}`)
  }

  const existing = getExistingIssues()
  const existingByPrefix = new Map<string, ExistingIssue>()
  for (const iss of existing) {
    const m = iss.title.match(/\[(CP-[A-Z]+-\d+)\]/)
    if (m) existingByPrefix.set(m[1], iss)
  }

  const issueMap: IssueMapEntry[] = []

  for (const tc of cases) {
    const title = `[${tc.id}] ${tc.nombre}`
    const surfaceLabel =
      tc.superficie === "Storefront" ? "surface:storefront" : "surface:admin"
    const modeLabel = tc.modalidad === "Manual" ? "mode:manual" : "mode:automated"
    const priorityLabel = `priority:${tc.prioridad.toLowerCase()}`
    const moduleLabel = `module:${tc.modulo.toLowerCase()}`

    const found = existingByPrefix.get(tc.id)
    if (found) {
      issueMap.push({
        id: tc.id,
        issueNumber: found.number,
        url: found.url,
        title: found.title,
        surface: tc.superficie,
        mode: tc.modalidad,
        module: tc.modulo,
        priority: tc.prioridad,
        file: tc.archivo,
      })
      continue
    }

    const body = buildIssueBody(tc)
    const createdUrl = execFileSync(
      "gh",
      [
        "issue",
        "create",
        "--repo",
        REPO,
        "--title",
        title,
        "--body",
        body,
        "--label",
        "type:test-case",
        "--label",
        surfaceLabel,
        "--label",
        modeLabel,
        "--label",
        "status:not-executed",
        "--label",
        priorityLabel,
        "--label",
        moduleLabel,
      ],
      { encoding: "utf8" }
    ).trim()

    const numMatch = createdUrl.match(/\/issues\/(\d+)$/)
    const issueNumber = numMatch ? Number(numMatch[1]) : 0

    issueMap.push({
      id: tc.id,
      issueNumber,
      url: createdUrl,
      title,
      surface: tc.superficie,
      mode: tc.modalidad,
      module: tc.modulo,
      priority: tc.prioridad,
      file: tc.archivo,
    })

    console.log(`Creado ${tc.id} -> #${issueNumber} (${createdUrl})`)
  }

  fs.writeFileSync(MAP_PATH, JSON.stringify(issueMap, null, 2) + "\n", "utf8")
  updateTraceabilityMatrix(issueMap)
  console.log(`Mapeo guardado en ${MAP_PATH} (${issueMap.length} casos)`)
}

main()
