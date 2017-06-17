<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import Movies from './views/Movies.vue'
  import Home from './views/Home.vue'

  export default {
    name: 'app',
    components: {
      Movies,
      Home
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
