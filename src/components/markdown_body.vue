<template>
  <div v-html="body" class="markdown_body"/>
</template>

<script>
  export default {
    props: ['body']
  }
</script>

<style>
  .markdown_body > p > img {
    max-width: 100%;
  }
</style>
