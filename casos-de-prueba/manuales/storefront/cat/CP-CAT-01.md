# CP-CAT-01: Navegación y visualización de detalle de producto en Storefront

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CAT-01` |
| **Nombre** | Navegación y visualización de detalle de producto en Storefront |
| **Historia de usuario** | `HU-03 — Exploración y búsqueda en catálogo` |
| **Precondiciones** | Storefront operativo en `http://localhost:8000` con al menos un producto publicado en la región activa. |
| **Datos de entrada** | Producto publicado del catálogo inicial de Medusa. |
| **Pasos de ejecución** | 1. Abrir `http://localhost:8000/store`. 2. Seleccionar una tarjeta de producto del listado. 3. Inspeccionar título, descripción, imágenes, precio y botón de agregar al carrito. |
| **Resultado esperado** | La página de detalle carga sin errores visuales ni de consola, mostrando título, descripción, precio con moneda de la región e imágenes válidas. |
| **Resultado obtenido** | La vista `/dk/products/t-shirt` cargó sin errores de consola (`0` errores), mostrando título `Medusa T-Shirt`, descripción (120 caracteres), precio `€10.00`, galería de imágenes visible y botón `Add to cart` habilitado. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `César Julio (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CAT-01.png`. |
