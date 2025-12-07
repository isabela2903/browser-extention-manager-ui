import { isActive } from "./isActive.js";
import { renderCards } from "./renderCards.js";
import { getData, toggleExtensions } from "./toggleExtensions.js";

export function applyFilter() {
  const savedFilter = localStorage.getItem("selectedFilter") || "all";
  const buttons = document.querySelectorAll(".btn-filter");

  if (savedFilter) {
    const data = getData();

    let filteredExtensions;
    if (savedFilter === "all") {
      filteredExtensions = data;
    } else if (savedFilter === "active") {
      filteredExtensions = data.filter((ext) => ext.isActive === true);
    } else if (savedFilter === "inactive") {
      filteredExtensions = data.filter((ext) => ext.isActive === false);
    }

    renderCards(filteredExtensions);
    isActive();
    toggleExtensions();

    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    const selectedBtn = document.querySelector(
      `.btn-filter[data-filter="${savedFilter}"]`
    );
    if (selectedBtn) selectedBtn.classList.add("selected");
  } else if (!savedFilter) {
    renderCards(getData());
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
      const selectedBtn = document.querySelector(
        '.btn-filter[data-filter="all"]'
      );
      if (selectedBtn) selectedBtn.classList.add("selected");
    });
  }
}
