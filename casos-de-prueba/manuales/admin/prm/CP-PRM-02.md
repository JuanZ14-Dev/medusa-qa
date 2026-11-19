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
| **Resultado obtenido** | La promoción `QA10OFF` cambió de `Active` a `Inactive` y persistió tras recargar la página; posteriormente se reactivó a `Active` y persistió correctamente sin errores. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [ ] Media [x] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [x] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencias en `docs/evidencias/admin/CP-PRM-02-inactiva.png` y `docs/evidencias/admin/CP-PRM-02-promocion-estados.png`. |
