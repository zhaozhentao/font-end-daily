<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Movies from './views/Movies.vue'
  import Home from './views/home.vue'
  import DailyNav from './components/navbar'

  export default {
    name: 'app',
    components: {
      DailyNav,
      Movies,
      Home
    }
  }
</script>

<style>

</style>
