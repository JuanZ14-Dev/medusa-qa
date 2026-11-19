async function renderDashboard() {
  const response = await fetch("./assets/data/metrics.json")
  const data = await response.json()

  const kpiContainer = document.getElementById("kpi-cards")
  if (kpiContainer) {
    kpiContainer.innerHTML = data.kpis
      .map(
        (kpi) => `
      <div class="kpi-card">
        <h3>${kpi.name}</h3>
        <div class="kpi-value">${kpi.actual}</div>
        <div class="kpi-meta">Meta: ${kpi.target} | Cumplido: ${kpi.met ? "Sí" : "No"}</div>
      </div>`
      )
      .join("")
  }

  const modules = Object.keys(data.byModule)
  const modPassed = modules.map((m) => data.byModule[m].passed)
  const modFailed = modules.map((m) => data.byModule[m].failed)

  const moduleCtx = document.getElementById("chart-modules")
  if (moduleCtx && window.Chart) {
    new window.Chart(moduleCtx, {
      type: "bar",
      data: {
        labels: modules,
        datasets: [
          { label: "Aprobados", data: modPassed, backgroundColor: "#2ea44f" },
          { label: "Fallidos", data: modFailed, backgroundColor: "#cf222e" },
        ],
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: "Resultados por Módulo Funcional" } },
      },
    })
  }

  const surfaceCtx = document.getElementById("chart-surfaces")
  if (surfaceCtx && window.Chart) {
    new window.Chart(surfaceCtx, {
      type: "doughnut",
      data: {
        labels: ["Storefront (:8000)", "Admin (:9000/app)"],
        datasets: [
          {
            data: [data.bySurface.Storefront.passed, data.bySurface.Admin.passed],
            backgroundColor: ["#0969da", "#8250df"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: "Cobertura Aprobada por Superficie" } },
      },
    })
  }
}

document.addEventListener("DOMContentLoaded", renderDashboard)
