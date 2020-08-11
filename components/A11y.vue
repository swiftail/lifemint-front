<!-- Accessibility block -->

<template>
  <div class="a11y">

    <!-- Enables or disables high-contrast mode -->
    <div class="a11y-block">
      <button class="button-reset a11y-button a11y-contrast" aria-label="Режим высокой контрастности">
        <i class="bx bxs-color-fill icon-lg"></i>
      </button>
    </div>

    <div class="a11y-block">
      <!-- Sets font size to extra large -->
      <button class="button-reset a11y-button a11y-font-xl" aria-label="Очень большой шрифт">
        <i class="bx bx-text icon-lg"></i>
      </button>

      <!-- Sets font size to large -->
      <button class="button-reset a11y-button a11y-font-lg" aria-label="Большой шрифт">
        <i class="bx bx-text icon-md"></i>
      </button>

      <!-- Sets font size to default -->
      <button class="button-reset a11y-button a11y-font-md" aria-label="Обычный шрифт">
        <i class="bx bx-text icon-sm"></i>
      </button>
    </div>

    <div class="a11y-block">
      <!-- Toggles images on the page -->
      <button class="button-reset a11y-button a11y-images" aria-label="Переключить отображение изображений">
        <i class="bx bx-image icon-lg"></i>
      </button>
    </div>

    <div class="a11y-block">
      <!-- Resets all settings -->
      <button class="button-reset a11y-button a11y-reset" aria-label="Сбросить настройки">
        <i class="bx bx-refresh icon-lg"></i>
      </button>
    </div>
  </div>
</template>

<style>
.a11y {
  display: flex;
  gap: 1rem;
}

.a11y-block {
    display: flex;
}

.a11y-button {
  color:  var(--icon-color);
  /* Centering icon inside the button */
  line-height: 0;
  cursor: pointer;
  transition: all ease 0.2s;
}

.a11y-button:hover {
    color: #000;
}
</style>

<script>
export default {};
</script>