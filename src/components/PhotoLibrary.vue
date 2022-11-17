<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="d-flex align-center bg-grey pa-2 mb-3">
        <h1 class="text-h3 font-weight-bold mx-2">Photo Library</h1>
        <v-spacer />
        <v-text-field
          bg-color="white rounded-pill mx-2"
          density="compact"
          hide-details="auto"
          placeholder="Busca"
          variant="solo"
        />
        <v-icon class="ma-2">
          mdi-view-grid-outline
        </v-icon>
        <v-icon class="ma-2">
          mdi-format-list-checkbox
        </v-icon>
      </div>
      <v-row>
        <v-col
          v-for="photo in photos"
          :key="photo.id"
        >
          <v-img
            class="bg-white mx-auto"
            :width="200"
            :src="photo.url"
          />
          {{ photo.title }}
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const photos = ref(null);

onMounted(() => {
  getPhotos();
})

function getPhotos() {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(({ data }) => {
      photos.value = data.slice(0, 20);
    })
    .catch((error) => {
      alert(error);
    });
}
</script>
