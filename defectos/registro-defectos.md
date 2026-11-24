# Registro de Defectos

En este documento se consolida el seguimiento de los defectos identificados durante la ejecución del ciclo de pruebas sobre **Medusa Storefront (`http://localhost:8000`)** y **Medusa Admin (`http://localhost:9000/app`)**, en correspondencia directa con los GitHub Issues etiquetados como `type:defect` y conforme a la plantilla oficial de 17 campos definida en [plantilla-defecto.md](plantilla-defecto.md).

**Tabla 1**

*Resumen de defectos registrados en el ciclo de ejecución (23/11/2026)*

| ID del defecto | Título | Caso relacionado | Módulo afectado | Severidad | Prioridad | Origen (Transparencia QA) | Estado | Issue GitHub | Fecha de reporte | Fecha de resolución |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEF-001 | Enlaces rotos (HTTP 404) de Política de Privacidad y Términos de Uso en registro de Storefront | `CP-AUTH-06` | `AUTH` (Storefront) | Alta | Alta | Hallazgo real | Cerrado | [#46](https://github.com/JuanZ14-Dev/medusa-qa/issues/46) | 23/11/2026 | 23/11/2026 |
| DEF-002 | Opción de cantidad duplicada (`value=1`) y colisión de `key={1}` en selector del carrito | `CP-CAR-06` | `CAR` (Storefront) | Media | Media | Hallazgo real | Cerrado | [#47](https://github.com/JuanZ14-Dev/medusa-qa/issues/47) | 23/11/2026 | 23/11/2026 |
| DEF-003 | Compresión responsiva en checkout móvil (`375x812`) y ausencia de validación de formato telefónico | `CP-CHK-07`, `CP-CHK-08` | `CHK` (Storefront) | Media | Media | Hallazgo real | Cerrado | [#48](https://github.com/JuanZ14-Dev/medusa-qa/issues/48) | 23/11/2026 | 23/11/2026 |
| DEF-004 | Total de orden en resumen de carrito y checkout omite envío e impuestos (muestra `item_subtotal`) | `CP-CHK-09` | `CHK` (Storefront) | Crítica | Alta | Inyección controlada | Cerrado | [#49](https://github.com/JuanZ14-Dev/medusa-qa/issues/49) | 23/11/2026 | 23/11/2026 |
| DEF-005 | Botón 'Add to cart' permanece habilitado en Storefront para variantes con stock cero | `CP-INV-05` | `INV` (Storefront) | Alta | Alta | Inyección controlada | Cerrado | [#50](https://github.com/JuanZ14-Dev/medusa-qa/issues/50) | 23/11/2026 | 23/11/2026 |

*Nota.* Fuente: Ejecución en vivo de los 51 casos de prueba (18 manuales y 33 automatizados / 34 pruebas en Playwright). Se documentan de forma transparente 3 hallazgos reales encontrados durante inspección en vivo (`DEF-001` a `DEF-003`) y 2 defectos de inyección controlada en el código local de `medusa_app` (`DEF-004` Crítica y `DEF-005` Alta). Todos fueron corregidos en local y cerrados por regresión el 23/11/2026 (`0` defectos críticos o abiertos). Densidad de defectos resultante: `5 / 51 = 0.0980` (meta `< 0.1`).
