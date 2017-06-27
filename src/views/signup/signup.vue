<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">创建新用户</h3>
        </div>
        <div class="panel-body">
          <form method="POST" accept-charset="UTF-8" @submit.prevent="validateForm('form')" data-vv-scope="form">
            <div class="form-group">
              <label class="control-label" for="name">头像</label>
              <div class="form-group">
                <img :src="$route.query.image_url" width="100%"/>
              </div>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('form.name') }">
              <label class="control-label" for="name">用户名</label>
              <input class="form-control" v-validate="'required'" name="name" type="text" v-model="name">
              <span v-show="errors.has('form.name')" class="help-block">{{ errors.first('form.name') }}</span>
            </div>

            <div class="form-group">
              <label class="control-label" for="github_name">Github Name</label>
              <input class="form-control" readonly="readonly" name="github_name" type="text" v-model="github_name">
            </div>

            <div class="form-group" :class="{'has-error': errors.has('form.email') }">
              <label class="control-label" for="email">邮箱</label>
              <input class="form-control" v-validate="'required|email'" name="email" type="text" v-model="email">
              <span v-show="errors.has('form.email')" class="help-block">{{ errors.first('form.email') }}</span>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('form.password') }">
              <label class="control-label" for="password">密 码</label>
              <input class="form-control" v-validate="'required|min:6'" name="password" type="password"
                     v-model="password">
              <span v-show="errors.has('form.password')" class="help-block">{{ errors.first('form.password') }}</span>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('form.password_confirmation') }">
              <label class="control-label" for="password_confirmation">确认密码</label>
              <input class="form-control" v-validate="'confirmed:password|required'" name="password_confirmation"
                     type="password"
                     v-model="password_confirmation">
              <span v-show="errors.has('form.password_confirmation')"
                    class="help-block">{{ errors.first('form.password_confirmation') }}</span>
            </div>

            <input class="btn btn-lg btn-success btn-block" type="submit" value="确认">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    methods: {
      validateForm (scope) {
        this.$validator.validateAll(scope).then(result => {
          if (!result) {
            return
          }
          this.$store.dispatch('signup', this.$data)
            .then((data) => {
              document.cookie = 'token=' + data.data
              axios.defaults.headers.common['Authorization'] = 'Bearer' + data.data
              this.$store.dispatch('getUserInfo')
              this.$router.replace('/')
            })
        })
      }
    },
    mounted () {
      console.log(this.$store)
    },
    data () {
      return {
        name: this.$route.query.name,
        github_id: this.$route.query.github_id,
        github_name: this.$route.query.github_name,
        image_url: this.$route.query.image_url,
        email: this.$route.query.email,
        password: this.$route.query.password,
        password_confirmation: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
