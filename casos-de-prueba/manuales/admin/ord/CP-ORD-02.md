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
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Verificar registro en la línea de tiempo de actividad de la orden. |
