<template>
  <div id="title">
    Photo Library
    <div class="action-container">
      <input id="search" type="search" placeholder="Busca" v-model="text" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="{ active: gridPattern }"
        @click="changePattern(gridPattern)"
      >
        <g fill-rule="evenodd">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="{ active: listPattern }"
        @click="changePattern(listPattern)"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
        />
      </svg>
    </div>

    <div style="display: none; visibility: hidden"></div>
  </div>
</template>

<script>
import { searchText, photocardDisplay } from "./PageHeader.js";

export default {
  name: "PageHeader",
  data() {
    return {
      displayPattern: true,
      gridPattern: true,
      listPattern: false,
      searchText,
      photocardDisplay,
      text: null,
    };
  },
  methods: {
    changePattern(value) {
      if (!value) {
        this.gridPattern = !this.gridPattern;
        this.listPattern = !this.listPattern;
        photocardDisplay.value = this.gridPattern;
      }
    },
  },
  watch: {
    text() {
      searchText.value = this.text;
    },
  },
};
</script>

<style>
</style>