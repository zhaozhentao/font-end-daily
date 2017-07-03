<template>
  <div class="col-md-8 col-md-offset-2">
    <form @submit.prevent="create()" accept-charset="UTF-8">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="写一篇日志" name="title" required="required" v-model="title">
      </div>

      <div class="form-group">
        <textarea
          required="required" class="form-control" rows="20" style="overflow:hidden"
          placeholder="支持markdown" name="body" cols="50" ref="body">
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
      if (this.$route.name === 'blog_edit') {
        this.$store.dispatch('getBlog', this.$route.params.id).then((data) => {
          this.$data.body = data.body_original
          this.$refs.body.value = data.body_original
          this.$data.title = data.title
          this.$store.dispatch('initEditor', data)
        })
      } else {
        this.$store.dispatch('initEditor')
      }
    },
    methods: {
      create () {
        this.$data.body = this.$refs.body.value
        this.$store.dispatch('createBlog', this.$data).then((data) => {
          this.$router.replace({name: 'blog_detail', params: {id: data.id}})
        })
      }
    },
    data: function () {
      return {
        body: null,
        body_original: null,
        title: null
      }
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
