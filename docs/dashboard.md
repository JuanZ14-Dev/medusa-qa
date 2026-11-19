---
layout: default
title: Dashboard de Métricas de Calidad
---

# Dashboard Visual de Métricas de Calidad

Este tablero presenta los indicadores clave de rendimiento (KPI) calculados a partir de la ejecución real de los 45 casos de prueba (18 manuales y 27 automatizados) sobre **Medusa Storefront (`http://localhost:8000`)** y **Medusa Admin (`http://localhost:9000/app`)**, en correspondencia con la Sección 13 del Plan de Pruebas y los registros en GitHub Issues.

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
| Tasa de ejecución de casos | `(45 / 45) x 100` | >= 95 % | 100 % | Cumplido |
| Tasa de casos aprobados | `(45 / 45) x 100` | >= 90 % | 100 % | Cumplido |
| Densidad de defectos | `0 / 45` | < 0.1 | 0.00 | Cumplido |
| Defectos críticos abiertos | `Conteo de defectos críticos sin resolver` | = 0 | 0 | Cumplido |
| Tasa de reapertura de defectos | `(0 / 0) x 100` | < 5 % | 0 % | Cumplido |
| Cobertura de requisitos | `(10 / 10) x 100` | 100 % | 100 % | Cumplido |

*Nota.* Datos fuente generados automáticamente en [`docs/assets/data/metrics.json`](./assets/data/metrics.json).

## Arquitectura de Ejecución Multiagente

```mermaid
flowchart LR
  SA01["Oleada 1: SA-01 Bootstrap"] --> SA02["Oleada 2A: SA-02 Plan y 45 Casos"]
  SA02 --> SA03["Oleada 2B: SA-03 45 GitHub Issues"]
  SA03 --> SA04["Oleada 3A: SA-04 Storefront (22 casos)"]
  SA03 --> SA05["Oleada 3B: SA-05 Admin (23 casos)"]
  SA04 --> SA06["Oleada 4A: SA-06 Sincronización y Defectos"]
  SA05 --> SA06
  SA06 --> SA07["Oleada 4B: SA-07 Métricas, Dashboard e Informe"]
  SA07 --> SA08["Oleada 5: SA-08 Auditoría APA 7.ª"]
```
