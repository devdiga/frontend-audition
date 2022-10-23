import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


/* import axios from 'axios';
import '/src/assets/page.css';

import photoCard from './components/photoCard';

axios.get('https://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    const container = document.getElementById('container');
    response.data.slice(0, 20).forEach((photo) => {
      container.appendChild(photoCard(photo));
    });
  })
  .catch((error) => {
    alert(error);
  }); */
