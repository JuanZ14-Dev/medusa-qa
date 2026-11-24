# CP-CUS-01: Consulta de historial de órdenes en perfil de cliente

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-CUS-01` |
| **Nombre** | Consulta de historial de órdenes en perfil de cliente |
| **Historia de usuario** | `HU-06 — Perfil, direcciones e historial del cliente` |
| **Precondiciones** | Cliente autenticado en Storefront con al menos una orden previamente completada. |
| **Datos de entrada** | Credenciales de cliente con orden registrada. |
| **Pasos de ejecución** | 1. Iniciar sesión en `http://localhost:8000/account`. 2. Acceder a la sección de órdenes (`/account/orders`). 3. Abrir el detalle de la orden más reciente. |
| **Resultado esperado** | Se lista la orden con su número, fecha, estado y total, y el detalle muestra los ítems adquiridos correctamente. |
| **Resultado obtenido** | En `/dk/account/orders` se listó la orden `#4` (`Thu Nov 19 2026`, `€20.00`, `1 item`, `Medusa T-Shirt x1`) con botón `See details` disponible para consultar el detalle. |
| **Estado** | `[ ] No ejecutado [x] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [x] Media [ ] Baja` |
| **Tipo de prueba** | `[x] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [x] Otro` |
| **Responsable** | `César Julio (QA Analyst)` |
| **Fecha de ejecución** | `19/11/2026` |
| **Defectos asociados** | `N/A` |
| **Observaciones** | Evidencia capturada en `docs/evidencias/storefront/CP-CUS-01.png`. |
