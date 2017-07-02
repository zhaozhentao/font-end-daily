<template>
  <div class="col-md-8 col-md-offset-2 topics-show main-col">
    <div class="topic panel panel-default">
      <div class="infos panel-heading">
        <h1 class="panel-title blog-title">{{ title }}</h1>
      </div>

      <div class="content-body entry-content panel-body">
        <div class="markdown-body" id="emojify">
          <markdown-body :body="body"></markdown-body>

          <div class="signature">
            <a class="popover-with-html" data-content="作者署名" target="_blank"
               style="color: #ccc;" href="">
              <i class="fa fa-paw" aria-hidden="true"></i>
              <span style="display: inline-block; margin-left: 8px;">
                签名
              </span>
            </a>
          </div>

          <div data-lang-excellent="lkjsdf" data-lang-wiki="lkjsdf" class="ribbon-container">
            <div v-if="is_excellent == 'yes'" class="ribbon">
              <div class="ribbon-excellent">
                <i class="fa fa-trophy"></i> 精华
              </div>
            </div>

            <div v-if="order == -1" class="ribbon">
              <div class="ribbon-anchored">
                <i class="fa fa-anchor"></i> 此贴已被下沉
              </div>
            </div>
          </div>

          <div class="appends-container" data-lang-append="">
            <div class="appends">
              <span class="meta">
                <abbr title="" class="timeago">
                </abbr>
              </span>
              <div class="sep5"></div>
              <div class="markdown-reply append-content">
              </div>
            </div>
          </div>

          <blog-operate></blog-operate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import blogOperate from '../../components/blog_operate/blog_operate.vue'
  import markdownBody from '../../components/markdown_body.vue'
  import store from '../../store/store'

  export default {
    components: {
      markdownBody,
      blogOperate
    },
    beforeRouteEnter (to, from, next) {
      store.dispatch('loading')
      store.dispatch('getBlog', to.params.id).then((data) => {
        next(vm => {
          vm.title = data.title
          vm.body = data.body
          vm.is_excellent = data.is_excellent
          vm.order = data.order
          store.dispatch('finish')
        })
      })
    },
    mounted () {
      window.$('.popover-with-html').popover({
        html: true,
        trigger: 'hover',
        container: 'body',
        placement: 'auto top'
      })
    },
    data () {
      return {
        title: null,
        body: null,
        is_excellent: null,
        order: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media (max-width: 767px) {
    .main-col {
      padding-right: 0px;
      padding-left: 0px;
    }
  }

  .blog-title {
    font-size: 25px;
    color: #333;
    text-align: left;
    line-height: 135%;
    font-weight: normal;
  }
</style>

<style lang="scss">
  .popover {
    color: #fff;
    background: #1b1c1d;
    /*min-width: 320px;*/
  }

  .popover-title {
    display: none;
  }

  .popover-content {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }

  .popover {
    color: #fff;
    background: #1b1c1d;
  }

  .popover.fade > .arrow {
    color: #1b1c1d;
  }

  .popover.right > .arrow:after, .popover.right > .arrow {
    border-right-color: #1b1c1d;
  }

  .popover.top > .arrow:after, .popover.top > .arrow {
    border-top-color: #1b1c1d;
  }

  .popover.bottom > .arrow:after, .popover.bottom > .arrow {
    border-bottom-color: #1b1c1d;
  }

  .popover.left > .arrow:after, .popover.left > .arrow {
    border-left-color: #1b1c1d;
  }
</style>
