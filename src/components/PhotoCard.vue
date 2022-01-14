<template>
<div id="container">
  <div class="photo-card" v-for="photo in data" :key="photo.id">
    <img :src="photo.url" :alt="photo.title">
    <div class="title">{{photo.title}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: [
    "data"
    ],
};
</script>

<style >
@import "../assets/photo-card.css";
</style>