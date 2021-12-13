import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';

//Caso o usuário não pressione o botão "Carregar Mais" ou preencha o campo de busca, a página exibe as primeiras 20 fotos:

var searching = false;
var firstEl = 0;
var lastEl = 20;

function initialPage() {
    document.getElementById('container').innerHTML = '';
    firstEl = 0;
    lastEl = 20;
    if (lastEl === 20 && searching === false) {
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
//Se o botão "Carregar Mais" for pressionado e não estiver sendo feita nenhuma busca, a página exibe mais 20 fotos:

document.getElementById('load-more').addEventListener('click', loadMore);

function loadMore() {
    firstEl += 20;
    lastEl += 20; // Implementar o firstEl and lastEl
    if (lastEl <= 500 && searching === false) {
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

//Busca automática (autocomplete)
document.getElementById('search').addEventListener('input', ({target})  => {
    const searchInput = target.value;
    searching = true;
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
});

function deleteSearch () {
    document.getElementById('container').innerHTML = '';
}

document.getElementById('search').addEventListener('input', deleteSearch);


if (searching === false)
    initialPage();
    console.log(searching);
