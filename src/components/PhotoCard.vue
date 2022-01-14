<template>
<div id="container" :class="view">
  <div class="photo-card" :class="{list: view.list}" v-for="photo in data">
    <img v-if="view.default" :class="view" :src="photo.url" :alt="photo.title">
    <img v-else :class="view" :src="photo.thumbnailUrl" :alt="photo.title">
    <div class="title" :class="{list: view.list}">{{photo.title}}</div>
  </div>
  <div id="loadMore">
    <button @click="$emit('loadMorePhotos')">carregar mais</button>
  </div>
</div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: [
    "data",
    "view"
    ],
};
</script>

<style >
@import "../assets/photo-card.css";
</style>