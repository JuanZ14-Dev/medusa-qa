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
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [x] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Ejecutar sobre una orden dedicada de prueba para no alterar otras evidencias. |
