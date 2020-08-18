<template>
  <div class="layout">
    <div class="layout__content-wrapper">
      <Header />
      <main>
        <Nuxt />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style>
html, body, #__nuxt, #__layout, .layout {
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
