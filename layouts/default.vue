<template>
  <div class="layout">
    <div class="layout__content-wrapper">
      <LayoutHeader />
      <main>
        <Nuxt />
      </main>
    </div>
    <LayoutFooter />

    <AppointmentModal />

    <client-only>
      <ScrollToTopButton />
    </client-only>
  </div>
</template>

<script>
import checkAnchor from "~/assets/js/anchor";

export default {
  mounted() {
    this.$store.state.delayedErrors.forEach(window.displayError);
  }
};
</script>

<style>
html,
body,
#__nuxt,
#__layout,
.layout {
  height: 100%;
}

.layout {
  display: flex;
  flex-direction: column;
}
.layout__content-wrapper {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>
