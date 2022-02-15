<template>
  <div class="col-md-8 col-md-offset-2">
    <form @submit.prevent="commit($event)" accept-charset="UTF-8">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="创建一个心愿单" name="title" required="required" v-model="title">
      </div>

      <input id="lefile" type="file" @change="upload_file" style="display:none">
      <div class="input-append">
        <input id="photoCover" class="input-large" type="text" style="height:30px;">
        <a class="btn btn-primary" onclick="$('input[id=lefile]').click();">Browse</a>
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

      <div style="text-align: center;">
        <md-card class="to-buy-cards" style="width: 40%; ">
          <md-card-media>
            <img :src="image" alt="People">
          </md-card-media>

          <md-card-header style="vertical-align: top;">
            <div class="md-title">Filco minila air</div>
            <div class="md-subhead">来一支</div>
          </md-card-header>
        </md-card>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  var blog
  export default {
    beforeRouteEnter (to, from, next) {
      if (to.name === 'blog_edit') {
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
      create (data) {
        var formData = new FormData()
        console.log(data)
        formData.append('profile_pic', data.exampleInputFile[0])
      },
      update () {
        this.$data.body = this.$refs.body.value
        this.$store.dispatch('updateBlog', this.$data).then((data) => {
          this.$router.replace({name: 'blog_detail', params: {id: data.id}})
        })
      },
      commit (data) {
        if (this.$route.name === 'blog_edit') {
          this.update()
        } else {
          this.create(data)
        }
      },
      upload_file (e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        var formData = new FormData()
        formData.append('file', files[0])
        const config = {
          headers: {'content-type': 'multipart/form-data'}
        }
        const url = '/api/upload_image'
        axios.post(url, formData, config)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        this.createImage(files[0])
      },
      createImage (file) {
        var reader = new FileReader()
        var vm = this

        reader.onload = (e) => {
          vm.image = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    data: function () {
      return {
        image: null,
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
