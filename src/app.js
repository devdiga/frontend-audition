import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';

var elementNum = 20;
var searching = 0;

//Valida se o campo de busca está sendo preenchido
/*
searching = document.getElementById('search').addEventListener("input", ({target}) => {
    const searchInput = target.value
    if (searchInput !== '') {
        return 1;
    }

    else {
        return 0;
    }
});
*/
//Caso o usuário não pressione o botão "Carregar Mais" ou preencha o campo de busca, a página exibe as primeiras 20 fotos:

if (elementNum == 20 && document.getElementById('search').onload !== 0)
    axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            const container = document.getElementById('container');
            response.data.slice(0, elementNum).forEach((photo) => {
                container.appendChild(photoCard(photo));
            });
        })
        .catch((error) => {
            alert(error);
        });
        
//Se o botão "Carregar Mais" for pressionado e não estiver sendo feita nenhuma busca, a página exibe mais 20 fotos:

document.getElementById('load-more').addEventListener('click', loadMore);

function loadMore() {
    elementNum += 20;
    if (elementNum <= 500 && document.getElementById('search').oninput !== 0) {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                const container = document.getElementById('container');
                response.data.slice(0, elementNum).forEach((photo) => {
                    container.appendChild(photoCard(photo));
                });
            })
            .catch((error) => {
                alert(error);
            });
    };
};

//document.getElementById('search').includes