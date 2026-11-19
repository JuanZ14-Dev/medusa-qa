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
| **Resultado obtenido** | El producto `Camiseta QA Manual 01` cambió de estado `Draft` a `Published` en Admin y se visualizó correctamente en el catálogo público del Storefront (`http://localhost:8000/dk/store`). |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencias en `docs/evidencias/admin/CP-PRD-02-admin-published.png` y `docs/evidencias/admin/CP-PRD-02-storefront-visible.png`. |
