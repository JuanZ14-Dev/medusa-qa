# CP-CUS-02: Registro y actualización de dirección de envío en perfil

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CUS-02` |
| **Nombre** | Registro y actualización de dirección de envío en perfil |
| **Historia de usuario** | `HU-06 — Perfil, direcciones e historial del cliente` |
| **Precondiciones** | Cliente autenticado en `http://localhost:8000/account/addresses`. |
| **Datos de entrada** | Dirección nueva: `Carrera 7 # 32-16`, Ciudad: `Bogota`, Código postal: `110311`, País válido de la región. |
| **Pasos de ejecución** | 1. Ir a la sección de direcciones de la cuenta. 2. Agregar una nueva dirección con los datos de entrada. 3. Guardar y recargar la página. 4. Editar la ciudad de la dirección guardada y confirmar. |
| **Resultado esperado** | La dirección se almacena, persiste tras recargar y refleja correctamente la edición realizada. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [ ] Media [x] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-04 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Caso de prioridad baja sobre gestión de libreta de direcciones. |
