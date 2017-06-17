<template>
  <div class="movie">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'movie',
    data () {
      return {
        msg: 'this is movie'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
