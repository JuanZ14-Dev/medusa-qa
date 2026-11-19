# CP-PRM-01: Creación manual de promoción porcentual en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-PRM-01` |
| **Nombre** | Creación manual de promoción porcentual en Admin |
| **Historia de usuario** | `HU-10 — Promociones y códigos de descuento` |
| **Precondiciones** | Administrador autenticado en `http://localhost:9000/app/promotions`. |
| **Datos de entrada** | Código: `QA10OFF`, Tipo: Porcentaje `10 %`, Estado inicial: Activo (`Active`). |
| **Pasos de ejecución** | 1. Ir a Promociones en Admin y pulsar crear promoción. 2. Configurar código `QA10OFF` con descuento del `10 %` sobre ítems del carrito. 3. Guardar y activar la promoción. |
| **Resultado esperado** | La promoción `QA10OFF` aparece en el listado con estado activo y valor `10 %`. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Base para la validación de aplicación de cupón en Storefront. |
