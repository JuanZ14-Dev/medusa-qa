# CP-AUTH-01: Registro exitoso de nuevo cliente en Storefront

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-AUTH-01` |
| **Nombre** | Registro exitoso de nuevo cliente en Storefront |
| **Historia de usuario** | `HU-01 — Registro e inicio de sesión de cliente` |
| **Precondiciones** | Storefront accesible en `http://localhost:8000` sin sesión de cliente activa. |
| **Datos de entrada** | Nombre: `Laura`, Apellido: `Gomez`, Correo: `laura.qa.01@medusa-test.com`, Contraseña: `PasswordQA2026!`. |
| **Pasos de ejecución** | 1. Navegar a `http://localhost:8000/account`. 2. Seleccionar la opción de registro de nueva cuenta. 3. Ingresar nombre, apellido, correo y contraseña válidos. 4. Enviar el formulario de registro. |
| **Resultado esperado** | El sistema crea el cliente, inicia sesión automáticamente y redirige al perfil de cuenta mostrando el nombre del cliente. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | `[x] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-04 (QA Analyst)` |
| **Fecha de ejecución** | `Pendiente` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Caso manual de flujo positivo en Storefront (`:8000`). |
