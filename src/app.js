import loadPhotos from './utils/loadPhotos'
import filterPhotos from './utils/filterPhotos'
import '/src/assets/page.css';

// Seletores de elementos
let loadMoreButton = document.querySelector("svg.more");
let searchBar = document.querySelector("input#search");

// Controlador do indice de carregamento das imagens
let index = 0;

// Evento para o botão de carregamento de mais imagens - Por enquanto, carregando de 20 em 20.
loadMoreButton.addEventListener("click", () => {
    index += 20;
    loadPhotos(index)
} )

// Evento para a barra de pesquisa
searchBar.addEventListener("input", () => {
    let photoTitles = document.querySelectorAll("div.title");
    photoTitles.forEach(element => filterPhotos(element, searchBar.value))
})



// Primeiro carregamento
loadPhotos(index);

