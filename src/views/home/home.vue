<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default"
           style="position: relative;overflow: hidden; box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);">
        <div class="panel-heading">
          <div class="home-nav-container">
            <a href="" class="home-nav">Blog</a>
            <a href="" class="home-nav">About Me</a>
          </div>
        </div>
        <div class="panel-body">
          <ul class="home-content-item-container" style="margin-bottom: 0px;">
            <li class="home-content-item" v-for="blog in blogs">
              <a href="" class="home-content-title">{{ blog.title }}</a>
              <small class="home-content-time">{{ blog.created_at | time }}</small>
            </li>
          </ul>
          <div style="float: right">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('blogs', {page: 0, perPage: 10}).then((data) => {
        this.$data.blogs = data
      })
    },
    data () {
      return {
        blogs: null
      }
    }
  }
</script>

<style scoped>
  .home-nav-container {
    text-align: center;
    height: 54px;
    padding-top: 20px;
  }

  .home-nav:hover {
    text-decoration: none;
  }

  .home-nav {
    padding: 10px;
    font-size: 17px;
  }

  a:hover, a:focus {
    color: #22ddde;
    text-decoration: underline;
  }

  a {
    color: #05a1a2;
  }

  @media only screen and (min-width: 1024px) {
    .home-content-item-container {
      padding-left: 40px;
      padding-right: 40px;
    }

    .home-content-item {
      margin-top: 15px;
    }

    .home-content-time {
      display: inline-block;
      float: right;
      margin-top: 6px;
    }
  }

  @media only screen and (max-device-width: 480px) and (min-device-width: 120px) {
    .home-content-item-container {
      padding-left: 0px;
    }

    .home-content-time {
      display: block;
      font-size: 12px;
    }

    .home-content-item {
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }

  .home-content-item {
    display: inline-block;
    width: 100%;
  }

  .home-content-title {
    font-size: 18px;
  }

  .home-content-time {
    color: #999;
    font-size: 14px;
  }
</style>
