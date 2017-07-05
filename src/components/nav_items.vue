<template>
  <ul style="padding-top: 0px; padding-bottom: 0px;">
    <li class="menu-item">
      <a>
        <i class="fa fa-user-circle text-md nav-menu-icon"></i> 个人中心
      </a>
    </li>
    <li class="menu-item">
      <router-link :to="'/blog/create'">
        <i class="fa fa-edit text-md nav-menu-icon"></i> 日志
      </router-link>
    </li>
    <li class="menu-item">
      <a @click="logout()"
         data-lang-loginout="你确定要退出吗">
        <i class="fa fa-sign-out text-md nav-menu-icon"></i> 退出
      </a>
    </li>
  </ul>
</template>

<script>
  function delCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    document.cookie = name + '=' + ';expires=' + exp.toGMTString()
  }

  export default {
    methods: {
      logout: function () {
        delCookie('token')
        this.$store.state.login.user = null
        this.$store.state.login.user_id = null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropdown-menu > li > a {
    color: inherit;
    border-bottom: 1px solid #d8d8d8;
    line-height: 2.3;
  }

  @media only screen and (min-width: 768px) {
    .menu-item {
      margin-top: 0px;
    }
  }
</style>
