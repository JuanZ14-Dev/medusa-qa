---
layout: default
title: Dashboard de Métricas de Calidad
---

# Dashboard Visual de Métricas de Calidad

Este tablero presenta los indicadores clave de rendimiento (KPI) calculados a partir de la ejecución real de los 51 casos de prueba (18 manuales y 33 automatizados / 34 pruebas en Playwright) sobre **Medusa Storefront (`http://localhost:8000`)** y **Medusa Admin (`http://localhost:9000/app`)**, en correspondencia con la Sección 13 del Plan de Pruebas y el seguimiento exclusivo de defectos `DEF-*` en GitHub Issues.

<link rel="stylesheet" href="./assets/css/custom.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="./assets/js/dashboard-charts.js"></script>

<div id="kpi-cards" class="kpi-grid"></div>

<div class="charts-grid">
  <div class="chart-box"><canvas id="chart-modules"></canvas></div>
  <div class="chart-box"><canvas id="chart-surfaces"></canvas></div>
</div>

**Tabla 1**

*Indicadores clave de calidad consolidados (Sección 13)*

| Métrica | Fórmula / Medición | Meta | Valor Actual | Estado |
| --- | --- | --- | --- | --- |
| Tasa de ejecución de casos | `(51 / 51) x 100` | >= 95 % | 100 % | Cumplido |
| Tasa de casos aprobados | `(51 / 51) x 100` | >= 90 % | 100 % | Cumplido |
| Densidad de defectos | `5 / 51` | < 0.1 | 0.0980 | Cumplido |
| Defectos críticos abiertos | `Conteo de defectos críticos sin resolver` | = 0 | 0 | Cumplido |
| Tasa de reapertura de defectos | `(0 / 5) x 100` | < 5 % | 0 % | Cumplido |
| Cobertura de requisitos | `(10 / 10) x 100` | 100 % | 100 % | Cumplido |

*Nota.* Datos fuente generados automáticamente en [`docs/assets/data/metrics.json`](./assets/data/metrics.json). También puede consultarse el tablero interactivo con segmentadores de datos y gráficos dinámicos en la hoja `Dashboard` de [`casos-de-prueba-medusa.xlsx`](https://github.com/JuanZ14-Dev/medusa-qa/blob/main/casos-de-prueba/casos-de-prueba-medusa.xlsx).

## Flujo del Ciclo de Pruebas QA

```mermaid
flowchart LR
  F1["Fase 1: Planificación y Estrategia (Juanes Zapata)"] --> F2["Fase 2: Diseño de 51 Casos y Excel (César Julio)"]
  F2 --> F3A["Fase 3A: Ejecución Manual Storefront/Admin (18 casos - César Julio)"]
  F2 --> F3B["Fase 3B: Automatización Playwright E2E (33 specs / 34 tests - Julián Cardona)"]
  F3A --> F4["Fase 4: Inspección en Vivo y Defectos DEF-001..DEF-005 (Julián Cardona)"]
  F3B --> F4
  F4 --> F5["Fase 5: Corrección Local y Regresión 51/51 (Equipo QA)"]
  F5 --> F6["Fase 6: Métricas, Dashboard e Informe APA 7.ª (Juanes Zapata)"]
  F6 --> F7["Fase 7: Auditoría Independiente de Cierre (Equipo QA)"]
```
