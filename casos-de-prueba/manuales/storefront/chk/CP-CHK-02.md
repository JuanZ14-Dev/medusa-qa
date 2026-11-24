# CP-CHK-02: Validación de campos obligatorios en dirección de envío

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CHK-02` |
| **Nombre** | Validación de campos obligatorios en dirección de envío |
| **Historia de usuario** | `HU-05 — Flujo completo de checkout` |
| **Precondiciones** | Carrito con al menos un producto y usuario posicionado en el paso 1 del checkout (`http://localhost:8000/checkout`). |
| **Datos de entrada** | Campos obligatorios vacíos (nombre, dirección, ciudad o código postal). |
| **Pasos de ejecución** | 1. Abrir la vista de checkout. 2. Dejar en blanco los campos obligatorios de dirección de envío. 3. Intentar avanzar al paso de método de envío. |
| **Resultado esperado** | El formulario bloquea el avance hacia el siguiente paso y resalta o indica los campos obligatorios faltantes. |
| **Resultado obtenido** | Al intentar avanzar con los campos obligatorios vacíos en `/dk/checkout?step=address`, el formulario bloqueó la navegación (permaneció en `?step=address`) y activó la validación HTML5 de campos requeridos (`checkValidity() === false`). |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `César Julio (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CHK-02.png`. |
