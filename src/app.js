import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';
import photoList from './components/photoList';

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
const container = document.getElementById('container');
//Visualização por lista
var listViewOn = false;

function getPhotos () {
    axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                photos = response.data;
                // Carrega fotos na tela
                rendered = photos.slice(0, lastEl);
                renderPhotos(rendered)
                var p = document.getElementById('element-num');
                p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
            })
            .catch((error) => {
                alert(error);
            });
}

getPhotos();

function renderPhotos (rendered) {
    container.innerHTML = ''
    rendered.forEach((photo) => {
        if (listViewOn) {
            container.appendChild(photoList(photo));
        } else {
            container.appendChild(photoCard(photo));
        }
        totalPhotos = rendered.length;   
    });
}

//Botão "MOSTRAR MAIS" pressionado
document.getElementById('load-more').addEventListener('click', showMore);


function showMore () {
    lastEl += 20;
    rendered = photos.slice(0, lastEl);
    renderPhotos(rendered);
}

//Busca automática
document.getElementById('search').addEventListener('input', ({target})  => {
    const searchInput = target.value;
    filtered = photos.filter(({title}) => title.indexOf(searchInput) >= 0);
    rendered = filtered.slice(0, 20);
    renderPhotos(rendered);
    /*      rendered.slice(0, 20).forEach((photo) => {
            container.appendChild(photoCard(photo));
            totalPhotos = rendered.length;
            var p = document.getElementById('element-num');
            if(rendered.length <= 20){
                //p.innerText =  `Mostrando ${totalPhotos} de ${totalPhotos}`;
            }
        });
    } else {
        rendered.slice(0, 20).forEach((photo) => {
            container.appendChild(photoList(photo));
            totalPhotos = rendered.length;
            var p = document.getElementById('element-num');
            p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
            if(rendered.length <= 20){
                //p.innerText =  `Mostrando ${totalPhotos} de ${totalPhotos}`;
            }
        });
    } */

});

//Visualização por lista    
document.getElementById('list').addEventListener('click', listView);

function listView() {
    listViewOn = true;
    renderPhotos(rendered);
}

//Visualização por grid
document.getElementById('grid').addEventListener("click", gridView);

function gridView () {
    listViewOn = false;
    renderPhotos(rendered);
}