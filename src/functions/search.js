import { addHTML, items } from "../components/photoCard.js";
const content = document.getElementById("container");
const inputSearch = document.getElementById("search");

inputSearch.oninput = () => {
  content.innerHTML = "";
  items
    .filter((item) =>
      item.title.toLowerCase().includes(inputSearch.value.toString().toLowerCase())
    )
    .forEach((item) => addHTML(item));
};