<template>
  <div class="home">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters([
      'even'
    ]),
    methods: mapActions([
      'add',
      'loadData'
    ]),
    data () {
      return {
        msg: 'welcome home'
      }
    },
    mounted () {
      this.$store.dispatch('loadData')
    },
    destroyed () {
      this.$store.state.api.time = 0
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
