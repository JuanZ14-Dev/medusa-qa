---
layout: default
title: Proyecto QA Medusa
---

# Aseguramiento de Calidad (QA) — Sistema de Comercio Electrónico Medusa

Bienvenido al portal documental del proyecto de Aseguramiento de Calidad (QA) aplicado sobre la plataforma **Medusa** (`http://localhost:8000` Storefront y `http://localhost:9000/app` Admin), con trazabilidad de casos en libro Excel oficial y gestión exclusiva de defectos (`DEF-*`) en GitHub Issues, automatización en Playwright + TypeScript y publicación en GitHub Pages bajo normas APA 7.ª edición.

## Navegación de Entregables

- [Plan de Pruebas (Secciones 1–14)](./plan-de-pruebas.md)
- [Plan de Pruebas Oficial (PDF)](./Plan_de_Pruebas_Medusa_QA.pdf)
- [Dashboard Visual de Métricas (Web)](./dashboard.md)
- [Libro Excel de Casos y Dashboard (`.xlsx`)](https://github.com/JuanZ14-Dev/medusa-qa/blob/main/casos-de-prueba/casos-de-prueba-medusa.xlsx)
- [Informe Final de Calidad (APA 7.ª edición)](./informe-final-calidad.md)
- [Matriz de Trazabilidad de Requisitos](./matriz-trazabilidad.md)
- [Acta de Auditoría de Calidad](./acta-auditoria-calidad.md)
- [Referencias (APA 7.ª edición)](./referencias-apa7.md)

**Tabla 1**

*Resumen ejecutivo de cobertura del ciclo de pruebas*

| Dimensión | Cantidad | Superficie | Estado |
| --- | :---: | --- | --- |
| Casos manuales ejecutados | 18 | Storefront (9) y Admin (9) | 100 % aprobados |
| Casos automatizados Playwright | 33 (34 pruebas) | Storefront (19) y Admin (14) | 100 % aprobados |
| Total de casos de prueba trazados | 51 | Libro Excel (`.xlsx`) y Matriz de Trazabilidad | 100 % ejecutados |
| Defectos reportados en GitHub Issues (`DEF-*`) | 5 (`#46`–`#50`) | Storefront (3 reales, 2 inyección controlada) | 5 cerrados por regresión (0 críticos abiertos) |
