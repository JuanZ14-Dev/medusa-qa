# Informe Final de Calidad — Sistema de Comercio Electrónico Medusa

## 1. Resumen Ejecutivo

El presente informe expone los resultados obtenidos tras ejecutar el ciclo integral de Aseguramiento de Calidad (QA) sobre el sistema de comercio electrónico **Medusa**, evaluando tanto la superficie pública de compra (**Storefront**, `http://localhost:8000`) como la consola de administración (**Admin**, `http://localhost:9000/app`) y su capa de servicios REST (`http://localhost:9000`). Durante el ciclo de ejecución y regresión culminado el 23 de noviembre de 2026 se completaron los **51 casos de prueba** planificados (18 manuales y 33 automatizados / 34 pruebas en Playwright + TypeScript), alcanzando una tasa de ejecución del **100 %**, una tasa de aprobación final del **100 %**, **5 defectos gestionados y cerrados por regresión (`DEF-001` a `DEF-005`)**, una densidad de defectos de **0.0980** (`< 0.1`) y **0 defectos críticos abiertos**, cumpliendo la totalidad de los criterios de salida definidos en el Plan de Pruebas.

## 2. Metodología y Estrategia Aplicada

El proceso de verificación se estructuró conforme al estándar **ISO/IEC/IEEE 29119-2:2021** y las directrices del **ISTQB CTFL v4.0**, combinando pruebas funcionales, de integración, regresión, usabilidad responsiva y control básico de acceso. Para el diseño de los datos de entrada y escenarios se aplicaron técnicas de partición de equivalencia (EP), análisis de valores límite (BVA), tablas de decisión y transición de estados. La trazabilidad consolidada de los 51 casos de prueba (`CP-AUTH-01` a `CP-PRM-04` más 6 nuevos casos de cobertura visual, validación y regresión) se documentó en el libro Excel oficial (`casos-de-prueba/casos-de-prueba-medusa.xlsx`) y en la matriz de trazabilidad (`docs/matriz-trazabilidad.md`), mientras que **GitHub Issues** (`JuanZ14-Dev/medusa-qa`, `#46`–`#50`) se dedicó exclusivamente a la gestión de defectos (`DEF-*`) mediante la plantilla oficial de 17 campos (`reporte-defecto.yml`).

## 3. Resultados de Ejecución por Superficie y Módulo

**Tabla 1**

*Consolidado de resultados por módulo funcional y modalidad de ejecución*

| Módulo | Casos Manuales | Casos Automatizados | Total | Aprobados | Fallidos | Tasa de Aprobación |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| AUTH (Autenticación) | 2 | 4 | 6 | 6 | 0 | 100 % |
| CAT (Catálogo) | 2 | 3 | 5 | 5 | 0 | 100 % |
| CAR (Carrito) | 2 | 4 | 6 | 6 | 0 | 100 % |
| CHK (Checkout) | 2 | 7 | 9 | 9 | 0 | 100 % |
| CUS (Cliente) | 2 | 2 | 4 | 4 | 0 | 100 % |
| PRD (Productos Admin) | 2 | 4 | 6 | 6 | 0 | 100 % |
| ORD (Órdenes Admin) | 3 | 3 | 6 | 6 | 0 | 100 % |
| INV (Inventario Admin) | 1 | 4 | 5 | 5 | 0 | 100 % |
| PRM (Promociones Admin) | 2 | 2 | 4 | 4 | 0 | 100 % |
| **Total** | **18** | **33** | **51** | **51** | **0** | **100 %** |

*Nota.* Fuente: Resultados consolidados de `reports/results.json` (34/34 pruebas en 33 archivos `.spec.ts`), actas de ejecución manual en `casos-de-prueba/manuales/` y libro Excel `casos-de-prueba/casos-de-prueba-medusa.xlsx`.

## 4. Evaluación de Métricas de Calidad

**Tabla 2**

*Evaluación comparativa de las seis métricas de calidad frente a las metas del plan*

| Métrica | Fórmula / Medición | Meta | Valor Actual | Evaluación |
| --- | --- | --- | --- | --- |
| Tasa de ejecución de casos | `(51 / 51) x 100` | >= 95 % | 100 % | Supera la meta |
| Tasa de casos aprobados | `(51 / 51) x 100` | >= 90 % | 100 % | Supera la meta |
| Densidad de defectos | `5 / 51` | < 0.1 | 0.0980 | Cumple la meta |
| Defectos críticos abiertos | `Conteo de defectos críticos sin resolver` | = 0 | 0 | Cumple la meta |
| Tasa de reapertura de defectos | `(0 / 5) x 100` | < 5 % | 0 % | Cumple la meta |
| Cobertura de requisitos | `(10 / 10) x 100` | 100 % | 100 % | Cumple la meta |

*Nota.* Fuente: Salida de cálculo automatizado en `docs/assets/data/metrics.json`.

## 5. Análisis de Hallazgos y Riesgos Residuales

Durante la inspección en vivo sobre Storefront (`http://localhost:8000/dk`) y Admin (`http://localhost:9000/app`) en resoluciones de escritorio (`1440x900`) y móvil (`375x812`), junto con el ejercicio controlado de validación de defectos de severidad crítica y alta en el entorno local de `medusa_app`, se identificaron, evidenciaron y cerraron cinco defectos trazados en GitHub Issues (`#46`–`#50`) y documentados en la Hoja 2 del libro Excel.

**Tabla 3**

*Resumen de defectos identificados, clasificación de origen y cierre por regresión*

| ID | Issue | Título resumido | Severidad | Origen (Transparencia QA) | Evidencia (`docs/evidencias/defectos/`) | Estado final |
| --- | :---: | --- | --- | --- | --- | --- |
| DEF-001 | [#46](https://github.com/JuanZ14-Dev/medusa-qa/issues/46) | Enlaces rotos (HTTP 404) de privacidad y términos en registro | Alta | Hallazgo real | `DEF-001-register-404.png` | Cerrado |
| DEF-002 | [#47](https://github.com/JuanZ14-Dev/medusa-qa/issues/47) | Opción duplicada (`value=1`) y colisión `key={1}` en carrito | Media | Hallazgo real | `DEF-002-cart-duplicate-qty.png` | Cerrado |
| DEF-003 | [#48](https://github.com/JuanZ14-Dev/medusa-qa/issues/48) | Compresión responsiva móvil (`375x812`) y falta de validación telefónica en checkout | Media | Hallazgo real | `DEF-003-mobile-checkout-375x812.png` | Cerrado |
| DEF-004 | [#49](https://github.com/JuanZ14-Dev/medusa-qa/issues/49) | Total de orden omite envío e impuestos mostrando `item_subtotal` | Crítica | Inyección controlada | `DEF-004-critical-total-mismatch.png` | Cerrado |
| DEF-005 | [#50](https://github.com/JuanZ14-Dev/medusa-qa/issues/50) | Botón `Add to cart` habilitado para variantes con stock cero | Alta | Inyección controlada | `DEF-005-out-of-stock-enabled.png` | Cerrado |

*Nota.* Los tres hallazgos reales (`DEF-001` a `DEF-003`) fueron corregidos localmente en los módulos del Storefront, y las dos inyecciones controladas (`DEF-004` y `DEF-005`) fueron restauradas con verificación de integridad SHA-256. Tras las correcciones locales, la ejecución completa de regresión en Playwright confirmó `34/34` pruebas aprobadas (`0` fallos, `0` defectos críticos o abiertos).

Como observación técnica de entorno, se verificó que las operaciones de creación, publicación, ajuste de inventario y aplicación de promociones en Admin se propagan de forma inmediata hacia el Storefront, manteniendo la integridad referencial en PostgreSQL 17. Como riesgo residual menor, las pruebas de carga masiva superior a 500 usuarios concurrentes y las pasarelas bancarias en producción quedaron fuera del alcance de este ciclo, por lo que se recomienda incorporarlas antes de un despliegue productivo.

## 6. Conclusión y Dictamen de Cierre

Con base en el 100 % de ejecución alcanzada sobre los 51 casos de prueba, el 100 % de aprobación tras regresión, una densidad de defectos de `0.0980` (`< 0.1`), la ausencia total de defectos críticos o altos abiertos (`0`) y la verificación documental completa bajo normas APA 7.ª edición, se emite dictamen **Aprobado** para el cierre formal del ciclo de pruebas del sistema Medusa.

## Referencias

Véase el listado completo de fuentes citadas en [referencias-apa7.md](./referencias-apa7.md).
