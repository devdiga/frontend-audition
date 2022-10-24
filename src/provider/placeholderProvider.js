import axios from "axios";
import { addHTML, items } from "../components/photoCard.js";

let limit = 12


async function getPost(page) {
  axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
    .then((response) => {
      items.push(...response.data);
      items.forEach((photo) => addHTML(photo));
    })
    .catch((error) => {
      alert(error);
    });
}

export { getPost, limit };

