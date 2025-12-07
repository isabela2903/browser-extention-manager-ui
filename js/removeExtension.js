import { getData } from "./toggleExtensions.js";

export function removeExtension() {
  const removeButton = document.querySelectorAll(".btn-remove");
  removeButton.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const extension = event.currentTarget.getAttribute("data-name");

      function removeCard(name) {
        const data = getData();
        const target = data.findIndex((item) => item.name === name);
        data.splice(target, 1);
        localStorage.setItem("extensionsData", JSON.stringify(data));
      }
      removeCard(extension);
      btn.closest(".card").remove();
    });
  });
}
