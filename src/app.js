import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';
import photoList from './components/photoList';

var firstEl = 0;
var lastEl = 20;

// Todas as Fotos
var photos = []

//Total de fotos
var totalPhotos = null;

//Fotos filtradas de acordo com o input
var filtered = []

//Container onde são carregadas as fotos
const container = document.getElementById('container');

renderPhotos();

function getPhotos () {
    axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                photos = response.data;
                photos.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoCard(photo));
                totalPhotos = photos.length;
                var p = document.getElementById('element-num');
                p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
                });
            })
            .catch((error) => {
                alert(error);
            });
    return photos;
}

function renderPhotos() {
    firstEl = 0;
    lastEl = 20;
    getPhotos();  
};

//Botão "MOSTRAR MAIS" pressionado
//document.getElementById('load-more').addEventListener('click', loadMore);

/*
function loadMore() {
    firstEl += 20; //firstEl and lastEl
    lastEl += 20;
}
*/
    //Se o botão "MOSTRAR MAIS" for pressionado na exibição de bloco e não estiver sendo feita nenhuma busca, a página exibe mais 20 fotos:
    /*
    if (lastEl <= 500 && searching === false && listViewOn === false) {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoCard(photo));
                    var p = document.getElementById('element-num');
                    p.innerText =  `Mostrando ${lastEl} de 500`;
                });
            })
            .catch((error) => {
                alert(error);
            });
    };
    */

    //Se o botão "MOSTRAR MAIS" for pressionado na exibição de linha e não estiver sendo feita nenhuma busca, a página exibe mais 20 linhas:
    /*
    if (lastEl <= 500 && searching === false && listViewOn === true) {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoList(photo));
                    var p = document.getElementById('element-num');
                    p.innerText =  `Mostrando ${lastEl} de 500`;;
                });
            })
            .catch((error) => {
                alert(error);
            });
    };
};
*/
//Busca automática
document.getElementById('search').addEventListener('input', ({target})  => {
    const searchInput = target.value;
    filtered = photos.filter(({title}) => title.indexOf(searchInput) >= 0);
    container.innerHTML = '';
    filtered.slice(0, lastEl).forEach((photo) => {
        container.appendChild(photoCard(photo));
        totalPhotos = filtered.length;
        var p = document.getElementById('element-num');
        p.innerText =  `Mostrando ${lastEl} de ${totalPhotos}`;
    });

});

//Visualização por lista    
document.getElementById('list').addEventListener('click', listView);

function listView() {
    container.innerHTML = '';
    filtered.slice(0, lastEl).forEach((photo) => {
        container.appendChild(photoList(photo));
        var p = document.getElementById('element-num');
        p.innerText =  `Mostrando ${lastEl} de 500`;
    });
}
/*
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                let filtered = response.data.filter(({title}) => title.indexOf(searchInput) >= 0);
                const container = document.getElementById('container');
                filtered.forEach((photo) => {
                    container.appendChild(photoList(photo));
                    var p = document.getElementById('element-num');
                    p.innerText =  `Mostrando ${lastEl} de 500`;
                });
            })
            .catch((error) => {
                alert(error);
            });
    }
});
*/

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