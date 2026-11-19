# CP-PRD-02: Cambio de estado de producto de borrador a publicado en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-PRD-02` |
| **Nombre** | Cambio de estado de producto de borrador a publicado en Admin |
| **Historia de usuario** | `HU-07 — Administración de productos en Admin` |
| **Precondiciones** | Producto creado en estado `Draft` (borrador) y canal de ventas asignado en Admin. |
| **Datos de entrada** | Producto `Camiseta QA Manual 01` en estado `Draft`. |
| **Pasos de ejecución** | 1. Abrir el producto en Admin (`:9000/app/products`). 2. Cambiar el estado de `Draft` a `Published`. 3. Guardar cambios. 4. Consultar el producto en el Storefront (`:8000`). |
| **Resultado esperado** | El estado del producto cambia a `Published` en Admin y se vuelve visible en el catálogo público del Storefront. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Prueba de transición de estado (`Draft -> Published`). |
