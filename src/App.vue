<template>
  <div id="app">
    <daily-nav></daily-nav>
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
  html::after {
    background-attachment: fixed;
    content: '';
    will-change: transform;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: fixed;
    background: url(./assets/andy.jpeg);
    background-size: cover;
  }

  html, body {
    height: 100%;
    font-size: 14px;
    color: #525252;
    font-family: NotoSansHans-Regular,AvenirNext-Regular,arial,Hiragino Sans GB,"Microsoft Yahei","Hiragino Sans GB","WenQuanYi Micro Hei",sans-serif;
  }

  html, body {
    background: transparent;
  }
</style>
