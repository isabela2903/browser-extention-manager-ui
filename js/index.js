import { applyFilter } from "./applyFilter.js";
import { changeTheme } from "./changeTheme.js";
import { filterExtensions } from "./filterExtensions.js";
import { isActive } from "./isActive.js";
import { removeExtension } from "./removeExtension.js";
import { renderCards } from "./renderCards.js";
import {
  getData,
  loadData,
  toggleExtensions,
  fetchData,
} from "./toggleExtensions.js";

fetchData();
renderCards(getData());
changeTheme();

document.addEventListener("DOMContentLoaded", async () => {
  await loadData();

  applyFilter();

  isActive();

  toggleExtensions();

  removeExtension();

  filterExtensions();
});
