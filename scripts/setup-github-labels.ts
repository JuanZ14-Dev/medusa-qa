import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import dotenv from "dotenv"

dotenv.config()

interface LabelDef {
  name: string
  color: string
  description: string
}

const repo = process.env.GITHUB_REPOSITORY || "JuanZ14-Dev/medusa-qa"
const labelsPath = path.resolve(".github/labels.json")
const labels: LabelDef[] = JSON.parse(fs.readFileSync(labelsPath, "utf8"))

for (const label of labels) {
  execFileSync(
    "gh",
    [
      "label",
      "create",
      label.name,
      "--repo",
      repo,
      "--color",
      label.color,
      "--description",
      label.description,
      "--force",
    ],
    { stdio: "inherit" }
  )
}

console.log(`Etiquetas sincronizadas en ${repo}: ${labels.length}`)
