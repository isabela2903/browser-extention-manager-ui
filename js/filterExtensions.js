import { applyFilter } from "./applyFilter.js";

export function filterExtensions() {
    const btnsFilter = document.querySelectorAll(".btn-filter");
    btnsFilter.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const filter = event.currentTarget.getAttribute("data-filter");
        localStorage.setItem('selectedFilter', filter);
        
        applyFilter();
      });
    });
  }

  //adiciona o evento de clique nos botões, aplico o filtro, atualiza e renderiza