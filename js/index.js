import { applyFilter } from "./applyFilter.js";
import { changeTheme } from "./changeTheme.js";
import { filterExtensions } from "./filterExtensions.js";
import { renderCards } from "./renderCards.js";
import {
  getData,
  loadData,
  fetchData
} from "./toggleExtensions.js";

fetchData();
renderCards(getData());
changeTheme();

document.addEventListener("DOMContentLoaded", async () => {
  await loadData();

  applyFilter();

  filterExtensions();
  
});
