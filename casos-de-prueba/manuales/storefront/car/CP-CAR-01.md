# CP-CAR-01: Adición de producto al carrito y persistencia tras recarga

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CAR-01` |
| **Nombre** | Adición de producto al carrito y persistencia tras recarga |
| **Historia de usuario** | `HU-04 — Gestión del carrito de compras` |
| **Precondiciones** | Producto con variante en stock disponible en `http://localhost:8000` y carrito vacío inicialmente. |
| **Datos de entrada** | Producto seleccionado del catálogo, cantidad: `1`. |
| **Pasos de ejecución** | 1. Abrir detalle de producto y seleccionar una variante válida. 2. Hacer clic en agregar al carrito. 3. Abrir el carrito y verificar el ítem y subtotal. 4. Recargar la página (`F5`). |
| **Resultado esperado** | El ítem aparece en el carrito con cantidad `1`, precio unitario correcto y persiste tras recargar la página. |
| **Resultado obtenido** | El producto `Medusa T-Shirt` (`M / Black`) se agregó al carrito con cantidad `1` y subtotal `€10.00`. Tras recargar `/dk/cart`, el ítem, cantidad (`1`) y subtotal (`€10.00`) persistieron correctamente. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `SA-04 (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CAR-01.png`. |
