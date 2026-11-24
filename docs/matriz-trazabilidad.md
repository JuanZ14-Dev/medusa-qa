# Matriz de Trazabilidad de Requisitos

En este documento se presenta la trazabilidad bidireccional entre las historias de usuario del sistema de comercio electrónico Medusa, los 51 casos de prueba diseñados (18 manuales y 33 automatizados / 34 pruebas en Playwright), su modalidad de ejecución, su artefacto maestro (libro Excel oficial, ficha manual o script `.spec.ts`) y los defectos asociados gestionados exclusivamente en GitHub Issues (`DEF-001` a `DEF-005`).

**Tabla 1**

*Matriz de trazabilidad de requisitos a casos de prueba, artefactos y defectos en GitHub Issues*

| Historia de usuario | Descripción funcional | ID del caso | Superficie | Modalidad | Prioridad | Artefacto / Evidencia | Estado | Defecto asociado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HU-01 — Registro e inicio de sesión de cliente | Autenticación y validación de sesión en Storefront | CP-AUTH-01 | Storefront | Manual | Alta | `casos-de-prueba/manuales/storefront/auth/CP-AUTH-01.md` | Pasó | N/A |
| HU-01 — Registro e inicio de sesión de cliente | Autenticación y validación de sesión en Storefront | CP-AUTH-03 | Storefront | Automatizado | Alta | `tests/storefront/auth/CP-AUTH-03.spec.ts` | Pasó | N/A |
| HU-01 — Registro e inicio de sesión de cliente | Autenticación y validación de sesión en Storefront | CP-AUTH-06 | Storefront | Automatizado | Media | `tests/storefront/auth/CP-AUTH-06.spec.ts` | Pasó | [DEF-001 (#46)](https://github.com/JuanZ14-Dev/medusa-qa/issues/46) |
| HU-02 — Autenticación y control de acceso en Admin | Acceso seguro al panel administrativo de Medusa | CP-AUTH-02 | Admin | Manual | Alta | `casos-de-prueba/manuales/admin/auth/CP-AUTH-02.md` | Pasó | N/A |
| HU-02 — Autenticación y control de acceso en Admin | Acceso seguro al panel administrativo de Medusa | CP-AUTH-04 | Admin | Automatizado | Alta | `tests/admin/auth/CP-AUTH-04.spec.ts` | Pasó | N/A |
| HU-02 — Autenticación y control de acceso en Admin | Acceso seguro al panel administrativo de Medusa | CP-AUTH-05 | Admin | Automatizado | Media | `tests/admin/auth/CP-AUTH-05.spec.ts` | Pasó | N/A |
| HU-03 — Exploración y búsqueda en catálogo | Listado, filtrado y detalle de productos en Storefront | CP-CAT-01 | Storefront | Manual | Alta | `casos-de-prueba/manuales/storefront/cat/CP-CAT-01.md` | Pasó | N/A |
| HU-03 — Exploración y búsqueda en catálogo | Listado, filtrado y detalle de productos en Storefront | CP-CAT-02 | Storefront | Manual | Media | `casos-de-prueba/manuales/storefront/cat/CP-CAT-02.md` | Pasó | N/A |
| HU-03 — Exploración y búsqueda en catálogo | Listado, filtrado y detalle de productos en Storefront | CP-CAT-03 | Storefront | Automatizado | Alta | `tests/storefront/cat/CP-CAT-03.spec.ts` | Pasó | N/A |
| HU-03 — Exploración y búsqueda en catálogo | Listado, filtrado y detalle de productos en Storefront | CP-CAT-04 | Storefront | Automatizado | Media | `tests/storefront/cat/CP-CAT-04.spec.ts` | Pasó | N/A |
| HU-03 — Exploración y búsqueda en catálogo | Listado, filtrado y detalle de productos en Storefront | CP-CAT-05 | Storefront | Automatizado | Media | `tests/storefront/cat/CP-CAT-05.spec.ts` | Pasó | N/A |
| HU-04 — Gestión del carrito de compras | Adición, actualización de cantidades y eliminación de ítems | CP-CAR-01 | Storefront | Manual | Alta | `casos-de-prueba/manuales/storefront/car/CP-CAR-01.md` | Pasó | N/A |
| HU-04 — Gestión del carrito de compras | Adición, actualización de cantidades y eliminación de ítems | CP-CAR-02 | Storefront | Manual | Media | `casos-de-prueba/manuales/storefront/car/CP-CAR-02.md` | Pasó | N/A |
| HU-04 — Gestión del carrito de compras | Adición, actualización de cantidades y eliminación de ítems | CP-CAR-03 | Storefront | Automatizado | Alta | `tests/storefront/car/CP-CAR-03.spec.ts` | Pasó | N/A |
| HU-04 — Gestión del carrito de compras | Adición, actualización de cantidades y eliminación de ítems | CP-CAR-04 | Storefront | Automatizado | Alta | `tests/storefront/car/CP-CAR-04.spec.ts` | Pasó | N/A |
| HU-04 — Gestión del carrito de compras | Adición, actualización de cantidades y eliminación de ítems | CP-CAR-05 | Storefront | Automatizado | Media | `tests/storefront/car/CP-CAR-05.spec.ts` | Pasó | N/A |
| HU-04 — Gestión del carrito de compras | Adición, actualización de cantidades y eliminación de ítems | CP-CAR-06 | Storefront | Automatizado | Baja | `tests/storefront/car/CP-CAR-06.spec.ts` | Pasó | [DEF-002 (#47)](https://github.com/JuanZ14-Dev/medusa-qa/issues/47) |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-01 | Storefront | Manual | Alta | `casos-de-prueba/manuales/storefront/chk/CP-CHK-01.md` | Pasó | N/A |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-02 | Storefront | Manual | Alta | `casos-de-prueba/manuales/storefront/chk/CP-CHK-02.md` | Pasó | N/A |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-03 | Storefront | Automatizado | Alta | `tests/storefront/chk/CP-CHK-03.spec.ts` | Pasó | N/A |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-04 | Storefront | Automatizado | Alta | `tests/storefront/chk/CP-CHK-04.spec.ts` | Pasó | N/A |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-05 | Storefront | Automatizado | Media | `tests/storefront/chk/CP-CHK-05.spec.ts` | Pasó | N/A |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-06 | Storefront | Automatizado | Media | `tests/storefront/chk/CP-CHK-06.spec.ts` | Pasó | N/A |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-07 | Storefront | Automatizado | Media | `tests/storefront/chk/CP-CHK-07.spec.ts` | Pasó | [DEF-003 (#48)](https://github.com/JuanZ14-Dev/medusa-qa/issues/48) |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-08 | Storefront | Automatizado | Media | `tests/storefront/chk/CP-CHK-08.spec.ts` | Pasó | [DEF-003 (#48)](https://github.com/JuanZ14-Dev/medusa-qa/issues/48) |
| HU-05 — Flujo completo de checkout | Dirección de envío, método de entrega y confirmación | CP-CHK-09 | Storefront | Automatizado | Alta | `tests/storefront/chk/CP-CHK-09.spec.ts` | Pasó | [DEF-004 (#49)](https://github.com/JuanZ14-Dev/medusa-qa/issues/49) |
| HU-06 — Perfil, direcciones e historial del cliente | Consulta de pedidos y edición de datos de cuenta | CP-CUS-01 | Storefront | Manual | Media | `casos-de-prueba/manuales/storefront/cus/CP-CUS-01.md` | Pasó | N/A |
| HU-06 — Perfil, direcciones e historial del cliente | Consulta de pedidos y edición de datos de cuenta | CP-CUS-02 | Storefront | Manual | Baja | `casos-de-prueba/manuales/storefront/cus/CP-CUS-02.md` | Pasó | N/A |
| HU-06 — Perfil, direcciones e historial del cliente | Consulta de pedidos y edición de datos de cuenta | CP-CUS-03 | Storefront | Automatizado | Media | `tests/storefront/cus/CP-CUS-03.spec.ts` | Pasó | N/A |
| HU-06 — Perfil, direcciones e historial del cliente | Consulta de pedidos y edición de datos de cuenta | CP-CUS-04 | Storefront | Automatizado | Baja | `tests/storefront/cus/CP-CUS-04.spec.ts` | Pasó | N/A |
| HU-07 — Administración de productos en Admin | Creación, edición, variantes y publicación de productos | CP-PRD-01 | Admin | Manual | Alta | `casos-de-prueba/manuales/admin/prd/CP-PRD-01.md` | Pasó | N/A |
| HU-07 — Administración de productos en Admin | Creación, edición, variantes y publicación de productos | CP-PRD-02 | Admin | Manual | Media | `casos-de-prueba/manuales/admin/prd/CP-PRD-02.md` | Pasó | N/A |
| HU-07 — Administración de productos en Admin | Creación, edición, variantes y publicación de productos | CP-PRD-03 | Admin | Automatizado | Alta | `tests/admin/prd/CP-PRD-03.spec.ts` | Pasó | N/A |
| HU-07 — Administración de productos en Admin | Creación, edición, variantes y publicación de productos | CP-PRD-04 | Admin | Automatizado | Alta | `tests/admin/prd/CP-PRD-04.spec.ts` | Pasó | N/A |
| HU-07 — Administración de productos en Admin | Creación, edición, variantes y publicación de productos | CP-PRD-05 | Admin | Automatizado | Media | `tests/admin/prd/CP-PRD-05.spec.ts` | Pasó | N/A |
| HU-07 — Administración de productos en Admin | Creación, edición, variantes y publicación de productos | CP-PRD-06 | Admin | Automatizado | Media | `tests/admin/prd/CP-PRD-06.spec.ts` | Pasó | N/A |
| HU-08 — Gestión de órdenes en Admin | Listado, detalle, fulfillment y cancelación de órdenes | CP-ORD-01 | Admin | Manual | Alta | `casos-de-prueba/manuales/admin/ord/CP-ORD-01.md` | Pasó | N/A |
| HU-08 — Gestión de órdenes en Admin | Listado, detalle, fulfillment y cancelación de órdenes | CP-ORD-02 | Admin | Manual | Media | `casos-de-prueba/manuales/admin/ord/CP-ORD-02.md` | Pasó | N/A |
| HU-08 — Gestión de órdenes en Admin | Listado, detalle, fulfillment y cancelación de órdenes | CP-ORD-03 | Admin | Manual | Media | `casos-de-prueba/manuales/admin/ord/CP-ORD-03.md` | Pasó | N/A |
| HU-08 — Gestión de órdenes en Admin | Listado, detalle, fulfillment y cancelación de órdenes | CP-ORD-04 | Admin | Automatizado | Alta | `tests/admin/ord/CP-ORD-04.spec.ts` | Pasó | N/A |
| HU-08 — Gestión de órdenes en Admin | Listado, detalle, fulfillment y cancelación de órdenes | CP-ORD-05 | Admin | Automatizado | Media | `tests/admin/ord/CP-ORD-05.spec.ts` | Pasó | N/A |
| HU-08 — Gestión de órdenes en Admin | Listado, detalle, fulfillment y cancelación de órdenes | CP-ORD-06 | Admin | Automatizado | Baja | `tests/admin/ord/CP-ORD-06.spec.ts` | Pasó | N/A |
| HU-09 — Control de inventario y ubicaciones | Ajuste de existencias y validación de stock disponible | CP-INV-01 | Admin | Manual | Alta | `casos-de-prueba/manuales/admin/inv/CP-INV-01.md` | Pasó | N/A |
| HU-09 — Control de inventario y ubicaciones | Ajuste de existencias y validación de stock disponible | CP-INV-02 | Admin | Automatizado | Alta | `tests/admin/inv/CP-INV-02.spec.ts` | Pasó | N/A |
| HU-09 — Control de inventario y ubicaciones | Ajuste de existencias y validación de stock disponible | CP-INV-03 | Admin | Automatizado | Media | `tests/admin/inv/CP-INV-03.spec.ts` | Pasó | N/A |
| HU-09 — Control de inventario y ubicaciones | Ajuste de existencias y validación de stock disponible | CP-INV-04 | Admin | Automatizado | Media | `tests/admin/inv/CP-INV-04.spec.ts` | Pasó | N/A |
| HU-09 — Control de inventario y ubicaciones | Ajuste de existencias y validación de stock disponible | CP-INV-05 | Storefront | Automatizado | Alta | `tests/storefront/inv/CP-INV-05.spec.ts` | Pasó | [DEF-005 (#50)](https://github.com/JuanZ14-Dev/medusa-qa/issues/50) |
| HU-10 — Promociones y códigos de descuento | Creación y aplicación de reglas de descuento | CP-PRM-01 | Admin | Manual | Media | `casos-de-prueba/manuales/admin/prm/CP-PRM-01.md` | Pasó | N/A |
| HU-10 — Promociones y códigos de descuento | Creación y aplicación de reglas de descuento | CP-PRM-02 | Admin | Manual | Baja | `casos-de-prueba/manuales/admin/prm/CP-PRM-02.md` | Pasó | N/A |
| HU-10 — Promociones y códigos de descuento | Creación y aplicación de reglas de descuento | CP-PRM-03 | Admin | Automatizado | Media | `tests/admin/prm/CP-PRM-03.spec.ts` | Pasó | N/A |
| HU-10 — Promociones y códigos de descuento | Creación y aplicación de reglas de descuento | CP-PRM-04 | Admin | Automatizado | Media | `tests/admin/prm/CP-PRM-04.spec.ts` | Pasó | N/A |

*Nota.* Fuente: Elaboración propia con base en las historias de usuario del proyecto QA Medusa y el libro oficial `casos-de-prueba/casos-de-prueba-medusa.xlsx`. Cobertura planificada de requisitos: 100 % (10 de 10 historias de usuario cubiertas por 51 casos de prueba; 5 defectos `DEF-*` gestionados exclusivamente en GitHub Issues y cerrados por regresión).
