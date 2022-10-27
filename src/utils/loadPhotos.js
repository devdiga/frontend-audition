import axios from 'axios';
import photoCard from '../components/photoCard';
import createModals from '../components/createModals';

let index = 0;

export default async function loadPhotos(quantity = 4) {
  if (index > 0) {
    quantity = await askQuantity();
  }

  return new Promise(function (resolve, reject) {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(
      (response) => {
        const container = document.getElementById('container');
        response.data.slice(index, (index + quantity)).forEach((photo) => {
          container.appendChild(photoCard(photo));
        });
        index += quantity;
        createModals();
        resolve();
      },
      (error) => {
        reject(error);
      }
    );
  });
}

function askQuantity() {
  return new Promise(function (resolve) {
    let quantity;
    do {
      quantity = prompt("Quantas imagens deseja carregar?");
      if (quantity.match(/\D/gm)){
        alert("Valor inválido, digite um número inteiro!");
      } else if ((quantity.length == 0)){
        quantity = 0;
      } else {
        quantity = Number(quantity);
      }
    } while (typeof(quantity) != 'number')
    alert(`Carregando ${quantity} novas fotos.`)
    resolve(quantity)
  })
}