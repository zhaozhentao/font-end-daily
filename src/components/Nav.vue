<template>
  <nav class="navbar navbar-default">
    <div class="container nav-container">
      <div class="container-fluid">
        <div class="navbar-header mobile-navbar-header">
          <a class="navbar-brand" style="color: #f36c60; font-weight: bold; font-size: 22px;">
            Daily
          </a>
        </div>

        <div class="navbar-right">
          <ul class="nav navbar-nav github-login nav-right-item">
            <a class="btn btn-primary login-btn">
              <i class="fa fa-user"></i>
              登录
            </a>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- top style is mobile -->

<style scoped>
  @media only screen and (max-device-width: 480px) and (min-device-width: 120px) {
    .mobile-navbar-header {
      float: left;
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
