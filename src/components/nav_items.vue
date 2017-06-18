<template>
  <ul>
    <li>
      <a href="">
        <i class="fa fa-user-circle text-md nav-menu-icon"></i> 个人中心
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa fa-edit text-md nav-menu-icon"></i> 日志
      </a>
    </li>
    <li>
      <a href=""
         data-lang-loginout="你确定要退出吗">
        <i class="fa fa-sign-out text-md nav-menu-icon"></i> 退出
      </a>
    </li>
  </ul>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropdown-menu > li > a {
    color: inherit;
    border-bottom: 1px solid #d8d8d8;
    line-height: 2.3;
  }

  .dropdown-menu {
    background-color: #fff;
    color: inherit;
    padding: 0px;
  }
</style>
