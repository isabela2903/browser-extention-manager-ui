import { changeTheme } from "./changeTheme.js";
import { isActive } from "./isActive.js";
import { fetchData, renderCards } from "./renderCards.js";
import { getData } from "./storage.js";

fetchData();
renderCards();
changeTheme();

document.addEventListener("DOMContentLoaded", async () => {
  await renderCards();

  isActive();

  async function loadData() {
    const savedToggle = localStorage.getItem("extensionsData");

    if (!savedToggle) {
      const data = await fetchData();
      localStorage.setItem("extensionsData", JSON.stringify(data));
    }
  }

  getData();

  function updateExtension(name) {
    const data = getData();
    const extension = data.find((item) => item.name === name);

    if (extension) {
      extension.isActive = !extension.isActive;
      localStorage.setItem("extensionsData", JSON.stringify(data));
    }
  }

  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      const name = event.currentTarget.getAttribute("data-name");
      updateExtension(name);
    });
  });
  
  loadData();
});
