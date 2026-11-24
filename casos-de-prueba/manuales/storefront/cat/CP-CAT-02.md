# CP-CAT-02: Selección de variantes (talla y color) y actualización de precio

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CAT-02` |
| **Nombre** | Selección de variantes (talla y color) y actualización de precio |
| **Historia de usuario** | `HU-03 — Exploración y búsqueda en catálogo` |
| **Precondiciones** | Producto publicado con múltiples variantes (p. ej. talla y color) disponible en el Storefront. |
| **Datos de entrada** | Combinación de opciones: Talla `M` / Color `Black` y luego Talla `L` / Color `White`. |
| **Pasos de ejecución** | 1. Ingresar al detalle de un producto con variantes. 2. Seleccionar la primera combinación de talla y color. 3. Cambiar a la segunda combinación. 4. Observar el precio y la disponibilidad del botón de compra. |
| **Resultado esperado** | El selector refleja la variante activa, actualiza el precio correspondiente y habilita el botón de añadir al carrito si hay stock. |
| **Resultado obtenido** | Al seleccionar `M / Black` y luego `L / White` en `Medusa T-Shirt`, el selector actualizó la variante activa, mostró disponibilidad `In stock`, precio `€10.00` y mantuvo habilitado el botón `Add to cart`. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [x] Tabla de decisión [ ] Otro` |
| **Responsable** | `César Julio (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CAT-02.png`. |
