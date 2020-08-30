<template>
  <div class="about">
    <div class="about__short">
      <PageSectionHeader
        header="О компании"
        text="Стоматологическая клиника Life&nbsp;Mint"
      />
      <p>
        Наша стоматологическая клиника впервые открыла свои двери в 2012 году. Тогда мы ещё назывались Стомалюкс. В 2016 году мы сменили название и теперь именуемся Life Mint
      </p>
      <p>
        Клиника Life Mint предоставляет широкий спектр стоматологических услуг
      </p>
    </div>
    <div class="about__info">
      <span class="about__info-header">Почему нам доверяют</span>

      <div class="about__info-grid">
        <div>
          <span>3</span>
          <span>место в рейтинге сайта <a>Prodoctorov.ru</a></span>
        </div>

        <div>
          <span>3 705</span>
          <span>пациентов ушли от нас со здоровой улыбкой</span>
        </div>

        <div>
          <span>7</span>
          <span>лет безупречной работы</span>
        </div>

        <div>
          <span>76%</span>
          <span>пациентов приходят по рекомендации</span>
        </div>
      </div>
    </div>

    <p class="about__header">
      Услуги класса premium
    </p>

    <div class="about__text">
      <p>
        Мы посещаем стоматологические выставки стран Европы, перенимаем опыт зарубежных специалистов и осваиваем новые технологии в лечении.
      </p>
      <p>
        Мы часто спонсируем обучение наших работников. Наши специалисты заинтересованы в своём росте, а мы их поощряем.
      </p>
    </div>

    <p class="about__header">
      Мы сторонники постоянного развития
    </p>

    <div class="about__text">
      <p>
        Почему мы говорим, что предоставляем услуги премиального качества по выгодной цене? Есть простое объяснение! Мы не гонимся за прибылью. Мы установили уровень наценки, который хотим получать с предоставляемых услуг и нам этого достаточно.
      </p>
    </div>
  </div>
</template>

<style>
.about {
  display: grid;
  grid-template:
    ".  ." min-content
    ".  ." min-content
    ".  ." min-content /
    1fr 1fr;

  gap: 2rem 0;

  font-family: var(--font-default);
}

.about p {
  margin: 0;
  line-height: 1.4;
  color: var(--info-text-color);
}

.about__short {
  width: 80%;
}

.about__header {
  font-weight: var(--fw-semibold);
  max-width: 25rem;
  color: black !important;

  grid-row: 2;
}

.about__text {
  width: 80%;

  grid-row: 3;
}

.about__text:last-of-type, .about__header:last-of-type {
  margin-left: 2rem;
}

.about .section-header {
  margin-bottom: 2rem;
}

.about__info {
  background: #fafafa;
  display: flex;
  flex-direction: column;
  padding: 4rem;

  justify-content: center;
}

.about__info-header {
  text-transform: uppercase;
  font-weight: var(--fw-semibold);
  font-size: 1rem;
  letter-spacing: 0.0875rem;

  margin-top: 1.75rem;
  margin-bottom: 2.75rem;
}

.about__info-grid {
  --heading-size: 3.75rem;
  --text-size: 1rem;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: auto auto;
  gap: 1rem;
}

.about__info-grid > div {
  display: flex;
  align-items: center;
}

.about__info-grid > div > span:first-child {
  color: var(--brand-color);
  font-weight: var(--fw-semibold);
  white-space: nowrap;
  font-size: var(--heading-size);
  margin-right: 1rem;
}

.about__info-grid > div > span:last-child {
  font-size: var(--text-size);
}

@media screen and (max-width: 110em) {
  .about__info-grid {
    --heading-size: 3rem;
    --text-size: 0.9rem;
  }
}

@media screen and (max-width: 80em) {
  .about__info-grid {
    --heading-size: 2.75rem;
    --text-size: 1rem;

    grid-template-columns: auto;
    grid-template-rows:  auto auto auto auto;
  }
}

@media screen and (max-width: 60em) {
  .about__info-grid {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto auto;
  }

  .about {
    grid-template:
      repeat(6, auto) /
      1fr;
  }

  .about__header, .about__text {
    grid-row: auto;
  }

  .about .section-header h3 {
    font-size: 1.8rem;
  }

  .about__info {
    padding: 1rem;
  }

  .about__header {
    grid-column: auto;
    font-weight: var(--fw-semibold);
    max-width: 20rem;
    color: black !important;
  }

  .about__text:last-of-type, .about__header:last-of-type {
    margin-left: 0;
  }

  .about__text,
  .about__short {
    width: 100%;
  }
}

@media screen and (max-width: 48em) {
  .about__info-grid {
    --heading-size: 2.75rem;
    --text-size: 0.9rem;

    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
  }
}
</style>
