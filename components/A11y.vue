<!-- Accessibility block -->

<template>
  <div class="a11y" aria-label="Версия для слабовидящих">
    <!-- Enables or disables high-contrast mode -->
    <div class="a11y-block">
      <button
        class="button-reset a11y-button a11y-contrast __a11y-ignore"
        aria-label="Режим высокой контрастности"
        title="Режим высокой контрасности"
        @click="toggleContrast()"
        :data-active="contrastMode"
      >
        <i class="bx bxs-color-fill icon-lg __a11y-ignore"></i>
      </button>
    </div>

    <div class="a11y-block">
      <!-- Sets font size to extra large -->
      <button
        class="button-reset a11y-button a11y-font-xl __a11y-ignore"
        aria-label="Очень большой шрифт"
        title="Очень большой шрифт"
        @click="setFontSize('xl')"
        :data-active="fontSize === 'xl'"
      >
        <i class="bx bx-text icon-lg __a11y-ignore"></i>
      </button>

      <!-- Sets font size to large -->
      <button
        class="button-reset a11y-button a11y-font-lg __a11y-ignore"
        aria-label="Большой шрифт"
        title="Большой шрифт"
        @click="setFontSize('lg')"
        :data-active="fontSize === 'lg'"
      >
        <i class="bx bx-text icon-md __a11y-ignore"></i>
      </button>

      <!-- Sets font size to default -->
      <button
        class="button-reset a11y-button a11y-font-md __a11y-ignore"
        aria-label="Обычный шрифт"
        title="Обычный шрифт"
        @click="setFontSize('md')"
        :data-active="fontSize === 'md'"
      >
        <i class="bx bx-text icon-sm __a11y-ignore"></i>
      </button>
    </div>

    <div class="a11y-block">
      <!-- Toggles images on the page -->
      <button
        class="button-reset a11y-button a11y-images __a11y-ignore"
        aria-label="Переключить отображение изображений"
        title="Переключить отображение изображений"
        @click="toggleImages()"
        :data-inactive="disableImages"
      >
        <i class="bx bx-image icon-lg __a11y-ignore"></i>
      </button>
    </div>

    <div class="a11y-block">
      <!-- Resets all settings -->
      <button
        class="button-reset a11y-button a11y-reset __a11y-ignore"
        aria-label="Сбросить настройки"
        title="Сбросить настройки"
        @click="reset()"
      >
        <i class="bx bx-refresh icon-lg __a11y-ignore"></i>
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

    toggleImages(value = undefined) {
      this.disableImages = value !== undefined ? value : !this.disableImages;
      document.body.classList.toggle("__a11y-no-images", this.disableImages);
    },

    toggleContrast(value = undefined) {
      this.contrastMode = value !== undefined ? value : !this.contrastMode;
      document.body.classList.toggle("__a11y-contrast", this.contrastMode);
    },

    reset() {
      this.toggleImages(false);
      this.toggleContrast(false);
      this.setFontSize("md");
    },
  },
};
</script>

<style>
:root {
  --hello: world;
}

body.__a11y-no-images img {
  visibility: hidden;
}

/* Element style */
.a11y {
  display: flex;
  gap: 1rem;
}

.a11y-block {
  display: flex;
}

.a11y-button {
  color: var(--icon-color);
  /* Centering icon inside the button */
  line-height: 0;
  cursor: pointer;
  transition: all ease 0.2s;
}

.a11y-button:hover {
  color: #000;
}

.a11y-button[data-active="true"] {
  color: #95aed4;
}

.a11y-button[data-inactive="true"] {
  color: #df1a00;
}

body.__a11y-contrast {
  background: black !important;
}

body.__a11y-contrast * {
  transition: none !important;
}

body.__a11y-contrast *:not(.__a11y-ignore) {
  background: black !important;
  color: white !important;
}
body.__a11y-contrast button:not(.__a11y-ignore):hover,
a:not(.__a11y-ignore):hover {
  background: white !important;
  color: black !important;
}

body.__a11y-contrast .a11y-button {
  color: white;
}

body.__a11y-contrast .a11y-button:hover {
  background: white;
  color: black;
}

body.__a11y-contrast .a11y-button[data-active="true"] {
  color: blue;
}

body.__a11y-contrast .a11y-button[data-inactive="true"] {
  color: red;
}
</style>
