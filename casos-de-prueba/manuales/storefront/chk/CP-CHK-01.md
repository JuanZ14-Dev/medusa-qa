# CP-CHK-01: Flujo completo de checkout hasta confirmación de orden

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CHK-01` |
| **Nombre** | Flujo completo de checkout hasta confirmación de orden |
| **Historia de usuario** | `HU-05 — Flujo completo de checkout` |
| **Precondiciones** | Carrito con al menos un producto en stock, región configurada con método de envío y proveedor de pago manual/prueba activo. |
| **Datos de entrada** | Dirección de envío completa válida, correo `comprador.qa@medusa-test.com`, método de envío estándar, método de pago manual. |
| **Pasos de ejecución** | 1. Ir al carrito y seleccionar continuar al checkout. 2. Completar dirección de envío y correo. 3. Seleccionar método de envío. 4. Seleccionar método de pago de prueba y confirmar orden. |
| **Resultado esperado** | Se muestra la página de confirmación con número de orden generado, resumen de productos, dirección y total final; el carrito queda vacío. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `SA-04 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Flujo crítico de negocio E2E en Storefront. |
