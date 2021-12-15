import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';
import photoList from './components/photoList';

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
                rendered.slice(0, lastEl).forEach((photo) => {
                    container.appendChild(photoCard(photo));
                totalPhotos = rendered.length;
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
            totalPhotos = rendered.length;
            var p = document.getElementById('element-num');
            p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
    
        }); else{
        rendered.slice(0, lastEl).forEach((photo) => {
            container.appendChild(photoList(photo));
            totalPhotos = rendered.length;
            var p = document.getElementById('element-num');
            p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
        });
    }
}

//Busca automática
document.getElementById('search').addEventListener('input', ({target})  => {
    const searchInput = target.value;
    filtered = photos.filter(({title}) => title.indexOf(searchInput) >= 0);
    rendered = filtered;
    lastEl = 20;
    container.innerHTML = '';
    if(listViewOn === false) {
        rendered.slice(0, 20).forEach((photo) => {
            container.appendChild(photoCard(photo));
            totalPhotos = rendered.length;
            var p = document.getElementById('element-num');
            p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
        });
    } else {
        rendered.slice(0, 20).forEach((photo) => {
            container.appendChild(photoList(photo));
            totalPhotos = rendered.length;
            var p = document.getElementById('element-num');
            p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
        });
    }

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

//Visualização por grid
document.getElementById('grid').addEventListener("click", gridView);

function gridView () {
    listViewOn = false;
    container.innerHTML = '';
    rendered.slice(0, lastEl).forEach((photo) => {
        container.appendChild(photoCard(photo));
        var p = document.getElementById('element-num');
        p.innerText =  `Mostrando ${lastEl} de 500`;
    });
}