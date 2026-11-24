# Matriz Consolidada de Casos de Prueba (51 Casos)

**Tabla 1**

*Distribución y registro maestro de los 51 casos de prueba (18 manuales y 33 automatizados)*

| ID | Nombre | Módulo | Superficie | Modalidad | Prioridad | Tipo | Técnica | Historia | Archivo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CP-AUTH-01 | Registro exitoso de nuevo cliente en Storefront | AUTH | Storefront | Manual | Alta | Funcional | EP | HU-01 | `casos-de-prueba/manuales/storefront/auth/CP-AUTH-01.md` |
| CP-AUTH-02 | Inicio y cierre de sesión de administrador en Admin | AUTH | Admin | Manual | Alta | Funcional | EP | HU-02 | `casos-de-prueba/manuales/admin/auth/CP-AUTH-02.md` |
| CP-AUTH-03 | Rechazo de login en Storefront con contraseña inválida | AUTH | Storefront | Automatizado | Alta | Funcional | EP | HU-01 | `tests/storefront/auth/CP-AUTH-03.spec.ts` |
| CP-AUTH-04 | Autenticación válida e inválida en Admin (UI y API) | AUTH | Admin | Automatizado | Alta | Integración | EP | HU-02 | `tests/admin/auth/CP-AUTH-04.spec.ts` |
| CP-AUTH-05 | Bloqueo de acceso sin sesión a rutas protegidas `/admin/products` | AUTH | Admin | Automatizado | Media | Otro | Tabla de decisión | HU-02 | `tests/admin/auth/CP-AUTH-05.spec.ts` |
| CP-AUTH-06 | Validación de enlaces legales de privacidad y términos en registro de Storefront | AUTH | Storefront | Automatizado | Media | Funcional | Otro | HU-01 | `tests/storefront/auth/CP-AUTH-06.spec.ts` |
| CP-CAT-01 | Navegación y visualización de detalle de producto en Storefront | CAT | Storefront | Manual | Alta | Funcional | Otro | HU-03 | `casos-de-prueba/manuales/storefront/cat/CP-CAT-01.md` |
| CP-CAT-02 | Selección de variantes (talla y color) y actualización de precio | CAT | Storefront | Manual | Media | Funcional | Tabla de decisión | HU-03 | `casos-de-prueba/manuales/storefront/cat/CP-CAT-02.md` |
| CP-CAT-03 | Listado de productos mediante Storefront UI y API `/store/products` | CAT | Storefront | Automatizado | Alta | Integración | EP | HU-03 | `tests/storefront/cat/CP-CAT-03.spec.ts` |
| CP-CAT-04 | Filtrado por colección o categoría en catálogo de Storefront | CAT | Storefront | Automatizado | Media | Funcional | EP | HU-03 | `tests/storefront/cat/CP-CAT-04.spec.ts` |
| CP-CAT-05 | Búsqueda de término inexistente con estado vacío controlado | CAT | Storefront | Automatizado | Media | Funcional | BVA | HU-03 | `tests/storefront/cat/CP-CAT-05.spec.ts` |
| CP-CAR-01 | Adición de producto al carrito y persistencia tras recarga | CAR | Storefront | Manual | Alta | Funcional | Otro | HU-04 | `casos-de-prueba/manuales/storefront/car/CP-CAR-01.md` |
| CP-CAR-02 | Eliminación de ítem del carrito y recálculo de subtotal | CAR | Storefront | Manual | Media | Funcional | Otro | HU-04 | `casos-de-prueba/manuales/storefront/car/CP-CAR-02.md` |
| CP-CAR-03 | Incremento y decremento de cantidad con valores límite (BVA: 1 a 2) | CAR | Storefront | Automatizado | Alta | Funcional | BVA | HU-04 | `tests/storefront/car/CP-CAR-03.spec.ts` |
| CP-CAR-04 | Rechazo o corrección de cantidad cero o negativa en carrito (BVA: 0) | CAR | Storefront | Automatizado | Alta | Funcional | BVA | HU-04 | `tests/storefront/car/CP-CAR-04.spec.ts` |
| CP-CAR-05 | Consolidación automática al agregar el mismo SKU dos veces | CAR | Storefront | Automatizado | Media | Regresión | Tabla de decisión | HU-04 | `tests/storefront/car/CP-CAR-05.spec.ts` |
| CP-CAR-06 | Integridad de opciones únicas en selector de cantidad del carrito | CAR | Storefront | Automatizado | Baja | Funcional | Otro | HU-04 | `tests/storefront/car/CP-CAR-06.spec.ts` |
| CP-CHK-01 | Flujo completo de checkout hasta confirmación de orden | CHK | Storefront | Manual | Alta | Funcional | Otro | HU-05 | `casos-de-prueba/manuales/storefront/chk/CP-CHK-01.md` |
| CP-CHK-02 | Validación de campos obligatorios en dirección de envío | CHK | Storefront | Manual | Alta | Funcional | EP | HU-05 | `casos-de-prueba/manuales/storefront/chk/CP-CHK-02.md` |
| CP-CHK-03 | Selección de método de envío y actualización de total en checkout | CHK | Storefront | Automatizado | Alta | Funcional | Tabla de decisión | HU-05 | `tests/storefront/chk/CP-CHK-03.spec.ts` |
| CP-CHK-04 | Validación de formato de correo y teléfono en checkout (EP) | CHK | Storefront | Automatizado | Alta | Funcional | EP | HU-05 | `tests/storefront/chk/CP-CHK-04.spec.ts` |
| CP-CHK-05 | Protección contra finalización de checkout con carrito vacío | CHK | Storefront | Automatizado | Media | Regresión | BVA | HU-05 | `tests/storefront/chk/CP-CHK-05.spec.ts` |
| CP-CHK-06 | Verificación de creación de orden vía `/store/orders` tras pago | CHK | Storefront | Automatizado | Media | Integración | Otro | HU-05 | `tests/storefront/chk/CP-CHK-06.spec.ts` |
| CP-CHK-07 | Validación responsiva de formulario y resumen de dirección en checkout móvil (375x812) | CHK | Storefront | Automatizado | Media | Funcional | Otro | HU-05 | `tests/storefront/chk/CP-CHK-07.spec.ts` |
| CP-CHK-08 | Validación de formato de teléfono en formulario de dirección de envío en checkout (EP) | CHK | Storefront | Automatizado | Media | Funcional | EP | HU-05 | `tests/storefront/chk/CP-CHK-08.spec.ts` |
| CP-CHK-09 | Integridad del cálculo de total de orden con envío en resumen de checkout | CHK | Storefront | Automatizado | Alta | Regresión | Tabla de decisión | HU-05 | `tests/storefront/chk/CP-CHK-09.spec.ts` |
| CP-CUS-01 | Consulta de historial de órdenes en perfil de cliente | CUS | Storefront | Manual | Media | Funcional | Otro | HU-06 | `casos-de-prueba/manuales/storefront/cus/CP-CUS-01.md` |
| CP-CUS-02 | Registro y actualización de dirección de envío en perfil | CUS | Storefront | Manual | Baja | Funcional | EP | HU-06 | `casos-de-prueba/manuales/storefront/cus/CP-CUS-02.md` |
| CP-CUS-03 | Actualización de datos personales de cuenta en Storefront | CUS | Storefront | Automatizado | Media | Funcional | EP | HU-06 | `tests/storefront/cus/CP-CUS-03.spec.ts` |
| CP-CUS-04 | Aislamiento de sesión de cliente tras cierre de sesión | CUS | Storefront | Automatizado | Baja | Otro | Otro | HU-06 | `tests/storefront/cus/CP-CUS-04.spec.ts` |
| CP-PRD-01 | Creación manual de producto con variante y precio en Admin | PRD | Admin | Manual | Alta | Funcional | EP | HU-07 | `casos-de-prueba/manuales/admin/prd/CP-PRD-01.md` |
| CP-PRD-02 | Cambio de estado de producto de borrador a publicado en Admin | PRD | Admin | Manual | Media | Funcional | Otro | HU-07 | `casos-de-prueba/manuales/admin/prd/CP-PRD-02.md` |
| CP-PRD-03 | Creación y consulta de producto en Admin UI y `/admin/products` | PRD | Admin | Automatizado | Alta | Integración | EP | HU-07 | `tests/admin/prd/CP-PRD-03.spec.ts` |
| CP-PRD-04 | Edición de título y precio de producto reflejada en Storefront | PRD | Admin | Automatizado | Alta | Integración | Otro | HU-07 | `tests/admin/prd/CP-PRD-04.spec.ts` |
| CP-PRD-05 | Validación de campos requeridos al crear producto vacío (EP) | PRD | Admin | Automatizado | Media | Funcional | EP | HU-07 | `tests/admin/prd/CP-PRD-05.spec.ts` |
| CP-PRD-06 | Eliminación lógica de producto de prueba en Admin | PRD | Admin | Automatizado | Media | Regresión | Otro | HU-07 | `tests/admin/prd/CP-PRD-06.spec.ts` |
| CP-ORD-01 | Visualización de detalle completo de orden creada en Storefront | ORD | Admin | Manual | Alta | Integración | Otro | HU-08 | `casos-de-prueba/manuales/admin/ord/CP-ORD-01.md` |
| CP-ORD-02 | Registro de fulfillment parcial o total de orden en Admin | ORD | Admin | Manual | Media | Funcional | Otro | HU-08 | `casos-de-prueba/manuales/admin/ord/CP-ORD-02.md` |
| CP-ORD-03 | Cancelación controlada de orden pendiente en Admin | ORD | Admin | Manual | Media | Funcional | Tabla de decisión | HU-08 | `casos-de-prueba/manuales/admin/ord/CP-ORD-03.md` |
| CP-ORD-04 | Filtrado y búsqueda de órdenes por estado en Admin | ORD | Admin | Automatizado | Alta | Funcional | EP | HU-08 | `tests/admin/ord/CP-ORD-04.spec.ts` |
| CP-ORD-05 | Consistencia de totales e impuestos de orden vía `/admin/orders` | ORD | Admin | Automatizado | Media | Integración | Tabla de decisión | HU-08 | `tests/admin/ord/CP-ORD-05.spec.ts` |
| CP-ORD-06 | Verificación de transición de estado de pago en detalle de orden | ORD | Admin | Automatizado | Baja | Regresión | Otro | HU-08 | `tests/admin/ord/CP-ORD-06.spec.ts` |
| CP-INV-01 | Ajuste manual de stock disponible por ubicación en Admin | INV | Admin | Manual | Alta | Funcional | BVA | HU-09 | `casos-de-prueba/manuales/admin/inv/CP-INV-01.md` |
| CP-INV-02 | Validación de límite superior e inferior en cantidad de stock (BVA) | INV | Admin | Automatizado | Alta | Funcional | BVA | HU-09 | `tests/admin/inv/CP-INV-02.spec.ts` |
| CP-INV-03 | Bloqueo o rechazo de compra en Storefront cuando stock es cero | INV | Admin | Automatizado | Media | Integración | BVA | HU-09 | `tests/admin/inv/CP-INV-03.spec.ts` |
| CP-INV-04 | Consulta de niveles de inventario mediante `/admin/inventory-items` | INV | Admin | Automatizado | Media | Integración | EP | HU-09 | `tests/admin/inv/CP-INV-04.spec.ts` |
| CP-INV-05 | Bloqueo visual en Storefront UI para variantes con stock cero (BVA) | INV | Storefront | Automatizado | Alta | Funcional | BVA | HU-09 | `tests/storefront/inv/CP-INV-05.spec.ts` |
| CP-PRM-01 | Creación manual de promoción porcentual en Admin | PRM | Admin | Manual | Media | Funcional | EP | HU-10 | `casos-de-prueba/manuales/admin/prm/CP-PRM-01.md` |
| CP-PRM-02 | Activación y desactivación de código de descuento en Admin | PRM | Admin | Manual | Baja | Funcional | Tabla de decisión | HU-10 | `casos-de-prueba/manuales/admin/prm/CP-PRM-02.md` |
| CP-PRM-03 | Aplicación de código promocional válido en carrito de Storefront | PRM | Admin | Automatizado | Media | Integración | EP | HU-10 | `tests/admin/prm/CP-PRM-03.spec.ts` |
| CP-PRM-04 | Rechazo de código promocional inexistente o expirado en Storefront | PRM | Admin | Automatizado | Media | Funcional | EP | HU-10 | `tests/admin/prm/CP-PRM-04.spec.ts` |
