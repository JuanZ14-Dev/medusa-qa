# CP-ORD-03: Cancelación controlada de orden pendiente en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-ORD-03` |
| **Nombre** | Cancelación controlada de orden pendiente en Admin |
| **Historia de usuario** | `HU-08 — Gestión de órdenes en Admin` |
| **Precondiciones** | Orden en estado pendiente sin fulfillment ejecutado abierta en Admin. |
| **Datos de entrada** | Acción de cancelación desde el menú de opciones de la orden. |
| **Pasos de ejecución** | 1. Abrir una orden de prueba sin fulfillment. 2. Seleccionar Cancelar orden. 3. Confirmar en el diálogo modal. 4. Revisar el nuevo estado de la orden. |
| **Resultado esperado** | La orden cambia a estado `Canceled` y quedan deshabilitadas las acciones de despacho posteriores. |
| **Resultado obtenido** | Se canceló la orden `#1` (`order_01M7TB0Q3QQ02RK7GBPFABDVFX`) sin fulfillment desde el menú de opciones y diálogo de confirmación. La orden y su pago pasaron a estado `Canceled`, con registro `Order canceled` y `Payment canceled` en la actividad. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [x] Tabla de decisión [ ] Otro` |
| **Responsable** | `Julián Cardona (QA — Ejecución Admin)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia en `docs/evidencias/admin/CP-ORD-03-orden-cancelada.png`. |
