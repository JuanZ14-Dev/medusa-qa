# Acta de Auditoría Independiente de Calidad

## 1. Objeto de la Auditoría

El presente documento certifica la auditoría independiente de cierre (**Oleada 5 — `SA-08`**) realizada el 19 de noviembre de 2026 sobre el proyecto de Aseguramiento de Calidad (QA) del sistema de comercio electrónico **Medusa** (`JuanZ14-Dev/medusa-qa`), verificando el cumplimiento exacto de la estructura de `plan_pruebas (1).pdf`, la rúbrica universitaria, la integridad de las evidencias reales y el apego a las normas APA 7.ª edición.

## 2. Verificación de Evidencias y Criterios de Cierre

**Tabla 1**

*Resultado de la auditoría independiente por dimensión de calidad*

| Dimensión auditada | Evidencia verificada | Resultado esperado | Resultado observado | Estado |
| --- | --- | --- | --- | --- |
| Fidelidad a `plan_pruebas (1).pdf` | `docs/plan-de-pruebas.md` (Portada + Secciones 1–14, incl. 13 duplicada, plantillas de 16 y 17 campos, 6 métricas) | 100 % de secciones y tablas | 100 % conforme | Aprobado |
| Cobertura de casos de prueba | 18 fichas en `casos-de-prueba/manuales/` + 27 specs en `tests/` | Mínimo 40 casos (45 planificados) | 45/45 ejecutados (28/28 tests Playwright aprobados, 18/18 manuales aprobados) | Aprobado |
| Gestión integral en GitHub | `gh issue list --repo JuanZ14-Dev/medusa-qa` | 45 issues `CP-*` sincronizados + issues `DEF-*` si hay fallos | 45/45 issues con etiqueta `status:passed` y 0 defectos (`type:defect`) | Aprobado |
| Evidencias visuales y reportes | `docs/evidencias/{storefront,admin}/*.png` y `reports/results.json` | Capturas reales de `:8000` y `:9000/app` | 9 capturas Storefront + 13 capturas Admin + reporte JSON/HTML/JUnit | Aprobado |
| Métricas y Dashboard GitHub Pages | `docs/assets/data/metrics.json`, `docs/dashboard.md`, `docs/index.md` | 6 métricas calculadas y dashboard visual | 6/6 metas cumplidas y tablero operativo | Aprobado |
| Normas APA 7.ª edición | `npm run docs:validate` (`scripts/validate-apa7.ts`) | Títulos, tablas numeradas, estilo objetivo, cero emojis y referencias | 0 errores de validación | Aprobado |

*Nota.* Fuente: Auditoría ejecutada sobre el repositorio `JuanZ14-Dev/medusa-qa` el 19/11/2026.

## 3. Dictamen Final

Con base en la verificación cruzada entre los resultados de Playwright, las capturas de pantalla reales en `docs/evidencias/`, los registros sincronizados en GitHub Issues y la validación automatizada de formato APA 7.ª edición, se emite dictamen **APROBADO** para el cierre del proyecto de QA.
