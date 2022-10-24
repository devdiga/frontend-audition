<template>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Image Library</title>
    </head>
    <body>
      <div id="app">
        <PageHeader v-model:searchFilter.sync="searchFilter" />
        <PhotoCard
          :data="photos"
          @wheel.passive="infiniteScroll"
          @scroll="handleScroll"
        />
        <DataLoading v-if="loading" />
      </div>
    </body>
  </html>
</template>

<script>
import axios from "axios";
import DataLoading from "./components/DataLoading.vue";
import PhotoCard from "./components/PhotoCard.vue";
import PageHeader from "./components/PageHeader.vue";

export default {
  name: "App",
  components: {
    PhotoCard,
    DataLoading,
    PageHeader,
  },
  data() {
    return {
      photos: null,
      photosForFetch: 20,
      photosTotal: 0,
      searchFilter: "",
      pages: 1,
      waitScroll: false,
      loading: true,
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
                .startsWith(this.searchFilter.toLowerCase())
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
    searchFilter() {
      this.fetchData();
    },
  },
};
</script>

<style>
@import "./assets/page.css";
</style>
