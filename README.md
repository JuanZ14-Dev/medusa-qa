# Proyecto de Aseguramiento de Calidad (QA) — Sistema de Comercio Electrónico Medusa

Repositorio oficial de planificación, diseño, automatización, trazabilidad y análisis de calidad sobre la plataforma de comercio electrónico **Medusa** (Storefront en `http://localhost:8000` y Admin en `http://localhost:9000/app`).

- **Sitio público (GitHub Pages):** https://juanz14-dev.github.io/medusa-qa/
- **Dashboard visual de métricas:** https://juanz14-dev.github.io/medusa-qa/dashboard.html

## Equipo QA

- **Juanes Zapata** — QA Lead / Líder de Pruebas (Planificación, RACI, Métricas, Dashboard y Auditoría de Cierre).
- **César Julio** — QA Analyst / Analista de Pruebas (Diseño de casos manuales, ejecución funcional Storefront `:8000`, evidencias y documentación APA 7.ª).
- **Julián Cardona** — QA Automatizador & Gestión de Defectos (Playwright + TypeScript, ejecución en Admin `:9000/app` y Storefront, reporte y seguimiento de defectos `DEF-*` en GitHub Issues).

## Estructura del Proyecto

- `docs/`: Plan de Pruebas (estructura fiel a `plan_pruebas (1).pdf`), Informe Final de Calidad bajo normas APA 7.ª edición, Matriz de Trazabilidad, Referencias APA 7.ª, Acta de Auditoría y Dashboard visual para GitHub Pages.
- `casos-de-prueba/`: Libro Excel oficial (`casos-de-prueba-medusa.xlsx`, Hoja 1 de 51 casos paso a paso y Hoja 2 de ejecución y regresión de defectos), matriz consolidada de 51 casos de prueba (18 manuales y 33 automatizados) y fichas individuales de 16 campos en `manuales/`.
- `tests/`: Suite automatizada en Playwright + TypeScript organizada con Page Object Model (`pages/`, `fixtures/`, `helpers/`, `storefront/`, `admin/`), con 33 archivos `.spec.ts` (34 pruebas totales).
- `defectos/`: Plantilla oficial de reporte de defecto de 17 campos y registro sincronizado con GitHub Issues (`DEF-001` a `DEF-005`).
- `scripts/`: Utilidades CLI para cálculo de métricas (`generate-metrics.ts`), sincronización de etiquetas de defectos (`setup-github-labels.ts`) y validación de formato APA 7.ª edición (`validate-apa7.ts`).
- `.github/`: Etiquetas normalizadas, plantilla oficial de reporte de defectos (`reporte-defecto.yml` de 17 campos) en GitHub Issues y flujos de CI/Pages.

## Guía Rápida de Reproducción (Para Nuevos Integrantes)

### 1. Prerrequisitos

- **Node.js** `>= 22`
- **PostgreSQL 17** activo en el puerto `5432`
- **Git** y **GitHub CLI (`gh`)** autenticado (`gh auth login`), únicamente si se van a ejecutar scripts `gh:*` o `metrics:generate`

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

### 4. Gestión de Defectos en GitHub Issues y Generación de Métricas (Opcional)

> **Nota:** GitHub Issues está dedicado única y exclusivamente al reporte y seguimiento de defectos (`DEF-*`) mediante `.github/ISSUE_TEMPLATE/reporte-defecto.yml`. Si realizas pruebas en solitario y no deseas alterar el repositorio principal, crea un **Fork** en GitHub y ajusta `GITHUB_REPOSITORY=<tu-usuario>/medusa-qa` en tu `.env`.

```bash
npm run gh:labels
npm run metrics:generate
```
