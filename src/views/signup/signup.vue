<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">创建新用户</h3>
        </div>
        <div class="panel-body">
          <form method="POST" accept-charset="UTF-8">
            <div class="form-group">
              <label class="control-label" for="name">头像</label>
              <div class="form-group">
                <img :src="$route.query.image_url" width="100%"/>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label" for="name">用户名</label>
              <input class="form-control" name="name" type="text" v-model="name">
              <!--{!! $errors->first('name', '<span class="help-block">:message</span>') !!}-->
            </div>

            <div class="form-group ">
              <label class="control-label" for="github_name">Github Name</label>
              <input class="form-control" readonly="readonly" name="github_name" type="text" v-model="github_name">
              <!--{!! $errors->first('github_name', '<span class="help-block">:message</span>') !!}-->
            </div>

            <div class="form-group">
              <label class="control-label" for="email">邮箱</label>
              <input class="form-control" name="email" type="text" v-model="email">
              <!--{!! $errors->first('email', '<span class="help-block">:message</span>') !!}-->
            </div>

            <div class="form-group">
              <label class="control-label" for="password">密 码</label>
              <input class="form-control" name="password" type="password" v-model="password">
              <!--{!! $errors->first('password', '<span class="help-block">:message</span>') !!}-->
            </div>

            <div class="form-group">
              <label class="control-label" for="password_confirmation">确认密码</label>
              <input class="form-control" name="password_confirmation" type="password" v-model="password_confirmation">
              <!--{!! $errors->first('password_confirmation', '<span class="help-block">:message</span>') !!}-->
            </div>

            <input class="btn btn-lg btn-success btn-block" type="submit" value="确认">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(this.$store)
    },
    data () {
      return {
        name: this.$route.query.name,
        github_name: this.$route.query.github_name,
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
