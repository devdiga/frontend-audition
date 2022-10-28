<template>
  <div id="title">
    <h1 class="title">
      Photo Library
    </h1>
   
    <div class="action-container">
      <div>
        <input id="search" type="text" placeholder="Busca" v-model="search"/>
      </div>
      <div>
        <button @click="clearFilter()" class="reset"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>  </button>
        <svg @click="cssStyle='grid'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="cssStyle != 'list' ? 'active' : '' ">
        <g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/></g></svg>

        <svg @click="cssStyle='list'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="cssStyle != 'grid' ? 'active' : ''">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
      </div>      
    </div>
  </div>
  
    <div id="container" :class="cssStyle=='list'?'container-list':'container-grid'" >
        
        <photoCard :type="cssStyle" :photo="photo" v-for="photo in filteredItems" :key="photo.id"/>

    </div>
</template>

<script>
import axios from 'axios';
import photoCard from './components/photoCard.vue';

export default {
  name: "App",
  components:{
    photoCard
  },
  data(){
    return{
      search: "",
      photos:[],
      cssStyle:'grid'
    }
  },
  computed: {
    filteredItems() {
      let valores = [];
      valores = this.photos.filter((photo) => {
        return (
          photo.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 
        );
      });
      return valores;
    },
  },
  mounted() {
  this.pegarfotos();
  },
  methods: {
    pegarfotos(){
      axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          this.photos = response.data.slice(0, 50);
        })        
        .catch((error) => {
          alert(error);
        })
    },

    clearFilter() {
      this.search = "";
    },
  },
}
</script>

<style>
@import '/src/assets/page.css';
</style>
