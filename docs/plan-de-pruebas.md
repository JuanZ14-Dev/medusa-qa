# PLAN DE PRUEBAS

*Sistema de Comercio Electrónico Medusa (Storefront y Admin)*

| Campo | Detalle |
| --- | --- |
| **Proyecto** | Aseguramiento de Calidad (QA) — Sistema de Comercio Electrónico Medusa |
| **Versión** | 1.2 |
| **Fecha** | 23/11/2026 |
| **Elaborado por** | Juanes Zapata, César Julio y Julián Cardona |
| **Revisado por** | Juanes Zapata (QA Lead) / Revisión por pares del equipo QA |
| **Aprobado por** | Product Owner / Docente Evaluadora |
| **Estado** | [ ] Borrador [ ] En revisión [x] Aprobado |

---

## 1. Historial de Cambios

**Tabla 1**

*Historial de cambios del plan de pruebas*

| Versión | Fecha | Descripción del Cambio | Autor | Aprobado por |
| --- | --- | --- | --- | --- |
| 1.0 | 18/11/2026 | Versión inicial del plan de pruebas alineada con la plantilla institucional y las normas APA 7.ª edición. | Equipo QA | Product Owner |
| 1.1 | 19/11/2026 | Registro inicial de ejecución (45/45 casos), cálculo de métricas y cierre preliminar. | Equipo QA | Juanes Zapata (QA Lead) |
| 1.2 | 23/11/2026 | Actualización integral: equipo real (Juanes Zapata, César Julio y Julián Cardona), libro Excel de 51 casos, dedicación exclusiva de GitHub Issues a defectos (`DEF-001` a `DEF-005`), inspección en vivo e inyección controlada con cierre por regresión. | Equipo QA | Juanes Zapata (QA Lead) |

---

## 2. Introducción

### 2.1 Propósito

Este documento describe la estrategia, los recursos, el cronograma, los criterios de control y las actividades de prueba para el sistema de comercio electrónico **Medusa** en sus dos superficies principales: Storefront (`http://localhost:8000`) y Admin (`http://localhost:9000/app`), con el fin de garantizar que la plataforma cumple con los requisitos funcionales y de calidad establecidos antes de su liberación.

### 2.2 Alcance

El alcance de las pruebas abarca los flujos críticos de negocio tanto para el comprador final en el Storefront como para el operador administrativo en el panel de Admin, además de la integración de datos entre ambas superficies mediante la API REST de Medusa.

**Tabla 2**

*Delimitación del alcance de pruebas del proyecto*

| En alcance | Fuera de alcance |
| --- | --- |
| Autenticación y gestión de sesión en Storefront (`:8000`) y Admin (`:9000/app`) | Pruebas de penetración avanzada o auditoría de infraestructura en nube |
| Exploración de catálogo, variantes, carrito de compras y flujo completo de checkout | Integraciones reales con pasarelas de pago bancarias externas en producción |
| Administración de productos, órdenes, inventario y promociones en Admin | Pruebas de carga masiva superior a 500 usuarios concurrentes |
| Verificación de coherencia de datos entre Admin y Storefront (E2E y API) | Personalización de temas visuales de terceros no incluidos en el proyecto base |

### 2.3 Referencias

- Especificación de requisitos funcionales e historias de usuario (`HU-01` a `HU-10`).
- Matriz de trazabilidad de requisitos (`docs/matriz-trazabilidad.md`).
- Documentación oficial de arquitectura y módulos de MedusaJS (`docs.medusajs.com`).
- Estándar internacional ISO/IEC/IEEE 29119-2:2021 y lineamientos del ISTQB CTFL v4.0.
- Manual de publicaciones de la American Psychological Association (7.ª ed., 2020).

---

## 3. Objetivos de Prueba

**Tabla 3**

*Objetivos de prueba y criterios de éxito*

| # | Objetivo | Criterio de Éxito |
| --- | --- | --- |
| 1 | Verificar que todas las funcionalidades cumplen los requisitos especificados. | 100 % de los casos de prueba críticos pasan. |
| 2 | Identificar y documentar defectos antes del despliegue a producción. | 0 defectos críticos abiertos al cierre. |
| 3 | Garantizar la trazabilidad integral y automatización reproducible de los flujos críticos en Excel y GitHub. | 51 casos de prueba (18 manuales y 33 automatizados / 34 pruebas Playwright) documentados en libro Excel y matriz de trazabilidad, y 100 % de los defectos (`DEF-*`) gestionados en GitHub Issues. |

---

## 4. Roles y Responsabilidades del Equipo de Pruebas

**Tabla 4**

*Roles y responsabilidades del equipo de pruebas*

| Rol | Nombre / Asignado a | Responsabilidades | Participación |
| --- | --- | --- | --- |
| **QA Lead / Líder de Pruebas** | Juanes Zapata | Planificar, coordinar y supervisar todas las actividades de prueba; definir la matriz RACI; calcular métricas automatizadas; administrar el dashboard visual en GitHub Pages y liderar la auditoría de cierre. | 100 % |
| **QA Analyst / Analista de Pruebas** | César Julio | Diseñar y documentar casos de prueba manuales y libro Excel oficial; ejecutar pruebas funcionales en Storefront (`:8000`); recolectar evidencias visuales y consolidar documentación bajo normas APA 7.ª edición. | 100 % |
| **QA Automatizador & Gestión de Defectos** | Julián Cardona | Desarrollar y mantener scripts de automatización en Playwright + TypeScript; ejecutar pruebas en Admin (`:9000/app`) y Storefront; reportar, evidenciar y dar seguimiento de cierre por regresión a defectos `DEF-*` en GitHub Issues. | 100 % |
| **Desarrollador / Dev** | Equipo de Desarrollo SUT | Corregir defectos reportados. Ejecutar pruebas unitarias. Apoyar en la configuración del ambiente de pruebas local (`:8000` y `:9000`). | 50 % |
| **Product Owner / PO** | Docente / Cliente del Proyecto | Validar criterios de aceptación. Participar en pruebas UAT. Aprobar el cierre del ciclo de pruebas. | 25 % |
| **Usuario Final / Cliente** | Evaluador Externo / Usuario Simulado | Participar en pruebas de aceptación (UAT). Validar que el sistema cumple sus expectativas y necesidades de negocio. | 25 % |
| **Auditor de Calidad QA** | Juanes Zapata (QA Lead — Auditoría interna) | Auditar el cumplimiento de normas APA 7.ª edición, la integridad de evidencias y la coherencia entre métricas y reportes reales. | 50 % |

### 4.1 Matriz RACI

La siguiente matriz define quién es Responsable (R), Aprobador (A), Consultado (C) e Informado (I) en cada actividad clave del proceso de pruebas.

**Tabla 5**

*Matriz RACI de actividades del proceso de pruebas*

| Actividad | QA Lead | QA Analyst | Dev | PO | Cliente |
| --- | --- | --- | --- | --- | --- |
| Planificación del plan de pruebas | R/A | C | C | C | I |
| Diseño de casos de prueba | A | R | C | C | I |
| Preparación del ambiente | A | C | R | I | I |
| Ejecución de pruebas funcionales | A | R | C | I | I |
| Reporte y seguimiento de defectos | A | R | R | I | I |
| Corrección de defectos | I | C | R | A | I |
| Pruebas de aceptación (UAT) | A | C | C | R | R |
| Aprobación del cierre de pruebas | C | I | I | A | R |

*Nota.* Leyenda: R = Responsable de ejecutar; A = Aprobador; C = Consultado; I = Informado.

---

## 5. Estrategia de Pruebas

### 5.1 Tipos de Prueba

**Tabla 6**

*Tipos de prueba considerados en la estrategia*

| Tipo de Prueba | Descripción | Responsable | Incluida |
| --- | --- | --- | --- |
| **Prueba funcional** | Verifica que cada función opera conforme a los requisitos. | QA Analyst / QA Automatizador | [x] Sí [ ] No |
| **Prueba de regresión** | Asegura que cambios nuevos no afectan funcionalidades existentes. | QA Automatizador | [x] Sí [ ] No |
| **Prueba de integración** | Valida la interacción entre módulos o sistemas (Admin, Storefront y API). | QA Automatizador | [x] Sí [ ] No |
| **Prueba de rendimiento** | Evalúa el comportamiento bajo carga y estrés. | QA / Rendimiento | [ ] Sí [x] No |
| **Prueba de seguridad** | Identifica vulnerabilidades y accesos no autorizados básicos (sesión y rutas protegidas). | QA / Seguridad | [x] Sí [ ] No |
| **Prueba de usabilidad** | Evalúa la experiencia del usuario en flujos de compra y administración. | UX / QA Analyst | [x] Sí [ ] No |
| **Prueba de aceptación (UAT)** | Validación final con el usuario o cliente sobre escenarios principales. | Cliente / PO | [x] Sí [ ] No |

### 5.2 Técnicas de Diseño de Casos de Prueba

- Partición de equivalencia (EP).
- Análisis de valores límite (BVA).
- Tabla de decisión.
- Prueba de transición de estados (ciclo de vida de carrito, checkout y órdenes).
- Prueba exploratoria basada en sesión (para validación manual complementaria).

### 5.3 Niveles de Prueba

- Pruebas unitarias: Desarrollador / Dev — Jest / Vitest (referencia base del núcleo Medusa).
- Pruebas de integración: QA Automatizador — Playwright `APIRequestContext` sobre `/store/*`, `/auth/*` y `/admin/*`.
- Pruebas de sistema: QA Analyst y QA Automatizador — Playwright + TypeScript + ejecución manual guiada.
- Pruebas de aceptación: Product Owner y Cliente — Validación UAT sobre Storefront (`:8000`) y Admin (`:9000/app`).

### 5.4 Criterios de Suspensión y Requisitos de Reanudación

Los criterios de suspensión definen las condiciones bajo las cuales se detiene total o parcialmente el procedimiento de prueba, mientras que los requisitos de reanudación determinan cuándo es viable continuar.

**Tabla 7**

*Criterios de suspensión y requisitos de reanudación*

| Criterios de Suspensión | Requisitos de Reanudación |
| --- | --- |
| Defecto crítico que impide la ejecución de casos de prueba. | El defecto crítico ha sido corregido y verificado por el equipo de desarrollo. |
| Ambiente de pruebas no disponible o inestable (`:8000` o `:9000/app` sin respuesta). | El ambiente ha sido restaurado y validado como estable mediante verificación HTTP. |
| Cambio significativo en los requisitos que afecta los casos de prueba diseñados. | Los casos de prueba han sido actualizados y aprobados conforme a los nuevos requisitos. |
| Más del 30 % de los casos de prueba fallan en un ciclo de ejecución. | Se ha identificado la causa raíz, corregido y validado por el equipo QA. |
| Falta de datos de prueba esenciales para continuar (productos, regiones o credenciales). | Los datos de prueba han sido preparados y cargados en el ambiente correspondiente. |
| Falla de autenticación o permisos en GitHub CLI que impida sincronizar issues. | Token de GitHub renovado y conectividad verificada con `gh auth status`. |

### 5.5 Completitud de las Pruebas

**Tabla 8**

*Criterios de completitud de las pruebas*

| Criterio de Completitud | Meta / Umbral | Valor Actual | Cumplido |
| --- | --- | --- | --- |
| 100 % de cobertura de pruebas (todos los casos de prueba ejecutados). | 100 % | 100 % | [x] |
| Tasa de casos aprobados igual o superior al umbral definido. | >= 90 % | 100 % | [x] |
| 0 defectos de severidad crítica o alta abiertos. | = 0 | 0 | [x] |
| 100 % de los requisitos cubiertos por al menos un caso de prueba. | 100 % | 100 % | [x] |
| Todos los defectos de regresión resueltos y verificados. | = 0 pendientes | 0 | [x] |
| Informe de pruebas generado y entregado al equipo de proyecto. | Entregado | Entregado | [x] |
| Aprobación formal del cierre de pruebas por el QA Lead y el PO. | Aprobado | Aprobado | [x] |
| Trazabilidad completa de los 51 casos en Excel/matriz y gestión exclusiva de los 5 defectos (`DEF-001` a `DEF-005`) en GitHub Issues. | 100 % | 100 % | [x] |

---

## 6. Criterios de Entrada y Salida

**Tabla 9**

*Criterios de entrada y salida del ciclo de pruebas*

| Criterios de Entrada (para iniciar pruebas) | Criterios de Salida (para finalizar pruebas) |
| --- | --- |
| Ambiente de pruebas configurado y disponible (`:8000` y `:9000/app`). | 100 % de los casos de prueba prioritarios ejecutados. |
| Build estable del sistema entregado. | Tasa de defectos críticos = 0. |
| Casos de prueba revisados y aprobados (51 casos en libro Excel y matriz). | Todos los defectos de severidad alta resueltos o documentados con plan. |
| Datos de prueba preparados (usuarios, productos e inventario). | Informe de pruebas generado y entregado en formato APA 7.ª edición. |
| Repositorio GitHub configurado con plantilla oficial de 17 campos (`reporte-defecto.yml`) y etiquetas para defectos `DEF-*`. | Dashboard visual publicado y auditoría de calidad aprobada. |

---

## 7. Casos de Prueba

### 7.1 Plantilla de Caso de Prueba

**Tabla 10**

*Plantilla oficial de 16 campos para casos de prueba*

| Campo | Descripción |
| --- | --- |
| **ID del caso** | `CP-[Módulo]-[Número]` Ej: `CP-AUTH-01` |
| **Nombre** | [Nombre descriptivo del caso de prueba] |
| **Historia de usuario** | `[HU-XX — Título de la historia]` |
| **Precondiciones** | [Estado del sistema antes de ejecutar la prueba] |
| **Datos de entrada** | [Valores o datos necesarios para ejecutar la prueba] |
| **Pasos de ejecución** | 1. [Paso 1] 2. [Paso 2] 3. [Paso 3] |
| **Resultado esperado** | [Comportamiento que se espera del sistema] |
| **Resultado obtenido** | [A completar durante la ejecución] |
| **Estado** | `[ ] No ejecutado [ ] Pasó [ ] Falló [ ] Bloqueado` |
| **Prioridad** | `[ ] Alta [ ] Media [ ] Baja` |
| **Tipo de prueba** | `[ ] Funcional [ ] Regresión [ ] Integración [ ] Otro` |
| **Técnica aplicada** | `[ ] EP [ ] BVA [ ] Tabla de decisión [ ] Otro` |
| **Responsable** | [Nombre del ejecutor] |
| **Fecha de ejecución** | `[DD/MM/AAAA]` |
| **Defectos asociados** | `[DEF-XXX] / N/A` |
| **Observaciones** | [Notas adicionales] |

### 7.2 Registro de Casos de Prueba

**Tabla 11**

*Registro consolidado de los 51 casos de prueba del proyecto*

| ID | Nombre del Caso | Módulo | Prioridad | Estado | Defecto |
| --- | --- | --- | --- | --- | --- |
| CP-AUTH-01 | Registro exitoso de nuevo cliente en Storefront | AUTH | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-AUTH-02 | Inicio y cierre de sesión de administrador en Admin | AUTH | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-AUTH-03 | Rechazo de login en Storefront con contraseña inválida | AUTH | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-AUTH-04 | Autenticación válida e inválida en Admin (UI y API) | AUTH | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-AUTH-05 | Bloqueo de acceso sin sesión a rutas protegidas `/admin/products` | AUTH | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-AUTH-06 | Validación de enlaces legales de privacidad y términos en registro de Storefront | AUTH | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | DEF-001 (#46) |
| CP-CAT-01 | Navegación y visualización de detalle de producto en Storefront | CAT | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAT-02 | Selección de variantes (talla y color) y actualización de precio | CAT | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAT-03 | Listado de productos mediante Storefront UI y API `/store/products` | CAT | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAT-04 | Filtrado por colección o categoría en catálogo de Storefront | CAT | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAT-05 | Búsqueda de término inexistente con estado vacío controlado | CAT | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAR-01 | Adición de producto al carrito y persistencia tras recarga | CAR | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAR-02 | Eliminación de ítem del carrito y recálculo de subtotal | CAR | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAR-03 | Incremento y decremento de cantidad con valores límite (BVA: 1 a 2) | CAR | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAR-04 | Rechazo o corrección de cantidad cero o negativa en carrito (BVA: 0) | CAR | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAR-05 | Consolidación automática al agregar el mismo SKU dos veces | CAR | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CAR-06 | Integridad de opciones únicas en selector de cantidad del carrito | CAR | [ ] Alta [ ] Media [x] Baja | [ ] No ej. [x] Pasó | DEF-002 (#47) |
| CP-CHK-01 | Flujo completo de checkout hasta confirmación de orden | CHK | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CHK-02 | Validación de campos obligatorios en dirección de envío | CHK | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CHK-03 | Selección de método de envío y actualización de total en checkout | CHK | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CHK-04 | Validación de formato de correo y teléfono en checkout (EP) | CHK | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CHK-05 | Protección contra finalización de checkout con carrito vacío | CHK | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CHK-06 | Verificación de creación de orden vía `/store/orders` tras pago | CHK | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CHK-07 | Validación responsiva de formulario y resumen de dirección en checkout móvil (375x812) | CHK | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | DEF-003 (#48) |
| CP-CHK-08 | Validación de formato de teléfono en formulario de dirección de envío en checkout (EP) | CHK | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | DEF-003 (#48) |
| CP-CHK-09 | Integridad del cálculo de total de orden con envío en resumen de checkout | CHK | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | DEF-004 (#49) |
| CP-CUS-01 | Consulta de historial de órdenes en perfil de cliente | CUS | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CUS-02 | Registro y actualización de dirección de envío en perfil | CUS | [ ] Alta [ ] Media [x] Baja | [ ] No ej. [x] Pasó | N/A |
| CP-CUS-03 | Actualización de datos personales de cuenta en Storefront | CUS | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-CUS-04 | Aislamiento de sesión de cliente tras cierre de sesión | CUS | [ ] Alta [ ] Media [x] Baja | [ ] No ej. [x] Pasó | N/A |
| CP-PRD-01 | Creación manual de producto con variante y precio en Admin | PRD | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-PRD-02 | Cambio de estado de producto de borrador a publicado en Admin | PRD | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-PRD-03 | Creación y consulta de producto en Admin UI y `/admin/products` | PRD | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-PRD-04 | Edición de título y precio de producto reflejada en Storefront | PRD | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-PRD-05 | Validación de campos requeridos al crear producto vacío (EP) | PRD | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-PRD-06 | Eliminación lógica de producto de prueba en Admin | PRD | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-ORD-01 | Visualización de detalle completo de orden creada en Storefront | ORD | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-ORD-02 | Registro de fulfillment parcial o total de orden en Admin | ORD | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-ORD-03 | Cancelación controlada de orden pendiente en Admin | ORD | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-ORD-04 | Filtrado y búsqueda de órdenes por estado en Admin | ORD | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-ORD-05 | Consistencia de totales e impuestos de orden vía `/admin/orders` | ORD | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-ORD-06 | Verificación de transición de estado de pago en detalle de orden | ORD | [ ] Alta [ ] Media [x] Baja | [ ] No ej. [x] Pasó | N/A |
| CP-INV-01 | Ajuste manual de stock disponible por ubicación en Admin | INV | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-INV-02 | Validación de límite superior e inferior en cantidad de stock (BVA) | INV | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | N/A |
| CP-INV-03 | Bloqueo o rechazo de compra en Storefront cuando stock es cero | INV | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-INV-04 | Consulta de niveles de inventario mediante `/admin/inventory-items` | INV | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-INV-05 | Bloqueo visual en Storefront UI para variantes con stock cero (BVA) | INV | [x] Alta [ ] Media | [ ] No ej. [x] Pasó | DEF-005 (#50) |
| CP-PRM-01 | Creación manual de promoción porcentual en Admin | PRM | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-PRM-02 | Activación y desactivación de código de descuento en Admin | PRM | [ ] Alta [ ] Media [x] Baja | [ ] No ej. [x] Pasó | N/A |
| CP-PRM-03 | Aplicación de código promocional válido en carrito de Storefront | PRM | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |
| CP-PRM-04 | Rechazo de código promocional inexistente o expirado en Storefront | PRM | [ ] Alta [x] Media | [ ] No ej. [x] Pasó | N/A |

---

## 8. Gestión de Defectos

### 8.1 Clasificación de Defectos

**Tabla 12**

*Clasificación de severidad de defectos y tiempos de resolución*

| Severidad | Descripción | Tiempo de Resolución |
| --- | --- | --- |
| **Crítica** | El sistema falla completamente o una funcionalidad principal no opera. | Inmediata — mismo día |
| **Alta** | Funcionalidad importante afectada sin alternativa de solución. | 24–48 horas |
| **Media** | Funcionalidad afectada pero con alternativa disponible. | 3–5 días hábiles |
| **Baja** | Problemas estéticos o mejoras menores. | Próxima versión |

### 8.2 Plantilla de Reporte de Defecto

**Tabla 13**

*Plantilla oficial de 17 campos para reporte de defectos*

| Campo | Detalle |
| --- | --- |
| **ID del defecto** | `DEF-[Número]` Ej: `DEF-001` |
| **Título** | [Descripción corta del defecto] |
| **Caso de prueba relacionado** | `[CP-XXX-XX]` |
| **Módulo afectado** | [Módulo o componente] |
| **Severidad** | `[ ] Crítica [ ] Alta [ ] Media [ ] Baja` |
| **Prioridad** | `[ ] Alta [ ] Media [ ] Baja` |
| **Estado** | `[ ] Nuevo [ ] Asignado [ ] En progreso [ ] Resuelto [ ] Cerrado` |
| **Descripción** | [Descripción detallada del problema encontrado] |
| **Pasos para reproducir** | 1. [Paso 1] 2. [Paso 2] 3. [Paso 3] |
| **Resultado esperado** | [Comportamiento correcto esperado] |
| **Resultado obtenido** | [Comportamiento incorrecto observado] |
| **Evidencia** | [Captura de pantalla / log / video] |
| **Entorno** | [Navegador / SO / Versión del sistema] |
| **Reportado por** | [Nombre del QA] |
| **Fecha de reporte** | `[DD/MM/AAAA]` |
| **Asignado a** | [Desarrollador responsable] |
| **Fecha de resolución** | `[DD/MM/AAAA]` |

---

## 9. Entregables de Prueba

**Tabla 14**

*Entregables planificados del ciclo de pruebas*

| Entregable | Descripción | Fase | Responsable | Fecha estimada |
| --- | --- | --- | --- | --- |
| **Plan de Pruebas** | Documento que describe el alcance, estrategia, recursos y cronograma de las pruebas. | Planificación | Juanes Zapata (QA Lead) | 18/11/2026 |
| **Casos de Prueba** | Conjunto de 51 casos diseñados (18 manuales y 33 automatizados / 34 pruebas Playwright) en libro Excel y matriz. | Diseño | César Julio (QA Analyst) | 23/11/2026 |
| **Matriz de Trazabilidad de Requisitos** | Documento que vincula cada historia de usuario con sus casos de prueba, libro Excel, evidencias y defectos `DEF-*`. | Diseño | Juanes Zapata / César Julio | 23/11/2026 |
| **Informes de Errores** | Registro detallado en GitHub Issues (`#46`–`#50`) y espejo Markdown (`defectos/registro-defectos.md`) de los defectos `DEF-001` a `DEF-005`. | Ejecución | Julián Cardona (QA Automatizador) | 23/11/2026 |
| **Estrategia de Pruebas** | Documento que describe el enfoque general, tipos y técnicas de prueba aplicadas al proyecto. | Planificación | Juanes Zapata (QA Lead) | 18/11/2026 |
| **Métricas de Pruebas** | Informe con los indicadores clave del proceso de pruebas y dashboard visual en GitHub Pages. | Cierre | Juanes Zapata (QA Lead) | 23/11/2026 |
| **Aprobación del Cliente** | Documento formal que certifica que el cliente o usuario final acepta los resultados UAT. | Cierre | PO / Docente Evaluadora | 23/11/2026 |

---

## 10. Recursos y Ambiente de Prueba

### 10.1 Equipo de Pruebas

**Tabla 15**

*Conformación del equipo de pruebas*

| Nombre | Rol | Responsabilidades | Dedicación |
| --- | --- | --- | --- |
| Juanes Zapata | QA Lead / Líder de Pruebas | Planificación, matriz RACI, cálculo de métricas, dashboard visual y auditoría de cierre | 100 % |
| César Julio | QA Analyst / Analista de Pruebas | Diseño de casos manuales y Excel, ejecución funcional en Storefront (`:8000`), evidencias y documentación APA 7.ª | 100 % |
| Julián Cardona | QA Automatizador & Gestión de Defectos | Automatización en Playwright + TypeScript, ejecución en Admin (`:9000/app`) y Storefront, reporte y seguimiento de defectos `DEF-*` en GitHub Issues | 100 % |

### 10.2 Herramientas

**Tabla 16**

*Herramientas seleccionadas para el proyecto QA*

| Categoría | Herramienta | Propósito |
| --- | --- | --- |
| **Gestión de casos y trazabilidad** | Plantilla Excel oficial (`.xlsx`, 2 hojas) + `matriz-casos.md` + `matriz-trazabilidad.md` | Documentación paso a paso de los 51 casos (Hoja 1) y ejecución/regresión de defectos (Hoja 2) |
| **Gestión de defectos** | GitHub Issues + Plantilla YAML (`reporte-defecto.yml` de 17 campos) + GitHub CLI (`gh`) | Registro, etiquetado y seguimiento exclusivo de defectos (`DEF-001` a `DEF-005`) |
| **Automatización** | Playwright (`1.65.1`) + Chromium + TypeScript (`5.7.3`) + `tsx` | Ejecución automática de 33 especificaciones E2E (34 pruebas Playwright) e integración HTTP |
| **Sistema Bajo Prueba y BD** | Medusa v2 (Turborepo, Next.js) + PostgreSQL `17.12` + Node.js `v24.15.0` | Ejecución local de Storefront (`:8000`), Admin (`:9000/app`) y persistencia relacional |
| **Infraestructura Local** | WSL 2 + Docker Desktop (`4.99.0` / Docker `29.9.3`) | Soporte de entorno local y contenedores en Windows |
| **Rendimiento** | No aplica (fuera de alcance) | N/A |
| **Control de versiones y CI/CD** | Git + GitHub (`JuanZ14-Dev/medusa-qa`) + GitHub Actions | Gestión de scripts, flujos `qa-e2e.yml` y `deploy-pages.yml` |
| **Comunicación, APA y Reportes** | GitHub Pages (Jekyll) + Chart.js + Mermaid + Prettier + `validate-apa7.ts` | Publicación del dashboard visual, validación APA 7.ª y análisis final |

### 10.3 Ambiente de Prueba

**Tabla 17**

*Configuración de los ambientes de prueba*

| Ambiente | URL / Servidor | Versión | Responsable |
| --- | --- | --- | --- |
| **Desarrollo** | `http://localhost:8000` (Storefront) / `http://localhost:9000` (Backend) | Medusa v2.x | Equipo Dev / QA |
| **QA / Staging** | `http://localhost:8000` y `http://localhost:9000/app` | Medusa v2.x | QA Automatizador |
| **Producción (UAT)** | Entorno de demostración UAT local controlado | Medusa v2.x | PO / Cliente |

---

## 11. Cronograma de Pruebas

**Tabla 18**

*Cronograma de actividades del ciclo de pruebas*

| Actividad | Fecha Inicio | Fecha Fin | Responsable | Estado |
| --- | --- | --- | --- | --- |
| Planificación y diseño de casos | 18/11/2026 | 19/11/2026 | Juanes Zapata / César Julio | [x] Completado |
| Preparación del ambiente | 18/11/2026 | 19/11/2026 | Julián Cardona | [x] Completado |
| Ejecución de pruebas funcionales | 19/11/2026 | 23/11/2026 | César Julio / Julián Cardona | [x] Completado |
| Ejecución de pruebas de integración | 19/11/2026 | 23/11/2026 | Julián Cardona | [x] Completado |
| Pruebas de rendimiento y seguridad | 19/11/2026 | 23/11/2026 | César Julio / Julián Cardona | [x] Completado (Seguridad básica y usabilidad móvil; rendimiento fuera de alcance) |
| Pruebas de aceptación (UAT) | 19/11/2026 | 23/11/2026 | PO / Cliente | [x] Completado |
| Corrección de defectos | 23/11/2026 | 23/11/2026 | Dev local / Julián Cardona | [x] Completado (5 defectos `DEF-001` a `DEF-005`: 3 reales + 2 inyección controlada, corregidos en local) |
| Regresión post-corrección | 23/11/2026 | 23/11/2026 | Julián Cardona | [x] Completado (Suite completa 34/34 pruebas Playwright y 18/18 manuales aprobadas) |
| Cierre y entrega del informe | 23/11/2026 | 23/11/2026 | Juanes Zapata / César Julio | [x] Completado |

---

## 12. Riesgos y Mitigación

**Tabla 19**

*Matriz de riesgos del proyecto de pruebas y planes de mitigación*

| # | Riesgo | Probabilidad | Impacto | Plan de Mitigación |
| --- | --- | --- | --- | --- |
| 1 | Retrasos en la entrega del build por parte del equipo de desarrollo. | Media | Alto | Establecer fechas de entrega claras con margen de holgura. Escalar si hay retraso superior a 2 días. |
| 2 | Ambiente de pruebas inestable o no disponible (`:8000` o `:9000/app` caídos). | Baja | Alto | Mantener guía de arranque local y verificación HTTP previa al inicio de la fase de ejecución de pruebas. |
| 3 | Cambios de requisitos durante la ejecución de pruebas. | Alta | Medio | Control de cambios formal. Reevaluar los casos afectados antes de continuar la ejecución. |
| 4 | Falta de datos de prueba suficientes (productos, clientes o regiones). | Media | Medio | Preparar conjunto de datos de prueba con anticipación y crear entidades aisladas mediante Admin API/UI. |
| 5 | Colisión de estado entre ejecuciones paralelas en Storefront y Admin. | Media | Medio | Garantizar aislamiento de datos por superficie y ejecución secuencial en los flujos compartidos. |

---

## 13. Métricas de Calidad

**Tabla 20**

*Indicadores clave de calidad del proyecto*

| Métrica | Fórmula / Medición | Meta | Valor Actual |
| --- | --- | --- | --- |
| **Tasa de ejecución de casos** | `(Casos ejecutados / Total casos) x 100` | >= 95 % | 100 % |
| **Tasa de casos aprobados** | `(Casos que pasan / Casos ejecutados) x 100` | >= 90 % | 100 % |
| **Densidad de defectos** | `Defectos encontrados / Casos ejecutados` | < 0.1 | 0.0980 |
| **Defectos críticos abiertos** | `Conteo de defectos críticos sin resolver` | = 0 | 0 |
| **Tasa de reapertura de defectos** | `(Defectos reabiertos / Defectos resueltos) x 100` | < 5 % | 0 % |
| **Cobertura de requisitos** | `(Requisitos cubiertos / Total requisitos) x 100` | 100 % | 100 % |

---

## 13. Criterios de Cierre y Entregables

### 13.1 Entregables del Plan de Pruebas

- Plan de pruebas (este documento).
- Casos de prueba documentados (51 casos: 18 manuales y 33 automatizados / 34 pruebas Playwright, en libro Excel y matriz).
- Informe de ejecución de pruebas.
- Registro de defectos (`DEF-001` a `DEF-005` en GitHub Issues y `defectos/registro-defectos.md`).
- Informe final de calidad (con análisis APA 7.ª edición y dashboard visual).

### 13.2 Aprobaciones

**Tabla 21**

*Registro de aprobaciones formales del plan de pruebas*

| Nombre | Rol | Firma | Fecha |
| --- | --- | --- | --- |
| Juanes Zapata | QA Lead / Auditoría de Cierre | Aprobado digitalmente (Repositorio QA) | 23/11/2026 |
| César Julio | QA Analyst | Aprobado digitalmente (Casos y APA 7.ª) | 23/11/2026 |
| Julián Cardona | QA Automatizador & Gestión de Defectos | Aprobado digitalmente (Playwright y Defectos) | 23/11/2026 |
| Docente Evaluadora | PM / Docente | Revisión en sustentación académica | 23/11/2026 |

---

## 14. Términos y Acrónimos

### 14.1 Términos

**Tabla 22**

*Glosario de términos del plan de pruebas*

| Término | Definición |
| --- | --- |
| **Caso de prueba** | Conjunto de condiciones, datos de entrada, pasos de ejecución y resultado esperado que valida una funcionalidad específica del sistema. |
| **Ciclo de pruebas** | Periodo de tiempo durante el cual se planifican, diseñan, ejecutan y evalúan las actividades de prueba para una entrega o versión del sistema. |
| **Criterio de aceptación** | Condiciones definidas que un sistema o funcionalidad debe cumplir para ser aceptado por el cliente o usuario final. |
| **Datos de prueba** | Conjunto de valores de entrada utilizados durante la ejecución de un caso de prueba para verificar el comportamiento del sistema. |
| **Defecto / Bug** | Discrepancia entre el comportamiento real del sistema y el comportamiento esperado según los requisitos. |
| **Entorno de pruebas** | Conjunto de hardware, software, datos y configuraciones utilizados para ejecutar las pruebas. |
| **Evidencia de prueba** | Artefactos generados durante la ejecución de pruebas que sirven como registro del resultado (capturas, logs, videos). |
| **Plan de pruebas** | Documento que describe el alcance, estrategia, recursos, cronograma y actividades del proceso de pruebas. |
| **Regresión** | Conjunto de pruebas ejecutadas para verificar que un cambio en el sistema no ha introducido nuevos defectos en funcionalidades ya validadas. |
| **Severidad** | Nivel de impacto que un defecto tiene sobre el funcionamiento del sistema. |
| **Trazabilidad** | Capacidad de rastrear un requisito desde su origen hasta los casos de prueba, ejecución y defectos asociados. |

### 14.2 Acrónimos

**Tabla 23**

*Listado de acrónimos utilizados en el documento*

| Acrónimo | Significado | Descripción |
| --- | --- | --- |
| **BVA** | Boundary Value Analysis | Análisis de Valores Límite. Técnica de diseño de pruebas que evalúa los valores en los límites de las particiones de equivalencia. |
| **CI/CD** | Continuous Integration / Continuous Delivery | Integración y entrega continua. Práctica de automatizar la integración, prueba y despliegue del software. |
| **EP** | Equivalence Partitioning | Partición de equivalencia. Técnica de diseño de casos de prueba que divide los datos de entrada en grupos equivalentes. |
| **KPI** | Key Performance Indicator | Indicador Clave de Rendimiento. Métrica utilizada para medir el éxito de una actividad o proceso. |
| **PM** | Project Manager | Gerente o director de proyecto. Responsable de la planificación y control del proyecto. |
| **PO** | Product Owner | Dueño del producto. Responsable de maximizar el valor del producto y gestionar el backlog. |
| **QA** | Quality Assurance | Aseguramiento de la calidad. Proceso sistemático para garantizar que el software cumple los requisitos de calidad. |
| **RACI** | Responsible, Accountable, Consulted, Informed | Matriz de asignación de responsabilidades en actividades de un proyecto. |
| **SUT** | System Under Test | Sistema bajo prueba. El sistema o componente que está siendo evaluado. |
| **UAT** | User Acceptance Testing | Pruebas de Aceptación de Usuario. Fase de pruebas en la que el cliente valida que el sistema cumple sus necesidades. |
| **APA** | American Psychological Association | Estándar internacional de estilo académico y citación (7.ª edición). |
