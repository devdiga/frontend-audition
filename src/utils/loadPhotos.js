import axios from 'axios';
import photoCard from '../components/photoCard';

export default function loadPhotos(index = 0, quantity = 20) {

  return new Promise(function (resolve, reject) {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(
      (response) => {
        const container = document.getElementById('container');
        response.data.slice(index, (index + quantity)).forEach((photo) => {
          container.appendChild(photoCard(photo));
        });
        resolve();
      },
      (error) => {
        reject(error);
      }
    );
  });
}