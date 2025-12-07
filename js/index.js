import { changeTheme } from "./changeTheme.js";
import { isActive } from "./isActive.js";
import { removeExtension } from "./removeExtension.js";
import { renderCards } from "./renderCards.js";
import {
  getData,
  loadData,
  updateExtension,
  toggleExtensions,
  fetchData,
} from "./toggleExtensions.js";

fetchData();
renderCards();
changeTheme();

document.addEventListener("DOMContentLoaded", async () => {
  await loadData();

  renderCards();

  isActive();

  getData();

  updateExtension();

  toggleExtensions();

  removeExtension()
});
