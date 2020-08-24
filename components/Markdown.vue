<template>
  <div class="markdown-render" v-html="renderedMarkdown">
  </div>
</template>

<style>
.markdown-render ul, .markdown-render ol {
  padding-left: 1rem;
}

.markdown-render em {
  font-style: normal;
  color: #777;
}

.markdown-render h4 {
  margin: 0.5rem 0;
}
</style>

<script>

import marked from "marked"

export default {
  props: ['markdown'],
  computed: {
    renderedMarkdown() {
      return marked(this.markdown)
    }
  }
}
</script>
