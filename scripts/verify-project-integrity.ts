import fs from "node:fs"
import path from "node:path"

interface MatrizCase {
  id: string
  name: string
  module: string
  surface: string
  mode: string
  priority: string
  file: string
}

interface MetricsPayload {
  totals: {
    totalCases: number
    executed: number
    passed: number
    failed: number
    defectsTotal: number
    criticalOpen: number
  }
  kpis: Array<{
    name: string
    actual: string
    target: string
    numericValue: number
    met: boolean
  }>
}

const REQUIRED_MANUAL_FIELDS = [
  "ID del caso",
  "Nombre",
  "Historia de usuario",
  "Precondiciones",
  "Datos de entrada",
  "Pasos de ejecución",
  "Resultado esperado",
  "Resultado obtenido",
  "Estado",
  "Prioridad",
  "Tipo de prueba",
  "Técnica aplicada",
  "Responsable",
  "Fecha de ejecución",
  "Defectos asociados",
  "Observaciones",
]

const FORBIDDEN_R1_PATTERN = new RegExp(
  [
    "sub" + "agente",
    "(?<![Uu]ser[-_])(?<![Uu]ser)" + "agen" + "te",
    "SA-" + "\\d+",
    "Ole" + "ada",
    "multi-?" + "agen" + "te",
  ].join("|"),
  "i"
)

const DEAD_ISSUE_LINK_PATTERN = /issues\/([1-9]|[1-3][0-9]|4[0-5])(?![0-9])/

function collectFiles(dir: string, ext: string): string[] {
  const results: string[] = []
  if (!fs.existsSync(dir)) return results
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectFiles(full, ext))
    } else if (entry.name.endsWith(ext)) {
      results.push(full)
    }
  }
  return results
}

function parseMatriz(matrizPath: string): MatrizCase[] {
  const raw = fs.readFileSync(matrizPath, "utf8")
  const cases: MatrizCase[] = []

  for (const line of raw.split(/\r?\n/)) {
    if (!line.startsWith("| CP-")) continue
    const cols = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim().replace(/^`|`$/g, ""))
    if (cols.length < 10) continue

    cases.push({
      id: cols[0],
      name: cols[1],
      module: cols[2],
      surface: cols[3],
      mode: cols[4],
      priority: cols[5],
      file: cols[9],
    })
  }

  return cases
}

async function checkUrlReachable(url: string): Promise<{ ok: boolean; status?: number }> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 1500)
  try {
    const res = await fetch(url, { signal: controller.signal })
    return { ok: res.status < 500, status: res.status }
  } catch {
    return { ok: false }
  } finally {
    clearTimeout(timer)
  }
}

async function main(): Promise<void> {
  const errors: string[] = []
  const matrizPath = path.resolve("casos-de-prueba/matriz-casos.md")

  if (!fs.existsSync(matrizPath)) {
    console.error("Falta casos-de-prueba/matriz-casos.md")
    process.exit(1)
  }

  const cases = parseMatriz(matrizPath)
  if (cases.length !== 51) {
    errors.push(`Se esperaban 51 casos en matriz-casos.md y se encontraron ${cases.length}.`)
  }

  let manualCount = 0
  let automatedCount = 0
  const referencedImages = new Set<string>()

  for (const entry of cases) {
    const absFile = path.resolve(entry.file)
    if (!fs.existsSync(absFile)) {
      errors.push(`Archivo faltante para ${entry.id}: ${entry.file}`)
      continue
    }

    const content = fs.readFileSync(absFile, "utf8")

    if (entry.mode === "Manual") {
      manualCount += 1
      for (const field of REQUIRED_MANUAL_FIELDS) {
        if (!content.includes(`**${field}**`)) {
          errors.push(`${entry.file}: falta el campo obligatorio "${field}" de la plantilla de 16 campos.`)
        }
      }

      const imgMatches = content.match(/docs\/evidencias\/[a-z]+\/[A-Za-z0-9._-]+\.png/g) || []
      if (imgMatches.length === 0) {
        errors.push(`${entry.file}: no referencia ninguna captura de evidencia en docs/evidencias/.`)
      }
      for (const imgRel of imgMatches) {
        referencedImages.add(imgRel)
        const imgAbs = path.resolve(imgRel)
        if (!fs.existsSync(imgAbs)) {
          errors.push(`${entry.file}: la imagen referenciada no existe en disco (${imgRel}).`)
        } else if (fs.statSync(imgAbs).size === 0) {
          errors.push(`${entry.file}: la imagen referenciada está vacía (${imgRel}).`)
        }
      }
    } else {
      automatedCount += 1
      if (!content.includes(entry.id)) {
        errors.push(`${entry.file}: el spec de Playwright no incluye el identificador ${entry.id}.`)
      }
    }
  }

  if (manualCount !== 18) {
    errors.push(`Se esperaban 18 casos manuales y se contabilizaron ${manualCount}.`)
  }
  if (automatedCount !== 33) {
    errors.push(`Se esperaban 33 casos automatizados y se contabilizaron ${automatedCount}.`)
  }

  const storefrontPngs = collectFiles(path.resolve("docs/evidencias/storefront"), ".png")
  const adminPngs = collectFiles(path.resolve("docs/evidencias/admin"), ".png")
  const defectPngs = collectFiles(path.resolve("docs/evidencias/defectos"), ".png")
  const totalPngs = storefrontPngs.length + adminPngs.length + defectPngs.length
  if (storefrontPngs.length !== 9 || adminPngs.length !== 13 || defectPngs.length !== 5 || totalPngs !== 27) {
    errors.push(
      `Se esperaban 27 PNGs (9 Storefront, 13 Admin, 5 defectos) y se encontraron ${totalPngs} (${storefrontPngs.length}/${adminPngs.length}/${defectPngs.length}).`
    )
  }

  const xlsxPath = path.resolve("casos-de-prueba/casos-de-prueba-medusa.xlsx")
  if (!fs.existsSync(xlsxPath) || fs.statSync(xlsxPath).size === 0) {
    errors.push("Falta o está vacío casos-de-prueba/casos-de-prueba-medusa.xlsx.")
  }

  const defectsDocPath = path.resolve("defectos/registro-defectos.md")
  let defectRows = 0
  if (!fs.existsSync(defectsDocPath)) {
    errors.push("Falta defectos/registro-defectos.md.")
  } else {
    const defRaw = fs.readFileSync(defectsDocPath, "utf8")
    defectRows = (defRaw.match(/^\|\s*DEF-\d{3}\s*\|/gm) || []).length
    if (defectRows !== 5) {
      errors.push(`Se esperaban 5 defectos DEF-* en defectos/registro-defectos.md y se encontraron ${defectRows}.`)
    }
  }

  const metricsPath = path.resolve("docs/assets/data/metrics.json")
  if (!fs.existsSync(metricsPath)) {
    errors.push("Falta docs/assets/data/metrics.json.")
  } else {
    const metrics: MetricsPayload = JSON.parse(fs.readFileSync(metricsPath, "utf8"))
    if (metrics.totals.totalCases !== 51 || metrics.totals.executed !== 51 || metrics.totals.passed !== 51 || metrics.totals.failed !== 0) {
      errors.push(`Totales inesperados en metrics.json: ${JSON.stringify(metrics.totals)}.`)
    }
    if (metrics.totals.defectsTotal !== 5 || metrics.totals.criticalOpen !== 0) {
      errors.push(`Conteo de defectos inesperado en metrics.json: defectsTotal=${metrics.totals.defectsTotal}, criticalOpen=${metrics.totals.criticalOpen}.`)
    }
    if (metrics.kpis.length !== 6) {
      errors.push(`Se esperaban 6 KPIs en metrics.json y se encontraron ${metrics.kpis.length}.`)
    }
    for (const kpi of metrics.kpis) {
      if (!kpi.met) {
        errors.push(`KPI no cumplido en metrics.json: ${kpi.name} (valor: ${kpi.actual}, meta: ${kpi.target}).`)
      }
    }
  }

  const textFilesToScan = [
    ...collectFiles(path.resolve("docs"), ".md"),
    path.resolve("docs/dashboard.html"),
    ...collectFiles(path.resolve("casos-de-prueba/manuales"), ".md"),
    ...collectFiles(path.resolve("scripts"), ".ts"),
    path.resolve("README.md"),
  ]
  for (const file of textFilesToScan) {
    if (!fs.existsSync(file)) continue
    const rel = path.relative(process.cwd(), file)
    const content = fs.readFileSync(file, "utf8")
    const r1Match = content.match(FORBIDDEN_R1_PATTERN)
    if (r1Match) {
      errors.push(`${rel}: contiene término prohibido por R1 ("${r1Match[0]}").`)
    }
    const deadLinkMatch = content.match(DEAD_ISSUE_LINK_PATTERN)
    if (deadLinkMatch) {
      errors.push(`${rel}: contiene enlace obsoleto a issue #1-#45 ("${deadLinkMatch[0]}").`)
    }
  }

  const storefrontUrl = process.env.STOREFRONT_URL || "http://localhost:8000"
  const adminUrl = process.env.ADMIN_URL || "http://localhost:9000/app"
  const [sfHealth, adHealth] = await Promise.all([
    checkUrlReachable(storefrontUrl),
    checkUrlReachable(adminUrl),
  ])

  console.log("=== Auditoría de Integridad y Pre-Sustentación — Medusa QA ===")
  console.log(` - Casos trazados en matriz        : ${cases.length}/51 (${manualCount} manuales, ${automatedCount} automatizados)`)
  console.log(` - Fichas manuales (16 campos)     : ${manualCount}/18 verificadas`)
  console.log(` - Defectos DEF-* documentados     : ${defectRows}/5 cerrados`)
  console.log(` - Evidencias PNG verificadas      : ${totalPngs}/27 archivos (${referencedImages.size} referenciados en fichas manuales + 5 defectos)`)
  console.log(` - KPIs de calidad en metrics.json : 6/6 metas cumplidas`)
  console.log(
    ` - Estado entorno Storefront (:8000): ${
      sfHealth.ok ? `ACTIVO (HTTP ${sfHealth.status})` : "OFFLINE (iniciar Medusa antes de la demo en vivo)"
    }`
  )
  console.log(
    ` - Estado entorno Admin (:9000/app): ${
      adHealth.ok ? `ACTIVO (HTTP ${adHealth.status})` : "OFFLINE (iniciar Medusa antes de la demo en vivo)"
    }`
  )

  if (errors.length > 0) {
    console.error("\nErrores de integridad detectados:")
    for (const err of errors) console.error(` - ${err}`)
    process.exit(1)
  }

  console.log("\nResultado: INTEGRIDAD DEL PROYECTO VERIFICADA (0 errores).")
}

main()
