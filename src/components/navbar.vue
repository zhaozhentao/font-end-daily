<template>
  <nav class="navbar navbar-default">
    <div class="container nav-container">
      <div class="container-fluid">
        <div :class="{'mobile-navbar-header' : !$store.state.login.user}" class="navbar-header">
          <router-link :to="'/'" class="navbar-brand" style="color: #f36c60; font-weight: bold; font-size: 22px;">
            Daily
          </router-link>

          <button
            v-if="$store.state.login.user" type="button" class="navbar-toggle collapsed" data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div v-if="$store.state.login.user" class="collapse navbar-collapse nav-user-menu nav-mobile-menu"
             id="bs-example-navbar-collapse-1">
          <nav-items class="nav navbar-nav"></nav-items>
        </div>

        <div class="navbar-right" :class="{ 'nav-user-menu-desktop' : $store.state.login.user }">
          <ul class="nav navbar-nav github-login nav-right-item">
            <template v-if="$store.state.login.user">
              <li>
                <a href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                   id="dLabel">
                  <img :src="$store.state.login.user.image_url" class="avatar-topnav">
                  {{ $store.state.login.user.name  }}
                  <span class="caret"></span>
                </a>
                <nav-items class="dropdown-menu" aria-labelledby="dropdownMenu1"></nav-items>
              </li>
            </template>
            <template v-else>
              <router-link :to="'/auth/login'" class="btn btn-primary login-btn">
                <i class="fa fa-user"></i>
                登录
              </router-link>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import NavItems from './nav_items.vue'

  export default {
    components: {
      NavItems
    },
    mounted () {
      this.$store.dispatch('getUserInfo')
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 手机版 */
  @media only screen and (max-device-width: 480px) and (min-device-width: 120px) {
    .mobile-navbar-header {
      float: left;
    }

    .nav-user-menu-desktop {
      display: none !important;
    }

    .container.nav-container {
      padding: 0;
    }
  }

  .avatar-topnav {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-top: -5px;
    border: 1px solid white;
    border-radius: 50%;
  }

  /* 桌面版 */
  @media only screen and (min-width: 768px) {
    .nav-user-menu.nav-mobile-menu {
      display: none !important;
    }
  }

  .navbar-default {
    min-height: 45px;
    background-color: #fff;
    border: none;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .login-btn {
    margin-top: 8px;
    border-radius: 2px;
  }

  .btn-primary {
    color: #fff;
    background-color: #00b5ad;
    border-color: #00b5ad;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #00c4bc;
    border-color: #00c4bc;
  }

  .nav-right-item {
    float: right;
    margin: 0px;
  }
</style>
