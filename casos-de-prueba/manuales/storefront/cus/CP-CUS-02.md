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
| **Resultado obtenido** | La dirección `Carrera 7 # 32-16` (`Bogota`, `110311`, `dk`) se guardó correctamente, persistió tras recargar `/dk/account/addresses` y reflejó la actualización de ciudad a `Medellin` al editarla. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [ ] Media [x] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-04 (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CUS-02.png`. |
