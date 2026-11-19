# CP-AUTH-02: Inicio y cierre de sesión de administrador en Admin

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-AUTH-02` |
| **Nombre** | Inicio y cierre de sesión de administrador en Admin |
| **Historia de usuario** | `HU-02 — Autenticación y control de acceso en Admin` |
| **Precondiciones** | Panel de Medusa Admin accesible en `http://localhost:9000/app` y usuario administrador válido registrado. |
| **Datos de entrada** | Correo: `admin@medusa-test.com`, Contraseña: `supersecret`. |
| **Pasos de ejecución** | 1. Navegar a `http://localhost:9000/app`. 2. Ingresar correo y contraseña de administrador. 3. Hacer clic en continuar / iniciar sesión. 4. Verificar acceso al tablero principal. 5. Abrir menú de usuario y seleccionar cerrar sesión. |
| **Resultado esperado** | El administrador ingresa al panel principal sin errores y, al cerrar sesión, es redirigido a la pantalla de login perdiendo acceso a rutas internas. |
| **Resultado obtenido** | El administrador `admin@medusa-test.com` inició sesión correctamente y accedió al tablero principal (`/app/orders`). Al seleccionar cerrar sesión en el menú de usuario, la sesión finalizó y fue redirigido a `/app/login`. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[x] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[x] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | `SA-05 (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencias en `docs/evidencias/admin/CP-AUTH-02-login-dashboard.png` y `docs/evidencias/admin/CP-AUTH-02-logout.png`. |
