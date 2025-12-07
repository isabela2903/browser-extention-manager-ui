import { getData } from "./toggleExtensions.js";

export async function isActive() {
  const toggles = document.querySelectorAll(".toggle");
  const extensions = await getData();
  
  toggles.forEach((toggle) => {
    const name = toggle.getAttribute('data-name')
    const target = extensions.find((item) => item.name === name);
    toggle.checked = !!target.isActive
  })
}
