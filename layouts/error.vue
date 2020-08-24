<template>
  <div class="error-page-layout">
    <div class="error-container">
      <div class="error-code">
        {{ error.statusCode }}
      </div>
      <div class="error-meta">
        <div class="error-text">
          <template v-if="error.statusCode === 404">
            Страница не найдена
          </template>
          <template v-else>
            Произошла ошибка
          </template>
        </div>
        <div class="error-action">
          <ActionLink to="/" text="Вернуться на главную" icon="arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

#__nuxt,
#__layout,
.error-page-layout{
  height: 100%;
}

.error-page-layout,
.error-code {
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-container {
  display: flex;

  font-family: var(--font-default);

  width: 100%;
  max-width: 70rem;

  justify-content: space-evenly;
}

.error-meta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.error-code {
  font-weight: var(--fw-semibold);
  font-size: 13rem;

  color: var(--info-text-color);
}

.error-text {
  font-size: 2rem;
  padding-bottom: 2.5rem;
}

@media screen and (max-width: 60rem) {
  .error-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 10vw;
  }

  .error-text {
    font-size: 1.5rem;
  }

  .error-code {
    font-size: 6rem;
  }
}
</style>

<script>
export default {
  props: ["error"],
  layout: "empty" // you can set a custom layout for the error page
};
</script>
