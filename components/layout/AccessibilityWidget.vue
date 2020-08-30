<template>
  <div class="a11y" aria-label="Версия для слабовидящих">
    <!-- Enables or disables high-contrast mode -->
    <div class="a11y__block">
      <button
        class="button-reset a11y__button icon-color"
        aria-label="Режим высокой контрастности"
        title="Режим высокой контрасности"
        @click="toggleEnableContrast()"
        :data-active="contrastMode"
      >
        <iconify-icon
          icon="a11y-contrast"
          data-size="lg"
          :inline="true"
        ></iconify-icon>
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
        <iconify-icon
          icon="a11y-text"
          data-size="lg"
          :inline="true"
        ></iconify-icon>
      </button>

      <!-- Sets font size to large -->
      <button
        class="button-reset a11y__button"
        aria-label="Большой шрифт"
        title="Большой шрифт"
        @click="setFontSize('lg')"
        :data-active="fontSize === 'lg'"
      >
        <iconify-icon
          icon="a11y-text"
          data-size="md"
          :inline="true"
        ></iconify-icon>
      </button>

      <!-- Sets font size to default -->
      <button
        class="button-reset a11y__button"
        aria-label="Обычный шрифт"
        title="Обычный шрифт"
        @click="setFontSize('md')"
        :data-active="fontSize === 'md'"
      >
        <iconify-icon
          icon="a11y-text"
          data-size="sm"
          :inline="true"
        ></iconify-icon>
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
        <iconify-icon
          icon="a11y-image"
          data-size="lg"
          :inline="true"
        ></iconify-icon>
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
        <iconify-icon
          icon="a11y-refresh"
          data-size="lg"
          :inline="true"
        ></iconify-icon>
      </button>
    </div>
  </div>
</template>

<script>
const defaultSettings = {
  fontSize: "md",
  disableImages: false,
  contrastMode: false
};

const fontMultupliers = {
  xl: 1.5,
  lg: 1.2,
  md: 1
};

export default {
  data() {
    return defaultSettings;
  },
  methods: {
    setFontSize(size) {
      this.fontSize = size;

      let mult = fontMultupliers[size];

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
      this.toggleDisableImages(defaultSettings.disableImages);
      this.toggleEnableContrast(defaultSettings.contrastMode);
      this.setFontSize(defaultSettings.fontSize);
    }
  }
};
</script>

<style>
/*
* Widget styling
*/
.a11y {
  display: flex;
  gap: 1rem;
}

.a11y__block {
  display: flex;
}

.a11y__button {
  /* Centering icon inside the button */
  color: var(--icon-color);
  line-height: 0;
  cursor: pointer;

  transition-property: color;
  transition: var(--standard-transition);
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

/*
* A11y styling
*/

body.__a11y-no-images img,
body.__a11y-contrast .a11y-bg-image-container img {
  visibility: hidden;
}

body.__a11y-no-images div[role="img"],
body.__a11y-contrast .a11y-bg-image-container div[role="img"] {
  background: transparent;
}

body.__a11y-contrast {
  background: black !important;
}

body.__a11y-contrast * {
  transition: none !important;
}

/* These could be overriden */
body.__a11y-contrast *:not([class^="ymaps"]) {
  background: transparent !important;
  color: white !important;
}
body.__a11y-contrast button:hover *:not([class^="ymaps"]),
body.__a11y-contrast a:hover *:not([class^="ymaps"]) {
  background: black !important;
  color: white !important;
}


/* Styling for widget itself */
body.__a11y-contrast .a11y__button[data-active="true"] * {
  color: blue !important;
}

body.__a11y-contrast .a11y__button[data-inactive="true"] * {
  color: red !important;
}

/* Styling for size */
body[data-a11y-size] {
  --universal-gap: 1rem;
  --content-gap: 1rem;
}
</style>
