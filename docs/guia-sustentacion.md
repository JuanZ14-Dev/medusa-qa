# Guía de Sustentación Académica — Proyecto QA Medusa

Este documento orienta la exposición oral y demostración técnica ante la docente evaluadora, organizando los puntos clave del repositorio `JuanZ14-Dev/medusa-qa`, los comandos de demostración en vivo y las respuestas argumentadas a preguntas frecuentes.

**Tabla 1**

*Guion estructurado de sustentación (duración estimada: 10 minutos)*

| Bloque | Tiempo | Objetivo de Exposición | Evidencia a Mostrar en Pantalla |
| --- | :---: | --- | --- |
| 1. Contexto y SUT | 1.5 min | Presentar Medusa Storefront (`:8000`) y Admin (`:9000/app`) y la base de datos PostgreSQL 17 | Pestañas de Storefront y Admin en vivo |
| 2. Plan de Pruebas y APA 7.ª | 2.0 min | Demostrar fidelidad exacta a `plan_pruebas (1).pdf` (Portada + Secciones 1–14) y formato APA 7.ª | `docs/plan-de-pruebas.md` y `npm run docs:validate` |
| 3. Gestión en GitHub | 2.0 min | Mostrar las 26 etiquetas, plantillas YAML (16 y 17 campos) y los 45 GitHub Issues (`#1`–`#45`) | Pestaña Issues en `github.com/JuanZ14-Dev/medusa-qa` |
| 4. Estrategia y 45 Casos | 2.0 min | Explicar las técnicas EP, BVA, Tabla de decisión y la distribución 18 manuales / 27 automatizados | `casos-de-prueba/matriz-casos.md` y un `.spec.ts` |
| 5. Ejecución en vivo | 1.5 min | Ejecutar la suite Playwright contra el sistema vivo y mostrar capturas manuales reales | `npm run test:e2e` y `docs/evidencias/` |
| 6. Métricas, Dashboard y Cierre | 1.0 min | Presentar las 6 métricas de calidad, el dashboard visual y el dictamen final | `docs/dashboard.md` y `docs/informe-final-calidad.md` |

## Comandos Recomendados para la Demostración en Vivo

Antes de iniciar la sustentación, asegúrese de que las instancias de `medusa_app` estén activas (`http://localhost:8000` y `http://localhost:9000/app`) y abra una terminal en `C:\Users\USUARIO\teamwork_projects\medusa_qa`:

```powershell
# 1. Verificar tipos TypeScript y validación APA 7.ª edición
npm run typecheck
npm run docs:validate

# 2. Ejecutar un subconjunto rápido o la suite completa de 28 pruebas automatizadas
npx playwright test tests/storefront/cat/CP-CAT-03.spec.ts tests/admin/prd/CP-PRD-03.spec.ts
# O suite completa:
npm run test:e2e

# 3. Mostrar trazabilidad en GitHub Issues y métricas calculadas
gh issue list --repo JuanZ14-Dev/medusa-qa --label type:test-case --limit 10
Get-Content docs\assets\data\metrics.json
```

## Respuestas Clave a Posibles Preguntas de la Profesora

1. **¿Por qué se seleccionaron 45 casos (18 manuales y 27 automatizados)?**
   La rúbrica exige un mínimo de 40 casos; se diseñaron 45 para cubrir las 10 historias de usuario (`HU-01` a `HU-10`) en los 9 módulos críticos (`AUTH`, `CAT`, `CAR`, `CHK`, `CUS`, `PRD`, `ORD`, `INV`, `PRM`). Los 18 manuales validan criterios visuales y usabilidad (UX), mientras que los 27 automatizados en Playwright garantizan regresión rápida e integración UI/API.
2. **¿Cómo se aplicaron las técnicas de diseño de caja negra?**
   Se empleó Partición de Equivalencia (EP) en formularios de autenticación, checkout y validación de productos; Análisis de Valores Límite (BVA) en cantidades del carrito (`0`, `1`, `2`) y límites de inventario (`-1`, `0`, `99999`); Tablas de Decisión en combinaciones de variantes, cancelación de órdenes y estados de promociones; y Transición de Estados en el ciclo `Draft -> Published` y pagos.
3. **¿Cómo se gestionan los defectos si el proyecto obtuvo 0 fallos?**
   La gestión preventiva y correctiva está completamente implementada mediante `.github/ISSUE_TEMPLATE/reporte-defecto.yml` (17 campos exactos de la Sección 8.2), la clasificación de severidad y SLA (`Crítica`, `Alta`, `Media`, `Baja`) y `defectos/registro-defectos.md`. Durante la ejecución sobre el build estable de Medusa v2 no se presentaron defectos funcionales, lo que arrojó una densidad de defectos de `0.00` (meta `< 0.1`).
4. **¿Cómo se asegura el cumplimiento de las normas APA 7.ª edición?**
   Se estructuraron encabezados jerárquicos, tablas numeradas en negrita (`**Tabla N**`) con título en cursiva y notas aclaratorias, redacción impersonal y objetiva, cero emojis y referencias formales en `docs/referencias-apa7.md`, verificados automáticamente mediante `scripts/validate-apa7.ts`.
5. **¿Cómo se automatizó el trabajo con subagentes?**
   El proyecto se dividió en 5 oleadas DAG con 8 subagentes especializados (`SA-01` a `SA-08`), separando estrictamente la propiedad de escritura entre Storefront (`SA-04`) y Admin (`SA-05`) para ejecutar en paralelo sin colisiones de datos, seguidos por sincronización en GitHub (`SA-06`), métricas/dashboard (`SA-07`) y auditoría independiente (`SA-08`).
6. **¿Con qué herramientas tecnológicas se construyó y ejecutó el proyecto?**
   El SUT opera sobre **Medusa v2** (Next.js Storefront y Admin), **Node.js `v24.15.0`**, **PostgreSQL `17.12`**, **WSL 2** y **Docker Desktop `4.99.0`**. La automatización se desarrolló con **Playwright `1.65.1`** (Chromium y `APIRequestContext`), **TypeScript `5.7.3`**, **`tsx`**, **`dotenv`** y **Prettier**. La gestión y CI/CD se soportaron en **GitHub Issues** (plantillas YAML), **GitHub CLI (`gh`)** y **GitHub Actions**. La documentación y el tablero se publicaron con **Markdown**, **GitHub Pages (Jekyll)**, **Chart.js**, **Mermaid** y el validador **`scripts/validate-apa7.ts`**.
