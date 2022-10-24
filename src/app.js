import loadPhotos from './utils/loadPhotos'
import filterPhotos from './utils/filterPhotos'
import convertCardsToList from './utils/convertCardsToList';
import '/src/assets/page.css';

// Seletores de elementos
let loadMoreButton = document.querySelector("svg.more");
let searchBar = document.querySelector("input#search");
let listStyleButton = document.querySelector("svg.list-mode");
let cardStyleButton = document.querySelector("svg.card-mode");
let loadedPhotos;

// Controlador do indice de carregamento das imagens
let index = 0;

// Primeiro carregamento
loadPhotos(index);

// Evento para o botão de carregamento de mais imagens - Por enquanto, carregando de 20 em 20.
loadMoreButton.addEventListener("click", async () => {
    index += 20;
    await loadPhotos(index);
    
    if (listStyleButton.classList.contains("active")) {
        loadedPhotos = [...loadedPhotos, ...document.querySelectorAll("div.photo-card")];
        let container = document.querySelector("div#container");
        container.replaceChildren(convertCardsToList(loadedPhotos));
    }
    
    filterPhotos(searchBar.value);
})

// Evento para a barra de pesquisa
searchBar.addEventListener("input", () => {
    filterPhotos(searchBar.value);
})

// Evento Botão Trocar para Visualização em Lista
listStyleButton.addEventListener("click", () => {
    if (!listStyleButton.classList.contains("active")) {
        loadedPhotos = document.querySelectorAll("div.photo-card");
        let container = document.querySelector("div#container");
        container.replaceChildren(convertCardsToList(loadedPhotos));
        render();
    }
})

// Evento botão visualiação em cards
cardStyleButton.addEventListener("click", () => {
    if (!cardStyleButton.classList.contains("active")) {
        let container = document.querySelector("div#container");
        container.replaceChildren(...loadedPhotos);
        render();
    }
})

// Muda o botão ativo e ajusta a filtragem caso esteja ativada
function activateButton() {
    cardStyleButton.classList.toggle("active");
    listStyleButton.classList.toggle("active");
}

// Atualiza a tela
function render() {
    activateButton();
    filterPhotos(searchBar.value)
}


