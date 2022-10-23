import axios from 'axios';
import '/src/assets/page.css';
import { items, addHTML } from './functions/search.js'

axios.get('https://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    items.push(...response.data.slice(0, 30));
    items.slice(0, 20).forEach((photo) => addHTML(photo));
  })
  .catch((error) => {
    alert(error);
  });
