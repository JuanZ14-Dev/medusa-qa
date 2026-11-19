# Proyecto de Aseguramiento de Calidad (QA) — Sistema de Comercio Electrónico Medusa

Repositorio oficial de planificación, diseño, automatización, trazabilidad y análisis de calidad sobre la plataforma de comercio electrónico **Medusa** (Storefront en `http://localhost:8000` y Admin en `http://localhost:9000/app`).

## Estructura del Proyecto

- `docs/`: Plan de Pruebas (estructura fiel a `plan_pruebas (1).pdf`), Informe Final de Calidad bajo normas APA 7.ª edición, Matriz de Trazabilidad, Referencias APA 7.ª y Dashboard visual para GitHub Pages.
- `casos-de-prueba/`: Matriz consolidada de 45 casos de prueba (18 manuales y 27 automatizados), fichas individuales de 16 campos y mapeo hacia GitHub Issues (`github-issues-map.json`).
- `tests/`: Suite automatizada en Playwright + TypeScript organizada con Page Object Model (`pages/`, `fixtures/`, `helpers/`, `storefront/`, `admin/`).
- `defectos/`: Plantilla de reporte de defecto de 17 campos y registro sincronizado con GitHub Issues.
- `scripts/`: Utilidades CLI para sincronización con GitHub Issues, cálculo de métricas y validación de formato APA 7.ª edición.
- `.github/`: Etiquetas normalizadas, plantillas de GitHub Issues (casos de prueba y defectos) y flujos de CI/Pages.

## Comandos Principales

```bash
npm install
npm run typecheck
npm run gh:labels
npm run gh:sync-cases
npm run test:e2e
```
