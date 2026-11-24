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
| **Resultado obtenido** | El sistema registró exitosamente el cliente (`Laura Gomez`), inició sesión de forma automática y redirigió al panel `/dk/account` mostrando el saludo con el nombre `Laura`. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `César Julio (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-AUTH-01.png`. |
