# CP-PRD-01: Creación manual de producto con variante y precio en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-PRD-01` |
| **Nombre** | Creación manual de producto con variante y precio en Admin |
| **Historia de usuario** | `HU-07 — Administración de productos en Admin` |
| **Precondiciones** | Administrador autenticado en `http://localhost:9000/app/products`. |
| **Datos de entrada** | Título: `Camiseta QA Manual 01`, Opción: `Talla = M`, Precio: `25.00` USD. |
| **Pasos de ejecución** | 1. Ir a Productos y pulsar crear producto. 2. Completar título, descripción y opción/variante. 3. Asignar precio en la moneda configurada. 4. Guardar el producto. |
| **Resultado esperado** | El producto queda creado con su variante y precio visibles en el detalle de producto en Admin. |
| **Resultado obtenido** | Se creó el producto `Camiseta QA Manual 01` (`prod_01M7TB434RA2V972PGX3Q8CNBC`) con variante por defecto y precio asignado de `25.00 EUR` en la moneda configurada de la región Europe, quedando guardado en estado `Draft` y visible en su vista de detalle en Admin. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `Julián Cardona (QA — Ejecución Admin)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencias en `docs/evidencias/admin/CP-PRD-01-form-variantes.png` y `docs/evidencias/admin/CP-PRD-01-producto-creado.png`. |
