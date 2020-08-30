<template>
  <section
    :class="['page-section', this.gray != undefined && 'page-section_gray', this.white != undefined && 'page-section_white']"
    :id="id"
  >
    <div class="page-section__header" v-if="header || text">
      <PageSectionHeader :header="header" :text="text" />
    </div>
    <div class="page-section__content">
      <slot />
    </div>
  </section>
</template>

<style>
.page-section {
  padding: 3rem var(--content-gap);
}

.page-section_white {
  background: white;
}

.page-section_gray {
  background: #fafafa;
}

.page-section__header {
  margin-bottom: 3rem;
}
</style>

<script>
export default {
  props: ["header", "text", "gray", "white", "id"],
};
</script>
