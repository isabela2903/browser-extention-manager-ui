import { getData } from "./toggleExtensions.js";

export async function isActive() {
  const toggles = document.querySelectorAll(".toggle");
  const extensions = await getData();
  
  extensions.forEach((extension, index) => {
    toggles[index].checked = !!extension.isActive
  })
}
