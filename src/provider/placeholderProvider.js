import axios from "axios";
import { items } from "../components/photoCard.js";
import { populateList } from "../functions/menu.js";

let limit = 12

async function getPost(page, isListView = false) {
  axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
    .then((response) => {
      items.push(...response.data);
      populateList(isListView)
    })
    .catch((error) => {
      alert(error);
    });
}

export { getPost, limit };

