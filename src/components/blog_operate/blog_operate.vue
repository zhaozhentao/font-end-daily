<template>
  <div>
    <div class="panel-footer operate">
      <div class="pull-left hidden-xs">
        <div class="social-share-cs "></div>
      </div>

      <div class="pull-right actions">
        <a href="javascript:void(0);" class="admin popover-with-html" data-content="推荐主题，加精的帖子会出现在首页">
          <i class="fa fa-trophy"></i>
        </a>

        <a href="javascript:void(0);"
           class="admin popover-with-html" data-content="帖子置顶，会在列表页置顶">
          <i class="fa fa-thumb-tack"></i>
        </a>

        <a @click="deleteBlog()" href="javascript:void(0);" class="admin popover-with-html "
           data-content="沉贴，帖子将会被降低排序优先级">
          <i class="fa fa-anchor"></i>
        </a>

        <a data-method="delete" id="topic-delete-button" href="javascript:void(0);"
           data-url="" data-content="删除"
           class="admin  popover-with-html">
          <i class="fa fa-trash-o"></i>
        </a>

        <a @click="deleteBlog()" href="javascript:void(0);" data-content="删除" class="admin popover-with-html">
          <i class="fa fa-trash-o"></i>
        </a>

        <a data-content="" class="admin  popover-with-html no-pjax">
          <i class="fa fa-pencil-square-o"></i>
        </a>

        <a href="javascript:void(0);" class="admin popover-with-html" data-toggle="modal"
           data-target="#exampleModal" data-content="帖子附言，添加附言后所有参与讨论的用户都能收到消息提醒，包括点赞和评论的用户">
          <i class="fa fa-plus"></i>
        </a>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="exampleModalLabel">添加附言</h4>
          </div>

          <form method="POST" action="" accept-charset="UTF-8">
            <div class="modal-body">

              <div class="alert alert-warning">
                附加内容, 使用此功能的话, 会给所有参加过讨论的人发送提醒.
              </div>

              <div class="form-group">
                <textarea
                  class="form-control" style="min-height:20px"
                  placeholder="使用markdown" name="content" cols="50"
                  rows="10"></textarea>
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="submit" class="btn btn-primary">提交</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import swal from 'sweetalert'
  export default {
    mounted () {
      var $ = window.$
      $('[data-method]')
        .append(function () {
          return '\n' +
            "<form action='" + $(this).attr('data-url') + "' method='POST' style='display:none'>\n" +
            "   <input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" +
            "   <input type='hidden' name='_token' value='" + 123 + "'>\n" +
            '</form>\n'
        })
        .attr('style', 'cursor:pointer;')
        .click(function () {
          var that = $(this)
          if ($(this).attr('data-method') === 'delete') {
            swal({
              title: '',
              text: '你确定要删除此内容吗？',
              type: 'warning',
              showCancelButton: true,
              cancelButtonText: '取消',
              confirmButtonText: '删除'
            }, function () {
              that.find('form').submit()
            })
          }
          if ($(this).attr('data-btn') === 'transform-button') {
            swal({
              title: '',
              text: '确定要把此话题转换为专栏文章？',
              type: 'warning',
              showCancelButton: true,
              cancelButtonText: '取消',
              confirmButtonText: '转为文章'
            }, function () {
              that.find('form').submit()
            })
          }
          if ($(this).attr('data-method') === 'post') {
            $(this).find('form').submit()
          }
        })
    },
    methods: {
      deleteBlog () {
        this.$store.dispatch('deleteBlog', this.$route.params.id)
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
