# Informe Final de Calidad — Sistema de Comercio Electrónico Medusa

## 1. Resumen Ejecutivo

El presente informe expone los resultados obtenidos tras ejecutar el ciclo integral de Aseguramiento de Calidad (QA) sobre el sistema de comercio electrónico **Medusa**, evaluando tanto la superficie pública de compra (**Storefront**, `http://localhost:8000`) como la consola de administración (**Admin**, `http://localhost:9000/app`) y su capa de servicios REST (`http://localhost:9000`). Durante la ejecución efectuada el 19 de noviembre de 2026 se completaron los **45 casos de prueba** planificados (18 manuales y 27 automatizados en Playwright + TypeScript), alcanzando una tasa de ejecución del **100 %**, una tasa de aprobación del **100 %** y **0 defectos críticos abiertos**, cumpliendo la totalidad de los criterios de salida definidos en el Plan de Pruebas.

## 2. Metodología y Estrategia Aplicada

El proceso de verificación se estructuró conforme al estándar **ISO/IEC/IEEE 29119-2:2021** y las directrices del **ISTQB CTFL v4.0**, combinando pruebas funcionales, de integración, regresión, usabilidad y control básico de acceso. Para el diseño de los datos de entrada y escenarios se aplicaron técnicas de partición de equivalencia (EP), análisis de valores límite (BVA), tablas de decisión y transición de estados. La gestión operativa de los 45 casos de prueba (`CP-AUTH-01` a `CP-PRM-04`) se centralizó en **GitHub Issues** (`JuanZ14-Dev/medusa-qa`), garantizando trazabilidad bidireccional entre cada historia de usuario (`HU-01` a `HU-10`), su ejecución y su evidencia documental.

## 3. Resultados de Ejecución por Superficie y Módulo

**Tabla 1**

*Consolidado de resultados por módulo funcional y modalidad de ejecución*

| Módulo | Casos Manuales | Casos Automatizados | Total | Aprobados | Fallidos | Tasa de Aprobación |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| AUTH (Autenticación) | 2 | 3 | 5 | 5 | 0 | 100 % |
| CAT (Catálogo) | 2 | 3 | 5 | 5 | 0 | 100 % |
| CAR (Carrito) | 2 | 3 | 5 | 5 | 0 | 100 % |
| CHK (Checkout) | 2 | 4 | 6 | 6 | 0 | 100 % |
| CUS (Cliente) | 2 | 2 | 4 | 4 | 0 | 100 % |
| PRD (Productos Admin) | 2 | 4 | 6 | 6 | 0 | 100 % |
| ORD (Órdenes Admin) | 3 | 3 | 6 | 6 | 0 | 100 % |
| INV (Inventario Admin) | 1 | 3 | 4 | 4 | 0 | 100 % |
| PRM (Promociones Admin) | 2 | 2 | 4 | 4 | 0 | 100 % |
| **Total** | **18** | **27** | **45** | **45** | **0** | **100 %** |

*Nota.* Fuente: Resultados consolidados de `reports/results.json` y actas de ejecución manual en `casos-de-prueba/manuales/`.

## 4. Evaluación de Métricas de Calidad

**Tabla 2**

*Evaluación comparativa de las seis métricas de calidad frente a las metas del plan*

| Métrica | Fórmula / Medición | Meta | Valor Actual | Evaluación |
| --- | --- | --- | --- | --- |
| Tasa de ejecución de casos | `(45 / 45) x 100` | >= 95 % | 100 % | Supera la meta |
| Tasa de casos aprobados | `(45 / 45) x 100` | >= 90 % | 100 % | Supera la meta |
| Densidad de defectos | `0 / 45` | < 0.1 | 0.00 | Cumple la meta |
| Defectos críticos abiertos | `Conteo de defectos críticos sin resolver` | = 0 | 0 | Cumple la meta |
| Tasa de reapertura de defectos | `(0 / 0) x 100` | < 5 % | 0 % | Cumple la meta |
| Cobertura de requisitos | `(10 / 10) x 100` | 100 % | 100 % | Cumple la meta |

*Nota.* Fuente: Salida de cálculo automatizado en `docs/assets/data/metrics.json`.

## 5. Análisis de Hallazgos y Riesgos Residuales

Durante las pruebas sobre las instancias locales activas de Medusa no se observaron fallos funcionales bloqueantes ni discrepancias entre la interfaz de usuario y las respuestas de la API REST (`/store/*`, `/auth/*` y `/admin/*`). Como observación técnica de entorno, se verificó que las operaciones de creación, publicación, ajuste de inventario y aplicación de promociones en Admin se propagan de forma inmediata hacia el Storefront, manteniendo la integridad referencial en PostgreSQL 17. Como riesgo residual menor, las pruebas de carga masiva superior a 500 usuarios concurrentes quedaron fuera del alcance de este ciclo, por lo que se recomienda incorporarlas en iteraciones previas a un despliegue productivo.

## 6. Conclusión y Dictamen de Cierre

Con base en el 100 % de ejecución alcanzada, el 100 % de casos aprobados, la ausencia de defectos críticos o altos abiertos y la verificación documental completa bajo normas APA 7.ª edición, se emite dictamen **Aprobado** para el cierre formal del ciclo de pruebas del sistema Medusa.

## Referencias

Véase el listado completo de fuentes citadas en [referencias-apa7.md](./referencias-apa7.md).
