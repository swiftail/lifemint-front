<template>
  <div class="section-service-description">
    <div>
      <Markdown :markdown="service.textBlock1" />
    </div>
    <div>
      <Markdown :markdown="service.textBlock2" />
    </div>
  </div>
</template>

<style>

.section-service-description {
  display: flex;
}

.section-service-description > div {
  flex: 1 1 0;
}

.section-service-description > div:first-child {
  margin-right: 2.5rem;
}
.section-service-description > div:last-child {
  margin-left: 2.5rem;
}

.section-service-description .markdown-render {
  font-family: var(--font-default);
  color: var(--info-text-color)
}
.section-service-description .markdown-render p {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

@media screen and (max-width: 60em) {
  .section-service-description {
    flex-direction: column;
  }

  .section-service-description > div:first-child, .section-service-description > div:last-child {
    margin: 0;
  }

  .section-service-description > div:first-child {
    margin-bottom: 2rem;
  }
}

</style>

<script>
export default {
  props: {
    service: Object
  }
};
</script>
