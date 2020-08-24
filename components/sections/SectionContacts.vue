<template>
  <div class="contacts">
    <div class="contacts__photo">
      Фото клиники
    </div>
    <div class="contacts__info">
      <div class="contacts__meta-container">
        <div class="contacts__meta-address">
          <div>
            <iconify-icon icon="contacts-map"></iconify-icon>
          </div>
          <div>
            <span>г. Ижевск, улица Ломоносова, 2</span>
          </div>
        </div>

        <div class="contacts__meta-phone">
          <div>
            <iconify-icon icon="contacts-phone"></iconify-icon>
          </div>
          <div>
            <span>8 3412 51 00 50</span>
            <br />
            <span>8 951 202-64-33</span>
          </div>
        </div>
      </div>
      <div class="contacts__transport-info">
        <h3 class="contacts__transport-heading">Как до нас доехать</h3>

        <div class="contacts__transport-container">
          <div>
            <div class="contacts__transport-category">
              <p class="contacts__transport-category-name">Остановка</p>
              <p class="contacts__transport-heading">Дворец спорта</p>
            </div>
            <div class="contacts__transport-category">
              <p class="contacts__transport-category-name">Транспорт</p>
              <ul>
                <li>Троллейбус <b>2, 4</b></li>
                <li>Автобус <b>28, 40, 79</b></li>
                <li>Маршрутное такси <b>10</b></li>
              </ul>
            </div>
          </div>

          <div>
            <div class="contacts__transport-category">
              <p class="contacts__transport-category-name">Остановка</p>
              <p class="contacts__transport-heading">Удгу</p>
            </div>
            <div class="contacts__transport-category">
              <p class="contacts__transport-category-name">Транспорт</p>
              <ul>
                <li>Троллейбус <b>2</b></li>
                <li>Автобус <b>12, 27</b></li>
                <li>Маршрутное такси <b>52, 53</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contacts {
  display: flex;
  width: 100%;
  height: 30rem;

  font-family: var(--font-default);
}

.contacts > * {
  flex: 1 1 0;
}

.contacts__photo {
  background: gray;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 4rem;
}

.contacts__info {
  padding: 2rem 0;
}

.contacts__meta-container > div {
  display: flex;
  align-items: center;
}

/* Icon */
.contacts__meta-container > div > div:first-child {
  margin-right: 1.2rem;
  display: flex;
}

.contacts__meta-container svg {
  color: var(--brand-color);
  opacity: 0.3;
  width: 1.5rem;
  height: 1.5rem;
}

.contacts__meta-phone {
  font-weight: var(--fw-semibold);
  margin-top: 1.5rem;
}

.contacts__transport-info {
  margin-top: 4em;
}

.contacts__transport-container {
  display: flex;
  justify-content: space-between;
  max-width: 30rem;
}

.contacts__transport-heading {
  text-transform: uppercase;
  font-weight: var(--fw-semibold);
  font-size: 1em;
  letter-spacing: 0.0575em;
}

.contacts__transport-info h3 {
  letter-spacing: 0.0675em;
  margin: 0;
}

.contacts__transport-info ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.contacts__transport-info li:not(:last-child) {
  margin-bottom: 0.7em;
}

.contacts__transport-info p {
  margin: 0;
}

.contacts__transport-category {
  margin-top: 2em;
}

p.contacts__transport-category-name {
  font-size: 0.875em;
  color: #545454;
  margin-bottom: 0.8em;
}

@media screen and (max-width: 80em) {
  .contacts {
    font-size: 15px;
  }
}

@media screen and (max-width: 70em) {
  .contacts {
    font-size: 14px;
  }
}

@media screen and (max-width: 60em) {
  .contacts {
    flex-direction: column;
    height: auto;
    font-size: 16px;
  }

  .contacts__photo {
    min-height: 65vh;
    margin: 0;
  }

  .contacts__info {
    padding: 2rem;
    padding-top: 4rem;
    padding-bottom: 0;
  }
}

@media screen and (max-width: 46em) {
  .contacts__transport-container {
    max-width: 100%;
    flex-direction: column;
  }

  .contacts__transport-container > div:first-child {
    padding-bottom: 2rem;
  }
}
</style>
