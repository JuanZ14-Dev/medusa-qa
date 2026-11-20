# Guion de Sustentación Académica (30 Minutos) — Equipo QA Medusa

Este documento privado organiza la exposición oral y demostración en vivo ante la docente evaluadora en un tiempo máximo de **30 minutos** (25 minutos de exposición y demostración técnica + 5 minutos de preguntas), cubriendo los seis entregables obligatorios repartidos equitativamente entre **César**, **Julián** y **Juanes**.

**Tabla 1**

*Distribución de bloques, tiempos y responsables del equipo (máximo 30 minutos)*

| Bloque | Integrante | Puntos de la Rúbrica Cubiertos | Tiempo | Minutos |
| --- | --- | --- | :---: | :---: |
| Bloque 1 | César | 1. Descripción detallada del sistema en entorno real + 2. Plan de pruebas | 8.5 min | 0:00 – 8:30 |
| Bloque 2 | Julián | 3. Diseño de casos de prueba (45 CPs: 18 manuales / 27 automatizados) + 4. Reporte de bugs | 9.0 min | 8:30 – 17:30 |
| Bloque 3 | Juanes | 5. Métricas en dashboard visual + 6. Análisis final de calidad | 7.5 min | 17:30 – 25:00 |
| Cierre Q&A | Todos | Respuesta a preguntas de la docente y conclusiones | 5.0 min | 25:00 – 30:00 |

---

## Bloque 1 — César (Minutos 0:00 a 8:30)

### Punto 1: Descripción detallada del sistema elegido en entorno real (Min 0:00 – 4:00)

- **Qué mostrar en pantalla:**
  1. Pestaña de **Medusa Storefront** (`http://localhost:8000`).
  2. Pestaña de **Medusa Admin** (`http://localhost:9000/app`, sesión iniciada con `admin@medusa-test.com`).
  3. Terminal breve mostrando `postgresql-x64-17` activo en el puerto `5432`.
- **Qué decir (guion sugerido):**
  > "Buenas tardes profesora. Nuestro equipo, conformado por Julián, Juanes y quien les habla, César, ejecutó un proyecto integral de Aseguramiento de Calidad sobre **Medusa**, una plataforma de comercio electrónico *headless* moderna de arquitectura modular en TypeScript y Node.js."
  >
  > "No probamos una maqueta estática, sino un entorno real completo desplegado localmente con tres capas activas: primero, el **Storefront** en Next.js sobre `http://localhost:8000` orientado al comprador final; segundo, la consola **Medusa Admin** en `http://localhost:9000/app` para la operación comercial; y tercero, el servidor API REST en el puerto `9000` conectado a una base de datos real **PostgreSQL 17** (`medusa_app`) con productos semilla (`Medusa T-Shirt`, `Medusa Sweatshirt`, `Medusa Sweatpants` y `Medusa Shorts`) y región `Europe` en euros."
  >
  > "En vivo podemos ver cómo el catálogo público consume los endpoints `/store/*` con clave publicable, mientras el panel administrativo gestiona productos, órdenes, inventario por ubicación y promociones mediante `/admin/*`."
- **Acción en vivo:** Navegar rápidamente en `http://localhost:8000` hacia un producto y mostrar el panel de Productos/Órdenes en `http://localhost:9000/app`.

### Punto 2: Plan de pruebas (Min 4:00 – 8:30)

- **Qué mostrar en pantalla:** `https://juanz14-dev.github.io/medusa-qa/plan-de-pruebas.html` (y comparativa rápida con `plan_pruebas (1).pdf`).
- **Qué decir (guion sugerido):**
  > "Para gobernar todo el proceso seguimos exactamente la estructura de las **14 secciones** del formato oficial `plan_pruebas (1).pdf`, redactado bajo normas **APA 7.ª edición** con tablas numeradas, estilo objetivo y referencias formales."
  >
  > "En la portada registramos el control de versión `1.1` y estado `Aprobado`, seguido por el historial de cambios, el propósito y la tabla de alcance que delimita los flujos funcionales E2E e integración UI/API frente a pruebas de carga masiva (>500 usuarios) y pasarelas bancarias externas."
  >
  > "Definimos tres objetivos medibles: 100 % de casos críticos aprobados, 0 defectos críticos abiertos y trazabilidad total de 45 casos en GitHub Issues. Además, en la Sección 4 establecimos los roles y la **Matriz RACI**; en la Sección 5 seleccionamos pruebas funcionales, de regresión, integración, seguridad básica de acceso, usabilidad y UAT, usando técnicas de **Partición de Equivalencia (EP)**, **Análisis de Valores Límite (BVA)**, **Tablas de Decisión** y **Transición de Estados**."
  >
  > "Por último, documentamos los criterios de entrada, salida, suspensión y reanudación, el cronograma ejecutado entre el 18 y 19 de noviembre de 2026 y la matriz de riesgos."
- **Transición a Julián:**
  > "Con esta estrategia aprobada pasamos al diseño y ejecución de los casos de prueba, parte que presentará mi compañero Julián."

---

## Bloque 2 — Julián (Minutos 8:30 a 17:30)

### Punto 3: Diseño de casos de prueba — 45 casos: 18 manuales y 27 automatizados (Min 8:30 – 14:00)

- **Qué mostrar en pantalla:**
  1. `https://juanz14-dev.github.io/medusa-qa/matriz-trazabilidad.html` y `casos-de-prueba/matriz-casos.md`.
  2. Pestaña de **GitHub Issues** (`https://github.com/JuanZ14-Dev/medusa-qa/issues`).
  3. Una ficha manual en `casos-de-prueba/manuales/storefront/auth/CP-AUTH-01.md` y su captura real en `docs/evidencias/storefront/CP-AUTH-01.png`.
  4. Terminal en `C:\Users\USUARIO\teamwork_projects\medusa_qa` para ejecución en vivo.
- **Qué decir (guion sugerido):**
  > "Gracias César. La rúbrica exigía un mínimo de 40 casos de prueba con al menos 15 manuales; nosotros diseñamos y ejecutamos **45 casos de prueba** cubriendo 10 historias de usuario (`HU-01` a `HU-10`) en 9 módulos: **18 manuales** (9 en Storefront y 9 en Admin) enfocados en experiencia de usuario y validación visual, y **27 automatizados** en **Playwright + TypeScript** bajo patrón *Page Object Model*."
  >
  > "Cada caso sigue estrictamente la **plantilla de 16 campos** de la Sección 7.1 del Plan de Pruebas y fue creado y gestionado como un **GitHub Issue real** del `#1` al `#45`, etiquetado por superficie (`surface:storefront` / `surface:admin`), modalidad (`mode:manual` / `mode:automated`), módulo, prioridad y estado."
  >
  > "Como ejemplo del rigor de diseño: en `CP-CAR-03` y `CP-CAR-04` aplicamos **Valores Límite (BVA)** evaluando cantidades `0`, `1` y `2` en el carrito; en `CP-INV-02` validamos límites de inventario (`-1`, `0`, `99999`); en `CP-CHK-04` aplicamos **Partición de Equivalencia** para formatos de correo y teléfono; y en `CP-PRD-02` probamos la transición de estado `Draft -> Published`."
- **Acción en vivo (ejecución real en terminal):**
  ```powershell
  npx playwright test tests/storefront/cat/CP-CAT-03.spec.ts tests/admin/prd/CP-PRD-03.spec.ts
  ```
  *(Si el tiempo alcanza y desean correr toda la suite en clase, ejecutar `npm run test:e2e`, que toma ~1.7 minutos y muestra `28 passed`).*

### Punto 4: Reporte de bugs (Min 14:00 – 17:30)

- **Qué mostrar en pantalla:**
  1. `.github/ISSUE_TEMPLATE/reporte-defecto.yml` (o pestaña *Issues → New issue → Reporte de Defecto* en GitHub).
  2. `defectos/registro-defectos.md` y `docs/plan-de-pruebas.md` (Sección 8).
- **Qué decir (guion sugerido):**
  > "Para la gestión de defectos implementamos el flujo completo exigido en la Sección 8 del Plan de Pruebas: clasificación en cuatro niveles de severidad —**Crítica** (resolución inmediata el mismo día), **Alta** (24–48 horas), **Media** (3–5 días hábiles) y **Baja** (próxima versión)— junto con una plantilla YAML oficial en GitHub Issues que obliga a diligenciar los **17 campos exactos**, incluyendo pasos para reproducir, evidencia visual, entorno y fecha de resolución."
  >
  > "Durante la ejecución completa de los 18 casos manuales y las 28 pruebas automatizadas sobre los 27 archivos `.spec.ts` contra la versión estable de Medusa v2 no se presentaron fallos funcionales ni discrepancias UI/API, por lo que el registro oficial en `defectos/registro-defectos.md` y el filtro `type:defect` en GitHub cierran con **0 defectos reportados**."
  >
  > "En caso de aparecer un bug en una regresión futura, el flujo ya está automatizado para enlazar el issue `DEF-XXX` con su caso `CP-*` y bloquear el criterio de salida si es Crítico o Alto."
- **Transición a Juanes:**
  > "A continuación, Juanes presentará cómo consolidamos estos resultados en el dashboard de métricas y el análisis final de calidad."

---

## Bloque 3 — Juanes (Minutos 17:30 a 25:00)

### Punto 5: Métricas de prueba presentadas en dashboard (Min 17:30 – 21:00)

- **Qué mostrar en pantalla:**
  1. **Dashboard Visual en GitHub Pages:** `https://juanz14-dev.github.io/medusa-qa/dashboard.html`.
  2. Archivo `docs/assets/data/metrics.json` y brevemente `scripts/generate-metrics.ts`.
- **Qué decir (guion sugerido):**
  > "Gracias Julián. Para evitar métricas manuales propensas a error, construimos un flujo automatizado: el script `generate-metrics.ts` lee el reporte JSON real de Playwright, las 18 actas manuales y la consulta en vivo a GitHub Issues, generando el archivo `metrics.json` que alimenta nuestro **Dashboard Visual publicado en GitHub Pages**."
  >
  > "En pantalla vemos las tarjetas KPI con las **6 métricas exactas** del Plan de Pruebas, acompañadas de gráficas interactivas en Chart.js por módulo funcional y por superficie (22 casos en Storefront y 23 en Admin), además del diagrama Mermaid del flujo de ejecución."
  >
  > "Los valores obtenidos frente a las metas son: **Tasa de ejecución de casos**: `100 %` (meta `>= 95 %`); **Tasa de casos aprobados**: `100 %` (meta `>= 90 %`); **Densidad de defectos**: `0.00` (meta `< 0.1`); **Defectos críticos abiertos**: `0` (meta `= 0`); **Tasa de reapertura**: `0 %` (meta `< 5 %`); y **Cobertura de requisitos**: `100 %` sobre las 10 historias de usuario."

### Punto 6: Análisis de la calidad del software con base en las métricas (Min 21:00 – 25:00)

- **Qué mostrar en pantalla:**
  1. `https://juanz14-dev.github.io/medusa-qa/informe-final-calidad.html`.
  2. `https://juanz14-dev.github.io/medusa-qa/acta-auditoria-calidad.html`.
  3. Terminal ejecutando `npm run docs:validate` (0 errores APA 7.ª edición).
- **Qué decir (guion sugerido):**
  > "Al analizar estas seis métricas en conjunto en nuestro Informe Final de Calidad redactado bajo **normas APA 7.ª edición**, concluimos que el núcleo transaccional de Medusa presenta **alta madurez y estabilidad funcional** en el entorno evaluado. No solo superamos las metas de ejecución y aprobación (`100 %`), sino que las pruebas de integración demostraron que los cambios de precio, inventario y cupones realizados en Admin se propagan de forma consistente e inmediata al Storefront y persisten correctamente en PostgreSQL 17."
  >
  > "Sin embargo, un análisis riguroso de calidad también identifica límites y riesgos residuales: primero, las pruebas de carga masiva superior a 500 usuarios concurrentes quedaron fuera del alcance funcional de este ciclo; segundo, los pagos se validaron con el proveedor de prueba de Medusa y no con pasarelas bancarias productivas, por lo que recomendamos incorporar pruebas de rendimiento con k6 antes de pasar a producción."
  >
  > "Finalmente, ejecutamos una auditoría independiente (`acta-auditoria-calidad.md`) y el validador automático `npm run docs:validate`, verificando los 8 documentos en APA 7.ª edición sin errores y emitiendo el dictamen **APROBADO** para el cierre del ciclo. Con esto quedamos atentos a sus preguntas, profesora."

---

## Bloque de Cierre — Respuestas Rápidas para Preguntas (Min 25:00 – 30:00)

**Tabla 2**

*Reparto de preguntas frecuentes de sustentación por integrante*

| Pregunta probable de la docente | Responde | Respuesta concreta |
| --- | --- | --- |
| ¿Por qué eligieron Medusa y no otra app? | César | Porque es un sistema real de comercio electrónico *headless* con dos interfaces independientes (`:8000` y `:9000/app`), API REST y PostgreSQL, lo que permite probar integración real extremo a extremo. |
| ¿Cómo garantizan que las 45 pruebas son reales y no simuladas? | Julián | Mostrando los `.spec.ts` en Playwright, las 22 capturas reales en `docs/evidencias/` y ejecutando `npm run test:e2e` en vivo contra `localhost:8000` y `localhost:9000/app`. |
| ¿Por qué hay 0 defectos? ¿No buscaron errores negativos? | Julián | Sí probamos rutas negativas y límites (contraseña inválida, cantidad `0`, stock `-1` y `0`, cupón inválido, campos vacíos); Medusa respondió con validaciones HTTP 400/401 controladas, cumpliendo el resultado esperado. |
| ¿Qué pasaría si el dashboard mostrara defectos en otra corrida? | Juanes | `generate-metrics.ts` consulta `gh issue list --label type:defect` en tiempo real y recalcula densidad, críticos abiertos y tasa de reapertura automáticamente en `metrics.json`. |
| ¿Cómo verificaron las normas APA 7.ª edición? | Juanes | Mediante estructura jerárquica de títulos, tablas numeradas con título en cursiva y nota, estilo impersonal, cero emojis y el script `scripts/validate-apa7.ts` junto a `referencias-apa7.md`. |
