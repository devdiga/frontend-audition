<template>
  <div class="photo-card teste">
    <img :src="photo.url" />
    <div class="title">
      {{ photo.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["photo"],
  created() {},
};
</script>

<style>
	@import "../assets/photo-card.css";
</style>