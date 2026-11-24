# CP-CAR-02: Eliminación de ítem del carrito y recálculo de subtotal

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CAR-02` |
| **Nombre** | Eliminación de ítem del carrito y recálculo de subtotal |
| **Historia de usuario** | `HU-04 — Gestión del carrito de compras` |
| **Precondiciones** | Carrito con al menos dos ítems diferentes agregados en Storefront. |
| **Datos de entrada** | Eliminación de uno de los ítems presentes en `/cart`. |
| **Pasos de ejecución** | 1. Navegar a `http://localhost:8000/cart`. 2. Registrar el subtotal inicial. 3. Hacer clic en eliminar sobre el primer ítem. 4. Verificar la lista de ítems y el nuevo subtotal. |
| **Resultado esperado** | El ítem desaparece del carrito y el subtotal se recalcula exactamente igual al precio del ítem restante. |
| **Resultado obtenido** | Con 2 ítems iniciales (`Cart (2)`, subtotal `€20.00`), al eliminar el primer ítem el carrito pasó a 1 ítem (`Cart (1)`) y el subtotal se recalculó exactamente a `€10.00`. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `César Julio (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CAR-02.png`. |
