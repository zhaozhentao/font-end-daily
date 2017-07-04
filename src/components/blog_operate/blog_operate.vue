<template>
  <div>
    <div class="panel-footer operate">
      <div class="pull-left hidden-xs">
        <div class="social-share-cs "></div>
      </div>

      <div class="pull-right actions">
        <a @click="deleteBlog()" href="javascript:void(0);" class="admin">
          <i class="fa fa-trash-o"></i>
        </a>

        <router-link
          :to="{ name: 'blog_edit', params: { id: $route.params.id }}" class="admin">
          <i class="fa fa-pencil-square-o"></i>
        </router-link>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import swal from 'sweetalert'
  import bus from '../../bus/eventbus'

  export default {
    mounted () {},
    methods: {
      deleteBlog () {
        var that = this
        swal({
          title: '',
          text: '你确定要删除此内容吗？',
          type: 'warning',
          showCancelButton: true,
          cancelButtonText: '取消',
          confirmButtonText: '删除'
        }, function () {
          that.$store.dispatch('deleteBlog', that.$route.params.id).then((data) => {
            that.$router.replace('/')
            bus.$emit('toast', '删除成功')
          })
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../../node_modules/sweetalert/dist/sweetalert.css";

  .topic .panel-footer {
    background-color: #fff;
    border: 1px solid #ddd;
    border-top: none;
  }

  .topic .panel-footer {
    border: none;
  }

  .topic .panel-footer {
    padding-top: 0px;
  }

  .meta a, .operate a {
    padding: 1px 2px;
    color: #B9BDC0;
    text-decoration: none;
  }

  .operate a.admin {
    display: inline-block;
    margin-left: 11px;
  }

  .btn-primary {
    color: #fff;
    background-color: #00b5ad;
    border-color: #00b5ad;
  }
</style>
