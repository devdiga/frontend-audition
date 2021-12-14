import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';
import photoList from './components/photoList';

//Caso o usuário não pressione o botão "MOSTRAR MAIS" ou preencha o campo de busca, a página exibe as primeiras 20 fotos:

var searching = false;
var listViewOn = false;
var firstEl = 0;
var lastEl = 20;

if (searching === false && listViewOn === false)
    initialPage();

function initialPage() {
    listViewOn = false;
    document.getElementById('container').innerHTML = '';
    firstEl = 0;
    lastEl = 20;
    if (lastEl === 20) {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoCard(photo));
                });
            })
            .catch((error) => {
                alert(error);
            });
    };
};

//Botão "MOSTRAR MAIS" pressionado
document.getElementById('load-more').addEventListener('click', loadMore);

function loadMore() {
    firstEl += 20; //firstEl and lastEl
    lastEl += 20;

    //Se o botão "MOSTRAR MAIS" for pressionado na exibição de bloco e não estiver sendo feita nenhuma busca, a página exibe mais 20 fotos:
    if (lastEl <= 500 && searching === false && listViewOn === false) {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoCard(photo));
                });
            })
            .catch((error) => {
                alert(error);
            });
    };

    //Se o botão "MOSTRAR MAIS" for pressionado na exibição de linha e não estiver sendo feita nenhuma busca, a página exibe mais 20 linhas:
    if (lastEl <= 500 && searching === false && listViewOn === true) {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoList(photo));
                });
            })
            .catch((error) => {
                alert(error);
            });
    };
};

//Busca automática (autocomplete)

document.getElementById('search').addEventListener('input', ({target})  => {
    const searchInput = target.value;
    searching = true;

    if (listViewOn === false) {
        axios.get('https://jsonplaceholder.typicode.com/photos')  
            .then((response) => {
                let filtered = response.data.filter(({title}) => title.indexOf(searchInput) >= 0);
                const container = document.getElementById('container');
                filtered.forEach((photo) => {
                    container.appendChild(photoCard(photo));
                });
            })
            .catch((error) => {
                alert(error);
            });
    }

    if (listViewOn === true) {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                let filtered = response.data.filter(({title}) => title.indexOf(searchInput) >= 0);
                const container = document.getElementById('container');
                filtered.forEach((photo) => {
                    container.appendChild(photoList(photo));
                });
            })
            .catch((error) => {
                alert(error);
            });
    }
});

//Toda vez que digitar / deletar um caractere no input limpa a tela, para não ficar buscas anteriores:

document.getElementById('search').addEventListener('input', deleteSearch);

function deleteSearch () {
    document.getElementById('container').innerHTML = '';
}

//Visualização por bloco

document.getElementById('block').addEventListener("click", initialPage);

//Visualização por lista

document.getElementById('list').addEventListener("click", listView);

function listView () {
    listViewOn = true;
    firstEl = 0;
    lastEl = 20;
    document.getElementById('container').innerHTML = '';
    axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(firstEl, lastEl).forEach((photo) => {
                    container.appendChild(photoList(photo));
                });
            })
            .catch((error) => {
                alert(error);
            });
}