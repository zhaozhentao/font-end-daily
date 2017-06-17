<template>
  <div class="home">
    <router-link :to="'/'">Movie</router-link>
    <h1>{{ msg }}</h1>
    Clicked: {{ $store.state.api.time }} times, count is {{ even }}.
    <button @click="add">+</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: mapGetters([
      'even'
    ]),
    methods: mapActions([
      'add'
    ]),
    data () {
      return {
        msg: 'welcome home'
      }
    },
    mounted () {
      console.log('mounted')
    },
    destroyed () {
      this.$store.state.api.time = 0
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
