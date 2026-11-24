# Guion de Sustentación Académica (30 Minutos) — Equipo QA Medusa

Este documento privado organiza la exposición oral y demostración en vivo ante la docente evaluadora en un tiempo máximo de **30 minutos** (25 minutos de exposición y demostración técnica + 5 minutos de preguntas), cubriendo los seis entregables obligatorios repartidos equitativamente entre **César Julio**, **Julián Cardona** y **Juanes Zapata**.

**Tabla 1**

*Distribución de bloques, tiempos y responsables del equipo (máximo 30 minutos)*

| Bloque | Integrante | Puntos de la Rúbrica Cubiertos | Tiempo | Minutos |
| --- | --- | --- | :---: | :---: |
| Bloque 1 | César Julio | 1. Descripción detallada del sistema en entorno real + 2. Plan de pruebas | 8.5 min | 0:00 – 8:30 |
| Bloque 2 | Julián Cardona | 3. Diseño de casos de prueba (51 CPs: 18 manuales / 33 automatizados / 34 pruebas) + 4. Reporte y regresión de 5 bugs (`DEF-001` a `DEF-005`) | 9.0 min | 8:30 – 17:30 |
| Bloque 3 | Juanes Zapata | 5. Métricas en dashboard visual + 6. Análisis final de calidad | 7.5 min | 17:30 – 25:00 |
| Cierre Q&A | Todos | Respuesta a preguntas de la docente y conclusiones | 5.0 min | 25:00 – 30:00 |

---

## Bloque 1 — César Julio (Minutos 0:00 a 8:30)

### Punto 1: Descripción detallada del sistema elegido en entorno real (Min 0:00 – 4:00)

- **Qué mostrar en pantalla:**
  1. Pestaña de **Medusa Storefront** (`http://localhost:8000/dk`).
  2. Pestaña de **Medusa Admin** (`http://localhost:9000/app`, sesión iniciada con `admin@medusa-test.com`).
  3. Terminal breve mostrando `postgresql-x64-17` activo en el puerto `5432`.
- **Qué decir (guion sugerido):**
  > "Buenas tardes profesora. Nuestro equipo, conformado por Julián Cardona, Juanes Zapata y quien les habla, César Julio, ejecutó un proyecto integral de Aseguramiento de Calidad sobre **Medusa**, una plataforma de comercio electrónico *headless* moderna de arquitectura modular en TypeScript y Node.js."
  >
  > "No probamos una maqueta estática, sino un entorno real completo desplegado localmente con tres capas activas: primero, el **Storefront** en Next.js sobre `http://localhost:8000` orientado al comprador final; segundo, la consola **Medusa Admin** en `http://localhost:9000/app` para la operación comercial; y tercero, el servidor API REST en el puerto `9000` conectado a una base de datos real **PostgreSQL 17** (`medusa_app`) con productos semilla (`Medusa T-Shirt`, `Medusa Sweatshirt`, `Medusa Sweatpants` y `Medusa Shorts`) y región `Europe` en euros."
  >
  > "En vivo podemos ver cómo el catálogo público consume los endpoints `/store/*` con clave publicable, mientras el panel administrativo gestiona productos, órdenes, inventario por ubicación y promociones mediante `/admin/*`."
- **Acción en vivo:** Navegar rápidamente en `http://localhost:8000/dk` hacia un producto y mostrar el panel de Productos/Órdenes en `http://localhost:9000/app`.

### Punto 2: Plan de pruebas (Min 4:00 – 8:30)

- **Qué mostrar en pantalla:** `https://juanz14-dev.github.io/medusa-qa/plan-de-pruebas.html` (y comparativa rápida con `plan_pruebas (1).pdf`).
- **Qué decir (guion sugerido):**
  > "Para gobernar todo el proceso seguimos exactamente la estructura de las **14 secciones** del formato oficial `plan_pruebas (1).pdf`, redactado bajo normas **APA 7.ª edición** con tablas numeradas, estilo objetivo y referencias formales."
  >
  > "En la portada registramos la versión `1.2` (`23/11/2026`) y estado `Aprobado`, seguido por el historial de cambios, el propósito y la tabla de alcance que delimita los flujos funcionales E2E e integración UI/API frente a pruebas de carga masiva (>500 usuarios) y pasarelas bancarias externas."
  >
  > "Definimos tres objetivos medibles: 100 % de casos críticos aprobados, 0 defectos críticos abiertos al cierre y trazabilidad completa de **51 casos de prueba** en el libro Excel oficial y la matriz de trazabilidad, dedicando GitHub Issues única y exclusivamente al reporte y seguimiento de defectos (`DEF-*`). En la Sección 4 asignamos los roles reales del equipo y la **Matriz RACI**; en la Sección 5 seleccionamos pruebas funcionales, de regresión, integración, seguridad básica de acceso, usabilidad responsiva y UAT, aplicando **Partición de Equivalencia (EP)**, **Análisis de Valores Límite (BVA)**, **Tablas de Decisión** y **Transición de Estados**."
  >
  > "Por último, documentamos los criterios de entrada, salida, suspensión y reanudación, el cronograma ejecutado entre el 18 y el 23 de noviembre de 2026 y la matriz de riesgos."
- **Transición a Julián:**
  > "Con esta estrategia aprobada pasamos al diseño de casos en Excel, la automatización en Playwright y la gestión de defectos, parte que presentará mi compañero Julián."

---

## Bloque 2 — Julián Cardona (Minutos 8:30 a 17:30)

### Punto 3: Diseño de casos de prueba — 51 casos: 18 manuales y 33 automatizados (Min 8:30 – 14:00)

- **Qué mostrar en pantalla:**
  1. Libro Excel oficial `casos-de-prueba/casos-de-prueba-medusa.xlsx` (Hoja 1 `User Story 001` con las 13 columnas exactas paso a paso y Hoja 2 `User Story 2` con ejecución y regresión de defectos).
  2. `https://juanz14-dev.github.io/medusa-qa/matriz-trazabilidad.html` y `casos-de-prueba/matriz-casos.md`.
  3. Una ficha manual de 16 campos (`casos-de-prueba/manuales/storefront/auth/CP-AUTH-01.md`) y su captura real en `docs/evidencias/storefront/CP-AUTH-01.png`.
  4. Terminal en `C:\Users\USUARIO\teamwork_projects\medusa_qa` para ejecución en vivo.
- **Qué decir (guion sugerido):**
  > "Gracias César. La rúbrica exigía un mínimo de 40 casos con al menos 15 manuales; nosotros diseñamos y ejecutamos **51 casos de prueba** sobre las 10 historias de usuario (`HU-01` a `HU-10`) en 9 módulos: **18 manuales** (9 en Storefront y 9 en Admin) y **33 especificaciones automatizadas** en **Playwright + TypeScript** (34 pruebas en total bajo patrón *Page Object Model*)."
  >
  > "Conservamos intactos los 45 casos originales (`CP-AUTH-01` a `CP-PRM-04`) y añadimos 6 nuevos casos automatizados (`CP-AUTH-06`, `CP-CAR-06`, `CP-CHK-07`, `CP-CHK-08`, `CP-CHK-09` y `CP-INV-05`) para cubrir hallazgos reales en vivo y escenarios de inyección controlada. Todo el catálogo quedó documentado paso a paso en nuestro libro Excel oficial siguiendo exactamente las 13 columnas de la Hoja 1 (`User Story 001`) y las 9 columnas de la Hoja 2 (`User Story 2`), además de las fichas manuales de 16 campos."
  >
  > "Como ejemplo del rigor de diseño: en `CP-CAR-03` y `CP-CAR-04` aplicamos **Valores Límite (BVA)** sobre cantidades `0`, `1` y `2`; en `CP-INV-02` y `CP-INV-05` probamos inventario en límite cero (`0`); en `CP-CHK-04` y `CP-CHK-08` validamos **Partición de Equivalencia** de correo y teléfono; y en `CP-CHK-07` validamos usabilidad responsiva móvil a `375x812`."
- **Acción en vivo (ejecución real en terminal):**
  ```powershell
  npx playwright test tests/storefront/chk/CP-CHK-09.spec.ts tests/storefront/inv/CP-INV-05.spec.ts
  ```
  *(La suite completa `npm run test:e2e` ejecuta 34 pruebas en ~2.9 minutos y cierra con `34 passed`.)*

### Punto 4: Reporte de bugs y cierre por regresión (Min 14:00 – 17:30)

- **Qué mostrar en pantalla:**
  1. `.github/ISSUE_TEMPLATE/reporte-defecto.yml` (plantilla exclusiva de 17 campos en GitHub Issues).
  2. GitHub Issues `#46`–`#50` (`https://github.com/JuanZ14-Dev/medusa-qa/issues?q=is%3Aissue`) y `defectos/registro-defectos.md`.
  3. Capturas reales previas a la corrección en `docs/evidencias/defectos/*.png`.
- **Qué decir (guion sugerido):**
  > "De acuerdo con la Sección 8 del Plan de Pruebas, dedicamos **GitHub Issues exclusivamente a defectos (`DEF-*`)** mediante la plantilla YAML oficial de **17 campos**, clasificados en cuatro niveles de severidad."
  >
  > "Con total transparencia técnica reportamos **5 defectos** (`DEF-001` a `DEF-005`, issues `#46` al `#50`), todos reproducidos y capturados en vivo antes de su corrección: primero, **3 hallazgos reales** detectados durante inspección en Storefront desktop y móvil —`DEF-001` (Alta: enlaces rotos 404 de privacidad y términos en registro), `DEF-002` (Media: opción duplicada `value=1` en el selector del carrito) y `DEF-003` (Media: compresión móvil `375x812` y falta de validación telefónica en checkout)—; y segundo, **2 inyecciones controladas** en local para ejercitar defectos severos —`DEF-004` (**Crítica**: total de orden omitiendo envío e impuestos) y `DEF-005` (**Alta**: botón `Add to cart` habilitado con stock cero)—."
  >
  > "Cada defecto falló primero en nuestras pruebas Playwright, fue corregido localmente en `medusa_app` y cerrado por regresión en GitHub Issues y en la Hoja 2 del Excel, finalizando con **0 defectos críticos o abiertos**."
- **Transición a Juanes:**
  > "A continuación, Juanes presentará cómo consolidamos estos resultados en el dashboard de métricas y el análisis final de calidad."

---

## Bloque 3 — Juanes Zapata (Minutos 17:30 a 25:00)

### Punto 5: Métricas de prueba presentadas en dashboard (Min 17:30 – 21:00)

- **Qué mostrar en pantalla:**
  1. **Dashboard Visual en GitHub Pages:** `https://juanz14-dev.github.io/medusa-qa/dashboard.html`.
  2. Archivo `docs/assets/data/metrics.json` y brevemente `scripts/generate-metrics.ts`.
- **Qué decir (guion sugerido):**
  > "Gracias Julián. Para evitar métricas manuales propensas a error, el script `generate-metrics.ts` lee directamente la matriz de 51 casos, el reporte JSON real de Playwright (`34/34`), las 18 actas manuales y la consulta en vivo a GitHub Issues (`gh issue list --label type:defect`), generando `metrics.json` para nuestro **Dashboard Visual en GitHub Pages**."
  >
  > "En pantalla vemos las tarjetas KPI con las **6 métricas exactas** del Plan de Pruebas, las gráficas interactivas en Chart.js por módulo funcional y por superficie (**28 casos en Storefront** y **23 en Admin**), además del diagrama Mermaid con las fases estándar del ciclo QA y las responsabilidades del equipo."
  >
  > "Frente a las metas definidas obtuvimos: **Tasa de ejecución**: `100 %` (`51/51`, meta `>= 95 %`); **Tasa de aprobación**: `100 %` (`51/51`, meta `>= 90 %`); **Densidad de defectos**: `0.0980` (`5 / 51 < 0.1`); **Defectos críticos abiertos**: `0` (meta `= 0`); **Tasa de reapertura**: `0 %` (`0/5`, meta `< 5 %`); y **Cobertura de requisitos**: `100 %` sobre las 10 historias de usuario."

### Punto 6: Análisis de la calidad del software con base en las métricas (Min 21:00 – 25:00)

- **Qué mostrar en pantalla:**
  1. `https://juanz14-dev.github.io/medusa-qa/informe-final-calidad.html`.
  2. `https://juanz14-dev.github.io/medusa-qa/acta-auditoria-calidad.html`.
  3. Terminal ejecutando `npm run docs:validate` (0 errores APA 7.ª edición).
- **Qué decir (guion sugerido):**
  > "Al analizar estas seis métricas en el Informe Final de Calidad bajo **normas APA 7.ª edición**, concluimos que el núcleo transaccional de Medusa presenta **alta estabilidad funcional y de integración** tras remediar los defectos visuales y de validación detectados en Storefront. Tanto las actualizaciones de catálogo, inventario y promociones en Admin como el flujo completo de checkout persisten de forma consistente en PostgreSQL 17."
  >
  > "También mantenemos transparencia sobre el alcance y riesgos residuales: las pruebas de carga superior a 500 usuarios concurrentes y las pasarelas bancarias productivas quedaron fuera de alcance, por lo que recomendamos pruebas de rendimiento con k6 antes de pasar a producción."
  >
  > "Finalmente, ejecutamos nuestra auditoría interna de cierre (`acta-auditoria-calidad.md`) verificando el libro Excel de 51 casos, 27 capturas reales en `docs/evidencias/` (Storefront, Admin y defectos), los 5 issues cerrados (`#46`–`#50`) y `npm run docs:validate` con 0 errores en los 8 documentos APA 7.ª edición, emitiendo dictamen **APROBADO**. Quedamos atentos a sus preguntas, profesora."

---

## Bloque de Cierre — Respuestas Rápidas para Preguntas (Min 25:00 – 30:00)

**Tabla 2**

*Reparto de preguntas frecuentes de sustentación por integrante*

| Pregunta probable de la docente | Responde | Respuesta concreta |
| --- | --- | --- |
| ¿Por qué eligieron Medusa y no otra app? | César Julio | Porque es un sistema real de comercio electrónico *headless* con dos interfaces independientes (`:8000` y `:9000/app`), API REST y PostgreSQL 17, lo que permite validar integración real extremo a extremo. |
| ¿Cómo garantizan que las 51 pruebas son reales y no simuladas? | Julián Cardona | Mostrando las 18 actas manuales, los 33 archivos `.spec.ts` (34 pruebas Playwright), las 27 capturas reales en `docs/evidencias/` y ejecutando `npm run test:e2e` en vivo contra `localhost:8000` y `localhost:9000/app`. |
| ¿Por qué combinaron hallazgos reales con inyección controlada? | Julián Cardona | La inspección en vivo halló 3 bugs reales en Storefront (`DEF-001` a `DEF-003`, Media/Alta); para validar también respuesta a severidad Crítica (`DEF-004`) y stock cero en UI (`DEF-005`) aplicamos 2 inyecciones controladas en local, manteniendo la densidad en `5 / 51 = 0.0980 < 0.1` y cerrando todos por regresión. |
| ¿Qué pasaría si el dashboard mostrara defectos en otra corrida? | Juanes Zapata | `generate-metrics.ts` consulta `gh issue list --label type:defect` y `reports/results.json` en tiempo real, recalculando automáticamente densidad, críticos abiertos y tasa de reapertura en `metrics.json`. |
| ¿Cómo verificaron las normas APA 7.ª edición? | Juanes Zapata | Mediante jerarquía de títulos, tablas numeradas con título en cursiva y nota, estilo impersonal, cero emojis y el validador `scripts/validate-apa7.ts` junto con `referencias-apa7.md`. |
