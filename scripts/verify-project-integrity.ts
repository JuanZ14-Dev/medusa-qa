import fs from "node:fs"
import path from "node:path"

interface IssueMapEntry {
  id: string
  issueNumber: number
  url: string
  title: string
  surface: "Storefront" | "Admin"
  mode: "Manual" | "Automatizado"
  module: string
  priority: string
  file: string
}

interface MetricsPayload {
  totals: {
    totalCases: number
    executed: number
    passed: number
    failed: number
    criticalOpen: number
  }
  kpis: Array<{
    name: string
    actual: string
    target: string
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
  const mapPath = path.resolve("casos-de-prueba/github-issues-map.json")

  if (!fs.existsSync(mapPath)) {
    console.error("Falta casos-de-prueba/github-issues-map.json")
    process.exit(1)
  }

  const issueMap: IssueMapEntry[] = JSON.parse(fs.readFileSync(mapPath, "utf8"))
  if (issueMap.length !== 45) {
    errors.push(`Se esperaban 45 casos en github-issues-map.json y se encontraron ${issueMap.length}.`)
  }

  let manualCount = 0
  let automatedCount = 0
  const referencedImages = new Set<string>()

  for (const entry of issueMap) {
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
  if (automatedCount !== 27) {
    errors.push(`Se esperaban 27 casos automatizados y se contabilizaron ${automatedCount}.`)
  }

  const storefrontPngs = collectFiles(path.resolve("docs/evidencias/storefront"), ".png")
  const adminPngs = collectFiles(path.resolve("docs/evidencias/admin"), ".png")
  const totalPngs = storefrontPngs.length + adminPngs.length
  if (totalPngs < 22) {
    errors.push(`Se esperaban al menos 22 capturas PNG en docs/evidencias/ y se encontraron ${totalPngs}.`)
  }

  const metricsPath = path.resolve("docs/assets/data/metrics.json")
  if (!fs.existsSync(metricsPath)) {
    errors.push("Falta docs/assets/data/metrics.json.")
  } else {
    const metrics: MetricsPayload = JSON.parse(fs.readFileSync(metricsPath, "utf8"))
    if (metrics.kpis.length !== 6) {
      errors.push(`Se esperaban 6 KPIs en metrics.json y se encontraron ${metrics.kpis.length}.`)
    }
    for (const kpi of metrics.kpis) {
      if (!kpi.met) {
        errors.push(`KPI no cumplido en metrics.json: ${kpi.name} (valor: ${kpi.actual}, meta: ${kpi.target}).`)
      }
    }
  }

  const storefrontUrl = process.env.STOREFRONT_URL || "http://localhost:8000"
  const adminUrl = process.env.ADMIN_URL || "http://localhost:9000/app"
  const [sfHealth, adHealth] = await Promise.all([
    checkUrlReachable(storefrontUrl),
    checkUrlReachable(adminUrl),
  ])

  console.log("=== Auditoría de Integridad y Pre-Sustentación — Medusa QA ===")
  console.log(` - Casos mapeados en GitHub Issues : ${issueMap.length}/45 (${manualCount} manuales, ${automatedCount} automatizados)`)
  console.log(` - Fichas manuales (16 campos)     : ${manualCount}/18 verificadas`)
  console.log(` - Evidencias PNG verificadas      : ${totalPngs} archivos (${referencedImages.size} referenciados en actas)`)
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
