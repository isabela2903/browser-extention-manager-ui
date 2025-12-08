import { applyFilter } from "./applyFilter.js";

export async function fetchData() {
  const response = await fetch("./data/data.json");
  const data = await response.json();
  return data;
}

export async function loadData() {
  const savedToggle = localStorage.getItem("extensionsData");

  if (!savedToggle) {
    const data = await fetchData();
    localStorage.setItem("extensionsData", JSON.stringify(data));
  }
}

export function getData() {
  const data = localStorage.getItem("extensionsData");
  return data ? JSON.parse(data) : [];
}

export function updateExtension(name) {
  const data = getData();
  const extension = data.find((item) => item.name === name);

  if (extension) {
    extension.isActive = !extension.isActive;
    localStorage.setItem("extensionsData", JSON.stringify(data));
  }
}

export function toggleExtensions() {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      const name = event.currentTarget.getAttribute("data-name");
      updateExtension(name);
      applyFilter();
    });
  });
}
