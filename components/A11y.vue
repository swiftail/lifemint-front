<!-- Accessibility block -->

<template>
  <div class="a11y" aria-label="Версия для слабовидящих">
    <!-- Enables or disables high-contrast mode -->
    <div class="a11y__block">
      <button
        class="button-reset a11y__button"
        aria-label="Режим высокой контрастности"
        title="Режим высокой контрасности"
        @click="toggleEnableContrast()"
        :data-active="contrastMode"
      >
        <iconify-icon icon="a11y-contrast" data-size="lg" :inline="true"></iconify-icon>
      </button>
    </div>

    <div class="a11y__block">
      <!-- Sets font size to extra large -->
      <button
        class="button-reset a11y__button"
        aria-label="Очень большой шрифт"
        title="Очень большой шрифт"
        @click="setFontSize('xl')"
        :data-active="fontSize === 'xl'"
      >
        <iconify-icon icon="a11y-text" data-size="lg" :inline="true"></iconify-icon>
      </button>

      <!-- Sets font size to large -->
      <button
        class="button-reset a11y__button"
        aria-label="Большой шрифт"
        title="Большой шрифт"
        @click="setFontSize('lg')"
        :data-active="fontSize === 'lg'"
      >
        <iconify-icon icon="a11y-text" data-size="md" :inline="true"></iconify-icon>
      </button>

      <!-- Sets font size to default -->
      <button
        class="button-reset a11y__button"
        aria-label="Обычный шрифт"
        title="Обычный шрифт"
        @click="setFontSize('md')"
        :data-active="fontSize === 'md'"
      >
        <iconify-icon icon="a11y-text" data-size="sm" :inline="true"></iconify-icon>
      </button>
    </div>

    <div class="a11y__block">
      <!-- Toggles images on the page -->
      <button
        class="button-reset a11y__button"
        aria-label="Переключить отображение изображений"
        title="Переключить отображение изображений"
        @click="toggleDisableImages()"
        :data-inactive="disableImages"
      >
        <iconify-icon icon="a11y-image" data-size="lg" :inline="true"></iconify-icon>
      </button>
    </div>

    <div class="a11y__block">
      <!-- Resets all settings -->
      <button
        class="button-reset a11y__button"
        aria-label="Сбросить настройки"
        title="Сбросить настройки"
        @click="reset()"
      >
        <iconify-icon icon="a11y-refresh" data-size="lg" :inline="true"></iconify-icon>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fontSize: "md",
      disableImages: false,
      contrastMode: false,
    };
  },
  methods: {
    setFontSize(size) {
      this.fontSize = size;

      let mult = {
        xl: 1.5,
        lg: 1.2,
        md: 1,
      }[size];

      document.documentElement.style.setProperty("--root-font-mult", mult);

      if (size === "md") delete document.body.dataset.a11ySize;
      else document.body.dataset.a11ySize = size;
    },

    toggleDisableImages(value = undefined) {
      this.disableImages = value !== undefined ? value : !this.disableImages;
      document.body.classList.toggle("__a11y-no-images", this.disableImages);
    },

    toggleEnableContrast(value = undefined) {
      this.contrastMode = value !== undefined ? value : !this.contrastMode;
      document.body.classList.toggle("__a11y-contrast", this.contrastMode);
    },

    reset() {
      this.toggleDisableImages(false);
      this.toggleEnableContrast(false);
      this.setFontSize("md");
    },
  },
};
</script>

<style>

body.__a11y-no-images img {
  visibility: hidden;
}

/* Element style */
.a11y {
  display: flex;
  gap: 1rem;
}

.a11y__block {
  display: flex;
}

.a11y__button {
  color: var(--icon-color);
  /* Centering icon inside the button */
  line-height: 0;
  cursor: pointer;
  transition: all ease 0.2s;
}

.a11y__button:hover {
  color: #000;
}

.a11y__button[data-active="true"] {
  color: #95aed4;
}

.a11y__button[data-inactive="true"] {
  color: #df1a00;
}

body.__a11y-contrast {
  background: black !important;
}

body.__a11y-contrast * {
  transition: none !important;
}

body.__a11y-contrast * {
  background: black !important;
  color: white !important;
}

body.__a11y-contrast button:hover *,
body.__a11y-contrast a:hover * {
  background: white !important;
  color: black !important;
}

body.__a11y-contrast .a11y__button[data-active="true"] * {
  color: blue!important;
}

body.__a11y-contrast .a11y__button[data-inactive="true"] * {
  color: red!important;
}
</style>
