<template>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Image Library</title>
    </head>
    <body>
      <div id="app">
        <PageHeader />
        <PhotoCard />
      </div>
    </body>
  </html>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import PhotoCard from "./components/PhotoCard.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PhotoCard,
  },
};
</script>

<style>
@import "./assets/page.css";
</style>
