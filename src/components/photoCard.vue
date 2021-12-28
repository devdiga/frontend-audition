<template>
  <div :class="type == 'list' ? 'photo-card-list' : 'photo-card-grid'">
    <div class="image">
      <img :src="type == 'list' ? photo.thumbnailUrl : photo.url" />
    </div>
    <div class="title">
      <span v-html="type == 'list' ? 'Id : ' + photo.id + '<br> ' : ''"></span>
      <p>
        {{ photo.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photo", "type"],
};
</script>

<style >
@import "../assets/photo-card.css";
</style>