import axios from "axios";
import "/src/assets/page.css";

import photoCard from "./components/photoCard";
import photoList from "./components/photoList";

// Todas as Fotos
var photos = [];
//Último elemento do array a ser carregado
var lastEl = 20;
//Total de fotos
var totalPhotos = null;
//Fotos filtradas de acordo com o input
var filtered = [];
//Fotos que são renderizadas na página
var rendered = [];
//Container onde são carregadas as fotos
const container = document.getElementById("container");
//Visualização por lista
var listViewOn = false;

function getPhotos() {
  axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(function (response) {
      photos = response.data;
      // Carrega fotos na tela
      rendered = photos;
      renderPhotos(rendered);
    })
    .catch((error) => {
      alert(error);
    });
}

function paginator() {
  totalPhotos = rendered.length;
  if (totalPhotos > lastEl) {
    var p = document.getElementById("element-num");
    p.innerText = `Mostrando ${lastEl} de ${totalPhotos}`;
  } else {
    var p = document.getElementById("element-num");
    p.innerText = `Mostrando ${totalPhotos} de ${totalPhotos}`;
  }
}

getPhotos();

function renderPhotos(rendered) {
  container.innerHTML = "";
  rendered.slice(0, lastEl).forEach((photo) => {
    if (listViewOn) {
      container.appendChild(photoList(photo));
    } else {
      container.appendChild(photoCard(photo));
    }
  });
  paginator();
}

//Botão "MOSTRAR MAIS" pressionado
document.getElementById("load-more").addEventListener("click", showMore);

function showMore() {
  lastEl += 20;
  rendered = photos.slice(0, lastEl);
  renderPhotos(rendered);
}

//Busca automática
document.getElementById("search").addEventListener("input", ({ target }) => {
  const searchInput = target.value;
  filtered = photos.filter(({ title }) => title.indexOf(searchInput) >= 0);
  rendered = filtered.slice(0, 20);
  renderPhotos(rendered);
});

//Visualização por lista
document.getElementById("list").addEventListener("click", listView);

function listView() {
  listViewOn = true;
  renderPhotos(rendered);
}

//Visualização por grid
document.getElementById("grid").addEventListener("click", gridView);

function gridView() {
  listViewOn = false;
  renderPhotos(rendered);
}
