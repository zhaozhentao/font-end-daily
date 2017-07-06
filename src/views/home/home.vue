<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default"
           style="position: relative;overflow: hidden; box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);">
        <md-tabs>
          <md-tab id="blogs" md-label="日志">
            <ul class="home-content-item-container" style="margin-bottom: 0px;">
              <li class="home-content-item" v-for="blog in $store.state.home.blogs">
                <router-link :to="{ name: 'blog_detail', params: { id: blog.id }}" class="home-content-title">
                  {{ blog.title }}
                </router-link>
                <small class="home-content-time">{{ blog.created_at | time }}</small>
              </li>
            </ul>
          </md-tab>

          <md-tab id="tobuy" md-label="To Buy">
            <div style="text-align: center">
              <md-card class="to-buy-cards">
                <md-card-media>
                  <img
                    src="https://img.alicdn.com/bao/uploaded/i3/6000000001447/TB2Uwdbkw0kpuFjSspdXXX4YXXa_!!0-fleamarket.jpg_728x728.jpg"
                    alt="People">
                </md-card-media>

                <md-card-header style="vertical-align: top;">
                  <div class="md-title">Filco minila air</div>
                  <div class="md-subhead">来一支</div>
                </md-card-header>
              </md-card>

              <md-card class="to-buy-cards">
                <md-card-media>
                  <img
                    src="http://am.zdmimg.com/201602/05/56b479f2526a2.jpg_e600.jpg"
                    alt="People">
                </md-card-media>

                <md-card-header style="vertical-align: top;">
                  <div class="md-title">Filco minila air</div>
                  <div class="md-subhead">来一支</div>
                </md-card-header>
              </md-card>
            </div>
          </md-tab>
        </md-tabs>
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

    .to-buy-cards {
      width: 46%;
      vertical-align: top;
      display: inline-block;
      margin-left: 16px;
    }
  }

  .to-buy-cards {
    margin-bottom: 16px;
    text-align: left;
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
    font-size: 17px;
    color: rgb(243, 108, 96) !important;
  }

  .home-content-time {
    color: #999;
    font-size: 14px;
  }
</style>
