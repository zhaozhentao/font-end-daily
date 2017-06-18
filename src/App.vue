<template>
  <div id="app" style="overflow-x: hidden">
    <nav-bar></nav-bar>
    <div class="container main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Login from './views/login/login.vue'
  import Home from './views/home/home.vue'
  import NavBar from './components/navbar'

  export default {
    name: 'app',
    components: {
      NavBar,
      Login,
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
    font-family: NotoSansHans-Regular, AvenirNext-Regular, arial, Hiragino Sans GB, "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
  }

  html, body {
    background: transparent;
  }

  /* 手机页面 */
  @media (max-width: 767px) {
    .container.main-container {
      margin-top: 15px;
    }
  }

  @media only screen and (max-device-width: 480px) and (min-device-width: 120px) {
    .container {
      padding: 0 7px;
    }
  }
</style>
