# Proyecto de Aseguramiento de Calidad (QA) — Sistema de Comercio Electrónico Medusa

Repositorio oficial de planificación, diseño, automatización, trazabilidad y análisis de calidad sobre la plataforma de comercio electrónico **Medusa** (Storefront en `http://localhost:8000` y Admin en `http://localhost:9000/app`).

- **Sitio público (GitHub Pages):** https://juanz14-dev.github.io/medusa-qa/
- **Dashboard visual de métricas:** https://juanz14-dev.github.io/medusa-qa/dashboard.html

## Estructura del Proyecto

- `docs/`: Plan de Pruebas (estructura fiel a `plan_pruebas (1).pdf`), Informe Final de Calidad bajo normas APA 7.ª edición, Matriz de Trazabilidad, Referencias APA 7.ª, Acta de Auditoría y Dashboard visual para GitHub Pages.
- `casos-de-prueba/`: Matriz consolidada de 45 casos de prueba (18 manuales y 27 automatizados), fichas individuales de 16 campos y mapeo hacia GitHub Issues (`github-issues-map.json`).
- `tests/`: Suite automatizada en Playwright + TypeScript organizada con Page Object Model (`pages/`, `fixtures/`, `helpers/`, `storefront/`, `admin/`).
- `defectos/`: Plantilla de reporte de defecto de 17 campos y registro sincronizado con GitHub Issues.
- `scripts/`: Utilidades CLI para sincronización con GitHub Issues, cálculo de métricas y validación de formato APA 7.ª edición.
- `.github/`: Etiquetas normalizadas, plantillas de GitHub Issues (casos de prueba y defectos) y flujos de CI/Pages.

## Guía Rápida de Reproducción (Para Nuevos Integrantes)

### 1. Prerrequisitos

- **Node.js** `>= 22`
- **PostgreSQL 17** activo en el puerto `5432`
- **Git** y **GitHub CLI (`gh`)** autenticado (`gh auth login`), únicamente si se van a ejecutar scripts `gh:*`

### 2. Preparar el Sistema Bajo Prueba (Medusa)

1. Crear una instancia local de Medusa (o clonar el proyecto `medusa_app` del equipo) con base de datos PostgreSQL y datos semilla:
   ```bash
   npx create-medusa-app@latest
   ```
2. Dentro de `apps/backend`, crear el usuario administrador de QA:
   ```bash
   npx medusa user -e admin@medusa-test.com -p supersecret
   ```
3. Copiar el valor de `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` (ubicado en `apps/storefront/.env.local`) y verificar `NEXT_PUBLIC_DEFAULT_REGION` (por defecto `dk`).
4. Iniciar Storefront (`:8000`) y Admin/Backend (`:9000/app`):
   ```bash
   npm run dev
   ```

### 3. Instalar y Ejecutar la Suite QA (`medusa-qa`)

```bash
git clone https://github.com/JuanZ14-Dev/medusa-qa.git
cd medusa-qa
npm install
npx playwright install chromium
```

Crear el archivo `.env` a partir de `.env.example` (en Windows PowerShell: `Copy-Item .env.example .env`) y reemplazar `MEDUSA_PUBLISHABLE_KEY` con la clave generada en el paso anterior.

```bash
# Validar tipos TypeScript y cumplimiento APA 7.ª edición
npm run typecheck
npm run docs:validate

# Ejecutar toda la suite E2E e integración UI/API (Storefront + Admin)
npm run test:e2e

# Ejecutar solo una superficie
npm run test:storefront
npm run test:admin
```

### 4. Sincronización con GitHub Issues y Métricas (Opcional)

> **Advertencia:** Si realizas pruebas en solitario y no deseas modificar los 45 issues oficiales del repositorio principal, crea un **Fork** en GitHub y cambia `GITHUB_REPOSITORY=<tu-usuario>/medusa-qa` en tu `.env` antes de ejecutar comandos `gh:*`.

```bash
npm run gh:labels
npm run gh:sync-cases
npm run gh:sync-results
npm run metrics:generate
```
