import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';

var elementNum = 20;

if (elementNum = 20) {
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

document.getElementById('load-more').addEventListener('click', loadMore);

function loadMore() {
  elementNum += 20;
  if(elementNum <= 500) {
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
