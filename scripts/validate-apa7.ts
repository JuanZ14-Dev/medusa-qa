import fs from "node:fs"
import path from "node:path"

const DOCS_DIR = path.resolve("docs")
const EMOJI_REGEX = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u

function collectMarkdownFiles(dir: string): string[] {
  const results: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectMarkdownFiles(full))
    } else if (entry.name.endsWith(".md")) {
      results.push(full)
    }
  }
  return results
}

function main(): void {
  const files = collectMarkdownFiles(DOCS_DIR)
  const errors: string[] = []

  for (const file of files) {
    const rel = path.relative(process.cwd(), file)
    const content = fs.readFileSync(file, "utf8")

    if (EMOJI_REGEX.test(content)) {
      errors.push(`${rel}: contiene emojis prohibidos por estilo APA 7.ª edición.`)
    }

    if (!/^#\s+/m.test(content)) {
      errors.push(`${rel}: carece de título principal H1.`)
    }

    const hasTables = /^\|.+\|$/m.test(content)
    if (hasTables && !/\*\*Tabla \d+\*\*/.test(content)) {
      errors.push(`${rel}: contiene tablas sin numeración APA (**Tabla N**).`)
    }
  }

  const refsPath = path.join(DOCS_DIR, "referencias-apa7.md")
  if (!fs.existsSync(refsPath)) {
    errors.push("Falta docs/referencias-apa7.md.")
  }

  if (errors.length > 0) {
    console.error("Errores de validación APA 7.ª edición:")
    for (const err of errors) console.error(` - ${err}`)
    process.exit(1)
  }

  console.log(`Validación APA 7.ª edición aprobada (${files.length} documentos verificados, 0 errores).`)
}

main()
