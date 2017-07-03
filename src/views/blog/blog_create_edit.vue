<template>
  <div class="col-md-8 col-md-offset-2">
    <form @submit.prevent="commit()" accept-charset="UTF-8">
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
  import store from '../../store/store'

  var blog
  export default {
    beforeRouteEnter (to, from, next) {
      if (to.name === 'blog_edit') {
        store.dispatch('getBlog', to.params.id).then((data) => {
          blog = data
          next(vm => {
            vm.id = data.id
            vm.body = data.body_original
            vm.body_original = data.body_original
            vm.title = data.title
          })
        })
      } else {
        next()
      }
    },
    mounted () {
      if (this.$route.name === 'blog_edit') {
        this.$data.id = blog.id
        this.$data.body = blog.body
        this.$data.body_original = blog.body_original
        this.$data.title = blog.title
        this.$refs.body.value = blog.body_original
        this.$store.dispatch('initEditor', this.$data)
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
      },
      update () {
        this.$data.body = this.$refs.body.value
        this.$store.dispatch('updateBlog', this.$data).then((data) => {
          this.$router.replace({name: 'blog_detail', params: {id: data.id}})
        })
      },
      commit () {
        if (this.$route.name === 'blog_edit') {
          this.update()
        } else {
          this.create()
        }
      }
    },
    data: function () {
      return {
        id: null,
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
