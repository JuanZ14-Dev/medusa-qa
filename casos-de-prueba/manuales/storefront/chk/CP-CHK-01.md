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
| **Resultado obtenido** | Checkout completado exitosamente con dirección de envío en Dinamarca (`dk`), método de envío estándar y pago manual; el sistema redirigió a `/dk/order/order_01M7TB4P019VG26MSGQ7KH20PD/confirmed` mostrando el número de orden `#3` y el resumen de compra. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `César Julio (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CHK-01.png`. |
