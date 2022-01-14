<template>
<div id="title">
  Photo Library
  <div class="action-container">
    <input
      id="search"
      type="text"
      placeholder="Busca"
      v-model='search'
    />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="toggleViewDefault" :class="{active: view.default}"><g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="toggleViewList" :class="{active: view.list}"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
  </div>
</div>
<!-- conditional rendering -->
<!-- search items container -->
<PhotoCard @loadMorePhotos='count += 20'
    :view='view'
    :data='dataFiltered' v-if='!loading && dataFiltered && dataFiltered.length' />
<!-- all items container -->
<PhotoCard @loadMorePhotos='count += 20'
    :view='view'
    :data='data' v-if='!loading && data && data.length && !dataFiltered' />
<!-- loading message while fetching data -->
<p id="message" v-if="loading">
carregando…
</p>
<!-- error message -->
<p id="message" v-if="error"></p>
</template>

<script>
import { ref, onMounted, watch, reactive } from 'vue';
import PhotoCard from './components/PhotoCard.vue'
  export default {
  name: 'App',
  props: { 
  },
  components: { 
    PhotoCard
  },

  setup () {
    const data = ref(null);
    const dataFiltered = ref(null);
    const error = ref(null);
    const count = ref(20);
    const search = ref(null);
    const loading = ref(true);
    const view = reactive({
            default: true,
            list: false
    });
    
    function toggleViewDefault () {
      if (view.list && !view.default) {
        view.list = !view.list;
        view.default = !view.default;
      }
    };

    function toggleViewList () {
      if (view.default && !view.list) {
        view.list = !view.list;
        view.default = !view.default;
      }
    };

    function fetchData() {        
        return fetch('http://jsonplaceholder.typicode.com/photos', {
            method: 'get',
            headers: {
            'content-type': 'application/json'
            }
        })
            .then(res => {
            // a non-200 response code
            if (!res.ok) {
                // create error instance with http status text
                const error = new Error(res.statusText);
                error.json = res.json();
                throw error;
            }
            return res.json();
            })
            .then(json => {
            // set the response data
            data.value = json.slice(0,count.value);
            })
            .catch(err => {
            error.value = err;
            // in case a custom json error response was provided
            if (err.json) {
                return err.json.then(json => {
                // set the json response message
                error.value.message = json.message;
                });
            }
            })
            .then(() => {
            loading.value = false;
            });
        }

    onMounted(() => {
      fetchData()
    });

    watch(count, () => {
      fetchData()
    });

    watch(search, (search) => {     
      dataFiltered.value = data.value.filter(photo => {
      if (
        photo.title
          .toLowerCase()
          .indexOf(search.toLowerCase()) != "-1" ||
        photo.url
        .toLowerCase()
        .indexOf(search.toLowerCase()) != "-1"
        ) {
          return photo;
          }
      })
    });

    return {
        data,
        dataFiltered,
        error,
        count,
        search,
        loading,
        view,
        toggleViewDefault,
        toggleViewList
      };  
  }  
}
</script>

<style>
  @import './assets/page.css';
</style>