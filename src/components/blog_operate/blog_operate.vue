<template>
  <div>
    <div class="panel-footer operate">
      <div class="pull-left hidden-xs">
        <div class="social-share-cs "></div>
      </div>

      <div class="pull-right actions">
        <a data-ajax="post" id="topic-recomend-button" href="javascript:void(0);"
           data-url=""
           class="admin popover-with-html"
           data-content="推荐主题，加精的帖子会出现在首页">
          <i class="fa fa-trophy"></i>
        </a>

        <a data-ajax="post" id="topic-pin-button" href="javascript:void(0);"
           data-url=""
           class="admin popover-with-html" data-content="帖子置顶，会在列表页置顶">
          <i class="fa fa-thumb-tack"></i>
        </a>

        <a data-ajax="post" id="topic-sink-button" href="javascript:void(0);"
           data-url=""
           class="admin popover-with-html " data-content="沉贴，帖子将会被降低排序优先级">
          <i class="fa fa-anchor"></i>
        </a>

        <a data-method="delete" id="topic-delete-button" href="javascript:void(0);"
           data-url="" data-content=""
           class="admin  popover-with-html">
          <i class="fa fa-trash-o"></i>
        </a>

        <a id="topic-edit-button"
           href=""
           data-content="" class="admin  popover-with-html no-pjax">
          <i class="fa fa-pencil-square-o"></i>
        </a>

        <a id="topic-append-button" href="javascript:void(0);" class="admin  popover-with-html" data-toggle="modal"
           data-target="#exampleModal" data-content="帖子附言，添加附言后所有参与讨论的用户都能收到消息提醒，包括点赞和评论的用户">
          <i class="fa fa-plus"></i>
        </a>
        <a data-method="patch" data-btn="transform-button" href="javascript:void(0);"
           data-url="" class="admin  popover-with-html"
           data-content="转换话题为专栏文章">
          <i class="fa fa-rocket" aria-hidden="true"></i>
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
            <h4 class="modal-title" id="exampleModalLabel"></h4>
          </div>

          <form method="POST" action="" accept-charset="UTF-8">
            <div class="modal-body">

              <div class="alert alert-warning">
              </div>

              <div class="form-group">
                <textarea class="form-control" style="min-height:20px" placeholder="" name="content" cols="50"
                          rows="10"></textarea>
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal"></button>
              <button type="submit" class="btn btn-primary"></button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
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
</style>
