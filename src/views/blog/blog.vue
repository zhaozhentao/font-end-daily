<template>
  <div class="col-md-8 col-md-offset-2">
    <form action="" accept-charset="UTF-8" id="topic_create_form" method="POST">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="写一篇日志" name="title" required="required" value="">
      </div>

      <div class="form-group">
        <textarea
          required="require" class="form-control" rows="20" style="overflow:hidden" id="reply_content"
          placeholder="支持markdown" name="body" cols="50">
        </textarea>
      </div>

      <div class="form-group status-post-submit">
        <input class="btn btn-primary" id="topic-submit" type="submit" value="发布咯">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('initEditor')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../../public/assets/css/editor.css";

  .btn-primary:hover {
    color: #fff;
    background-color: #00c4bc;
    border-color: #00c4bc;
  }

  .btn-primary {
    color: #fff;
    background-color: #00b5ad;
    border-color: #00b5ad;
  }
</style>
