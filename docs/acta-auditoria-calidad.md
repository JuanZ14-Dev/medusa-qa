# Acta de Auditoría Independiente de Calidad

## 1. Objeto de la Auditoría

El presente documento certifica la auditoría interna de cierre realizada el 23 de noviembre de 2026 por el equipo de Aseguramiento de Calidad (**Juanes Zapata**, **César Julio** y **Julián Cardona**) sobre el proyecto de Aseguramiento de Calidad (QA) del sistema de comercio electrónico **Medusa** (`JuanZ14-Dev/medusa-qa`), verificando el cumplimiento exacto de la estructura de `plan_pruebas (1).pdf`, la rúbrica universitaria, la integridad de las evidencias reales en vivo y el apego a las normas APA 7.ª edición.

## 2. Verificación de Evidencias y Criterios de Cierre

**Tabla 1**

*Resultado de la auditoría de cierre por dimensión de calidad*

| Dimensión auditada | Evidencia verificada | Resultado esperado | Resultado observado | Estado |
| --- | --- | --- | --- | --- |
| Fidelidad a `plan_pruebas (1).pdf` | `docs/plan-de-pruebas.md` (Portada + Secciones 1–14, incl. 13 duplicada, plantillas de 16 y 17 campos, 6 métricas) | 100 % de secciones y tablas | 100 % conforme | Aprobado |
| Cobertura de casos de prueba y Excel | 18 fichas en `casos-de-prueba/manuales/` + 33 specs en `tests/` + `casos-de-prueba/casos-de-prueba-medusa.xlsx` (Hoja 1 y Hoja 2) | Mínimo 40 casos (51 planificados) | 51/51 ejecutados (34/34 tests Playwright aprobados, 18/18 manuales aprobados) | Aprobado |
| Gestión exclusiva de defectos en GitHub | `gh issue list --repo JuanZ14-Dev/medusa-qa --state all` y `.github/ISSUE_TEMPLATE/reporte-defecto.yml` | Plantilla única de 17 campos e issues `DEF-*` cerrados por regresión | 5 issues `DEF-001`..`DEF-005` (`#46`–`#50`) cerrados (3 reales, 2 inyección controlada; 0 abiertos) | Aprobado |
| Evidencias visuales y reportes | `docs/evidencias/{storefront,admin,defectos}/*.png` y `reports/results.json` | Capturas reales de `:8000`, `:9000/app` y defectos previos al arreglo | 9 Storefront + 13 Admin + 5 defectos (27 PNGs) + reporte JSON/HTML/JUnit | Aprobado |
| Métricas y Dashboard GitHub Pages | `docs/assets/data/metrics.json`, `docs/dashboard.md`, `docs/dashboard.html`, `docs/index.md` | 6 métricas calculadas y dashboard visual actualizado | 6/6 metas cumplidas (densidad `0.0980 < 0.1`, críticos abiertos = `0`) | Aprobado |
| Normas APA 7.ª edición | `npm run docs:validate` (`scripts/validate-apa7.ts`) | Títulos, tablas numeradas, estilo objetivo, cero emojis y referencias | 0 errores de validación en 8 documentos | Aprobado |

*Nota.* Fuente: Auditoría ejecutada sobre el repositorio `JuanZ14-Dev/medusa-qa` el 23/11/2026.

## 3. Dictamen Final

Con base en la verificación cruzada entre los resultados de Playwright, el libro Excel de 2 hojas (`User Story 001` y `User Story 2`), las 27 capturas de pantalla reales en `docs/evidencias/`, los 5 defectos cerrados en GitHub Issues (`#46`–`#50`) y la validación automatizada de formato APA 7.ª edición, se emite dictamen **APROBADO** para el cierre del proyecto de QA.
