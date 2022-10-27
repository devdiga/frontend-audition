import { addHTML, items } from "../components/photoCard.js";

function populateList(isListView = false) {
  items.forEach((item, index) => {
    const clean = index === 0;
    addHTML(item, clean, isListView);
  })
}

function listView() {
  populateList(true);
  document.getElementById("container").classList.add('container-list');
  document.getElementById("container").classList.remove('container');
  document.getElementById("list").classList.add('active');
  document.getElementById("grid").classList.remove('active');
}

function gridView() {
  populateList(false);
  document.getElementById("container").classList.remove('container-list');
  document.getElementById("container").classList.add('container');
  document.getElementById("list").classList.remove('active');
  document.getElementById("grid").classList.add('active');
}

document.getElementById("grid").addEventListener("click", gridView, false);
document.getElementById("list").addEventListener("click", listView, false);

export { populateList }