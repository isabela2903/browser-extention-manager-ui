import { isActive } from "./isActive.js";
import { renderCards } from "./renderCards.js";
import { getData, toggleExtensions } from "./toggleExtensions.js";

export function filterExtensions() {
    const btnsFilter = document.querySelectorAll(".btn-filter");
    btnsFilter.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const filter = event.currentTarget.getAttribute("data-filter");
        localStorage.setItem('selectedFilter', filter);
        const target = event.currentTarget;
        const data = getData();
        btnsFilter.forEach((btn) => {
          btn.classList.remove("selected");
        });
        target.classList.add("selected");

        let filteredExtensions; 
        if (filter === 'all') {
          filteredExtensions = data;
        } else if (filter === 'active') {
          filteredExtensions = data.filter(ext => ext.isActive === true);
        } else if (filter === 'inactive') {
          filteredExtensions = data.filter(ext => ext.isActive === false);
        }

        renderCards(filteredExtensions);
        isActive();
        toggleExtensions();
      });
    });
  }