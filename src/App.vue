<template>
 <div class="body">

  <div id="title">
    Photo Library {{typeFormat}}
    <div class="action-container">
      <input id="search" v-model="search" type="text" placeholder="Busca" />
      <button class="button search-btn" @click="getFotos"> 
        <i class="fas fa-search fa-3x"></i>
      </button>
      <svg
        @click="typeFormat='grid'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="typeFormat!='list'?'active':''"
      >
        <g fill-rule="evenodd">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"
          />
        </g>
      </svg>
      <svg  @click="typeFormat='list'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        :class="typeFormat!='list'?'':'active'"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
        />
      </svg>
    </div>
  </div>
    <div id="container" :class="typeFormat=='list'?'container-list':'container-grid'" v-if="mount">
        <photoCard :type="typeFormat" :photo="photo" v-for="photo in photos" :key="photo.id"/>
    </div>
 </div>
</template>

<script>
import photoCard from './components/photoCard.vue';
import axios from 'axios';
export default {
  name: "App",
  components:{
    photoCard
  },
  data : () =>({
    search:'',
    mount:false,
    photos:[],
    typeFormat:'grid'
  }),
  mounted() {
    this.getFotos();
  },
  methods: {
    getFotos() {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
          this.photos = response.data.filter(o=>o.title.includes(this.search)).slice(0, 20)
          this.mount =true
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style>
	@import '/src/assets/page.css';
  .search-btn{
    border-radius: 8px;
    padding: 10px 10px;
    margin-left: -15px;
    background-color: #d9d9d9; 
    border: none;
    cursor: pointer;
  }
  .search-btn:hover{
    background-color: #2f855e; 
  }
</style>