<template>
  <!-- <PageHeader v-show="show" @porra="onPorra" /> -->
  <div id="container" @wheel.passive="infiniteScroll" @scroll="handleScroll">
    <div class="photo-card" v-for="photo in photos" :key="photo.id">
      <img :src="photo.url" :alt="photo.title" />
      <div class="title">{{ photo.title }}</div>
    </div>
  </div>
  <DataLoading v-if="loading" />
</template>
  
  <script>
import axios from "axios";
import DataLoading from "./DataLoading.vue";
import { textoAtualizado } from "./PageHeader.js";

export default {
  name: "PhotoCard",
  components: {
    DataLoading,
  },
  data() {
    return {
      photos: null,
      photosForFetch: 20,
      photosTotal: 0,
      pages: 1,
      waitScroll: false,
      loading: true,
      textoAtualizado,
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((r) => {
          const photo = r.data.filter((item) => {
            if (
              item.title
                .toLowerCase()
                .startsWith(this.textoAtualizado.toLowerCase())
            ) {
              return item;
            }
          });
          this.photos = photo;
          this.photosTotal = photo.length;
          this.photos = photo.slice(0, this.photosToView);
          this.loading = false;
        })
        .catch((error) => {
          alert(error);
        });
    },

    infiniteScroll() {
      console.log(this.textoAtualizado);
      if (this.photosToView < this.photosTotal) {
        const scrolling =
          document.body.scrollHeight -
          window.scrollY -
          Math.max(document.body.offsetHeight, window.innerHeight) * 1.01;
        if (scrolling < 0 && !this.waitScroll) {
          this.loading = true;
          this.pages++;
          this.waitScroll = true;
          setTimeout(() => this.fetchData(), 500);
          setTimeout(() => {
            this.waitScroll = false;
          }, 500);
        }
      }
    },
    handleScroll() {
      this.infiniteScroll();
    },
  },
  computed: {
    photosToView() {
      return this.photosForFetch * this.pages;
    },
  },
  created() {
    this.fetchData();
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    textoAtualizado() {
      this.fetchData();
    },
  },
};
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
@import "../assets/photo-card.css";
</style>