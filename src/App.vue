<template>
  <div id="app" style="overflow-x: hidden">
    <nav-bar style="margin-bottom: 0px;"></nav-bar>
    <md-progress v-show="loading > 0" class="md-warn" md-indeterminate style="float: left"/>
    <div class="container main-container" style="margin-top: 20px;">
      <router-view></router-view>
    </div>
    <md-snackbar :md-position="'bottom center'" ref="snackbar" :md-duration="2500">
      <span>{{ toastMessage }}</span>
    </md-snackbar>
  </div>
</template>

<script>
  import Login from './views/login/login.vue'
  import Home from './views/home/home.vue'
  import Signup from './views/signup/signup.vue'
  import NavBar from './components/navbar'
  import BlogCreate from './views/blog/blog_create_edit.vue'
  import Blog from './views/blog/blog.vue'
  import bus from './bus/eventbus'
  import loadingBus from './bus/loadingbus'

  export default {
    name: 'app',
    components: {
      NavBar,
      Login,
      Home,
      Signup,
      BlogCreate,
      Blog
    },
    mounted () {
      var that = this
      bus.$on('toast', text => {
        that.$data.toastMessage = text
        this.$refs.snackbar.open()
      })
      loadingBus.$on('loading', () => {
        that.$data.loading++
        console.log(that.$data.loading)
      })
      loadingBus.$on('finish_loading', () => {
        that.$data.loading--
        console.log(that.$data.loading)
      })
    },
    data () {
      return {
        toastMessage: null,
        loading: 0
      }
    }
  }
</script>

<style>
  @import "../node_modules/vue-material/dist/vue-material.css";

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
    background: url(http://osbzc9j9p.bkt.clouddn.com/andy.jpeg);
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

  .panel .panel-heading {
    border-bottom: 1px solid #eeeeee;
    background-color: #fff;
  }

  .panel .panel-heading h3 {
    color: #999;
    font-size: 14px;
  }

  a {
    text-decoration: none !important;
  }
</style>
