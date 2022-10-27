<template>
  <div class="loading">
    <h2>CARREGANDO</h2>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
  
  <script>
export default {
  name: "DataLoading",
  mounted() {
    window.scrollTo(0, document.body.scrollHeight);
  },
};
</script>
  
<style>
.loading {
  text-align: center;
  padding: 5%;
}
h2 {
  color: #808080;
  margin: 0;
  font: 1.5rem verdana;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
}
.loading span {
  display: inline-block;
  vertical-align: middle;
  width: 1.4rem;
  height: 1.4rem;
  margin: 0.2rem;
  background: #d9d9d9;
  border-radius: 50%;
  animation: loading 1s infinite alternate;
}
.loading span:nth-of-type(2) {
  background: #a2bbb0;
  animation-delay: 0.2s;
}
.loading span:nth-of-type(3) {
  background: #8cbba7;
  animation-delay: 0.4s;
}
.loading span:nth-of-type(4) {
  background: #77bb9d;
  animation-delay: 0.6s;
}
.loading span:nth-of-type(5) {
  background: #62bb94;
  animation-delay: 0.8s;
}
.loading span:nth-of-type(6) {
  background: #42b983;
  animation-delay: 1s;
}
.loading span:nth-of-type(7) {
  background: #1baf6c;
  animation-delay: 1.2s;
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>