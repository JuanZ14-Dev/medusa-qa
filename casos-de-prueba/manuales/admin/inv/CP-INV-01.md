# CP-INV-01: Ajuste manual de stock disponible por ubicación en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-INV-01` |
| **Nombre** | Ajuste manual de stock disponible por ubicación en Admin |
| **Historia de usuario** | `HU-09 — Control de inventario y ubicaciones` |
| **Precondiciones** | Administrador autenticado en `http://localhost:9000/app/inventory` con al menos un ítem de inventario y ubicación configurada. |
| **Datos de entrada** | Cantidad de stock nueva: `50` unidades en la ubicación por defecto. |
| **Pasos de ejecución** | 1. Navegar a Inventario en Admin. 2. Seleccionar un ítem de inventario de prueba. 3. Editar el nivel de stock en la ubicación asignada a `50`. 4. Guardar y recargar la vista. |
| **Resultado esperado** | El nivel de stock se actualiza a `50` unidades disponibles y persiste tras recargar la página. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [x] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Validar que el stock reservado no se pierda al ajustar el disponible. |
