<template>
  <div :class="type == 'list' ? 'photo-card-list' : 'photo-card-grid'">
 	<div class="image">
    	<img :src="photo.url" />
	 </div>
    <div class="title">
      {{ photo.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["photo", "type"],
  created() {},
};
</script>

<style>
@import "../assets/photo-card.css";
</style>