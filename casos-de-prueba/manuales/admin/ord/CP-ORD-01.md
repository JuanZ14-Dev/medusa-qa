# CP-ORD-01: Visualización de detalle completo de orden creada en Storefront

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-ORD-01` |
| **Nombre** | Visualización de detalle completo de orden creada en Storefront |
| **Historia de usuario** | `HU-08 — Gestión de órdenes en Admin` |
| **Precondiciones** | Administrador autenticado en `http://localhost:9000/app/orders` y al menos una orden creada previamente desde Storefront. |
| **Datos de entrada** | Número o identificador de orden generada en Storefront. |
| **Pasos de ejecución** | 1. Navegar a la sección Órdenes en Admin. 2. Localizar la orden en el listado. 3. Abrir su vista de detalle. 4. Contrastar cliente, dirección de envío, ítems y total. |
| **Resultado esperado** | El detalle de la orden en Admin coincide exactamente con los ítems, cantidades, cliente, dirección y monto total confirmados en Storefront. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[ ] Funcional [ ] Regresión [x] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Prueba de integración cruzada Storefront -> Admin. |
