<template>
  <div id="app">
    <daily-nav></daily-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Movies from './views/Movies.vue'
  import Home from './views/Home.vue'
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
