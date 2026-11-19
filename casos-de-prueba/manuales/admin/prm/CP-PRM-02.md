# CP-PRM-02: Activación y desactivación de código de descuento en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-PRM-02` |
| **Nombre** | Activación y desactivación de código de descuento en Admin |
| **Historia de usuario** | `HU-10 — Promociones y códigos de descuento` |
| **Precondiciones** | Promoción `QA10OFF` existente en estado activo en Admin. |
| **Datos de entrada** | Cambio de estado `Active -> Inactive` y posteriormente `Inactive -> Active`. |
| **Pasos de ejecución** | 1. Abrir la promoción `QA10OFF` en Admin. 2. Cambiar su estado a inactivo (`Inactive`) y guardar. 3. Verificar que aparece inactiva. 4. Reactivarla a `Active`. |
| **Resultado esperado** | El estado cambia correctamente en cada transición sin errores y persiste al recargar. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [ ] Media [x] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [x] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Verifica tabla de decisión de estado de vigencia promocional. |
