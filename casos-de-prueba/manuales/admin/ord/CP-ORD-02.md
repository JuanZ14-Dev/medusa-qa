# CP-ORD-02: Registro de fulfillment parcial o total de orden en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-ORD-02` |
| **Nombre** | Registro de fulfillment parcial o total de orden en Admin |
| **Historia de usuario** | `HU-08 — Gestión de órdenes en Admin` |
| **Precondiciones** | Orden en estado pendiente de despacho (`Not Fulfilled`) abierta en Admin. |
| **Datos de entrada** | Selección de todos los ítems de la orden y ubicación de stock válida. |
| **Pasos de ejecución** | 1. Abrir detalle de la orden en Admin. 2. Seleccionar la acción crear fulfillment. 3. Confirmar cantidades y ubicación de despacho. 4. Guardar el fulfillment. |
| **Resultado esperado** | Se registra el fulfillment correctamente y el estado de despacho de la orden pasa a `Fulfilled`. |
| **Resultado obtenido** | Se ejecutó la acción `Fulfill items` sobre la orden `#2` (`order_01M7TB0RAN7MME8GAR3ZS6RRJ2`) seleccionando la ubicación `European Warehouse` y cantidad `1`. El estado de despacho cambió a `Fulfilled` y quedó registrado `Items fulfilled` en la línea de actividad. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `Julián Cardona (QA — Ejecución Admin)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia en `docs/evidencias/admin/CP-ORD-02-fulfillment.png`. |
