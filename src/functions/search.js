import photoCard from '../components/photoCard';
const content = document.getElementById("container");
const inputSearch = document.getElementById("search");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";
  items
    .filter((item) =>
      item.title.toLowerCase().includes(inputSearch.value.toString().toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

const addHTML = (item) => {
  container.appendChild(photoCard(item))
}

export { items, addHTML }
