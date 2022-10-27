import { addHTML, items } from "../components/photoCard.js";
const content = document.getElementById("container");
const inputSearch = document.getElementById("search");

inputSearch.oninput = () => {
  content.innerHTML = "";
  const isListView = content.className === "container-list";
  items
    .filter((item) => {
      const search = isListView ? item.id : item.title;
      return search.toString().toLowerCase().includes(inputSearch.value.toString().toLowerCase())
    }).forEach((item, index) => {
      const clean = index === 0;
      addHTML(item, clean, isListView);
    })
}