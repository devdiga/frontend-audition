import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';
import photoList from './components/photoList';

var firstEl = 0;
var lastEl = 20;

// Todas as Fotos
var photos = [];
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
                //Carrega fotos na tela
                rendered = photos;
                rendered.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoCard(photo));
                totalPhotos = photos.length;
                var p = document.getElementById('element-num');
                p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
                });
            })
            .catch((error) => {
                alert(error);
            });
}

getPhotos();

//Botão "MOSTRAR MAIS" pressionado
document.getElementById('load-more').addEventListener('click', showMore);


function showMore () {
    lastEl +=20;
    if(listViewOn === false)
        rendered.slice(0, lastEl).forEach((photo) => {
            container.appendChild(photoCard(photo));
        });
    else{
        rendered.slice(0, lastEl).forEach((photo) => {
            container.appendChild(photoList(photo));
        });
    }
}

//Busca automática
document.getElementById('search').addEventListener('input', ({target})  => {
    const searchInput = target.value;
    filtered = photos.filter(({title}) => title.indexOf(searchInput) >= 0);
    rendered = filtered;
    container.innerHTML = '';
    rendered.slice(0, lastEl).forEach((photo) => {
        container.appendChild(photoCard(photo));
        totalPhotos = filtered.length;
        var p = document.getElementById('element-num');
        p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
    });

});

//Visualização por lista    
document.getElementById('list').addEventListener('click', listView);

function listView() {
    listViewOn = true;
    container.innerHTML = '';
    rendered.slice(0, lastEl).forEach((photo) => {
        container.appendChild(photoList(photo));
        var p = document.getElementById('element-num');
        p.innerText =  `Mostrando ${lastEl} de 500`;
    });
}

//Visualização por bloco

//document.getElementById('block').addEventListener("click", initialPage);

//Visualização por lista

//document.getElementById('list').addEventListener("click", listView);
/*
function listView () {
    firstEl = 0;
    lastEl = 20;
    document.getElementById('container').innerHTML = '';
    axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoList(photo));
                    var p = document.getElementById('element-num');
                    p.innerText =  `Mostrando ${lastEl} de 500`;
                });
            })
            .catch((error) => {
                alert(error);
            });
}
*/