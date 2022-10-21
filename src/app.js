import loadPhotos from './utils/loadPhotos'
import '/src/assets/page.css';

// Controlador do indice de carregamento das imagens
let index = 0;

// Evento para o botão de carregamento de mais imagens - Por enquanto, carregando de 20 em 20.
let loadMoreButton = document.querySelector("svg.more");

loadMoreButton.addEventListener("click", () => {
    index += 20;
    loadPhotos(index)
} )


loadPhotos(index);

