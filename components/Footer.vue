<template>
  <footer class="footer">
    <div class="footer__grid">
      <div class="footer__meta">
        <div class="footer__logo-container">
          <a href="#">
            <img src="../assets/logo.png" alt="Логотип LifeMint" class="footer__logo" />
          </a>
        </div>
        <div>
          <p class="footer__text">
            © 2020 ООО “Стомалюкс и К”
            <br />все права защищены
          </p>
          <p class="footer__text">
            <a href="#">Политика конфиденциальности</a>
          </p>
        </div>
      </div>

      <div class="footer__services">
        <a class="footer__heading">УСЛУГИ</a>
        <!-- TODO: This will be dynamic -->
        <ul class="footer__list">
          <li>
            <a href="#">Ортопедия</a>
          </li>
          <li>
            <a href="#">Терапия</a>
          </li>
          <li>
            <a href="#">Хирургия</a>
          </li>
          <li>
            <a href="#">Гигиена и профилактика</a>
          </li>
          <li>
            <a href="#">Имплантация</a>
          </li>
        </ul>
      </div>

      <div class="footer__nav">
        <ul class="footer__list">
          <li>
            <a href="#">СТОИМОСТЬ</a>
          </li>
          <li>
            <a href="#">АКЦИИ</a>
          </li>
          <li>
            <a href="#">ОТЗЫВЫ</a>
          </li>
          <li>
            <a href="#">О НАС</a>
          </li>
          <li>
            <a href="#">КОНТАКТЫ</a>
          </li>
        </ul>
      </div>

      <div class="footer__address">
        <span class="footer__heading">АДРЕС</span>
        <p class="footer__text">
          г. Ижевск,
          <br />ул. Ломоносова, 2
        </p>
      </div>

      <div class="footer__schedule">
        <span class="footer__heading">РЕЖИМ РАБОТЫ</span>
        <p class="footer__text">
          пн-пт 8.00 - 20.00
          <br />сб по записи
        </p>
      </div>

      <div class="footer__contact">
        <div class="footer__phone-container">
          <ul class="footer__phone">
            <li>
              <a href="tel:+73412510050">8 3412 51 00 50</a>
            </li>
            <li>
              <a href="tel:+79512026433">8 951 202-64-33</a>
            </li>
          </ul>
        </div>
        <div class="footer__media-container">
          <!-- Social networks -->
          <div class="footer__media-sn">
            <a class="footer__media-sn-btn" aria-label="ВКонтакте" title="ВКонтакте">
              <iconify-icon icon="sm-vk" data-size="md" :inline="true"></iconify-icon>
            </a>
            <a class="footer__media-sn-btn" aria-label="Instagram" title="Instagram">
              <iconify-icon icon="sm-instagram" data-size="md" :inline="true"></iconify-icon>
            </a>
            <a class="footer__media-sn-btn" aria-label="Facebook" title="Facebook">
              <iconify-icon icon="sm-facebook" data-size="md" :inline="true"></iconify-icon>
            </a>
          </div>
          <a class="footer__text" href="mailto:life-mint@yandex.ru">life-mint@yandex.ru</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
/* Common footer variables */
:root {
  --footer-text-size: 0.85rem;
  --footer-heading-size: 1rem;
  --footer-heading-letter-spacing: 0.1em;

  --footer-heading-color: var(--info-header-color);
  --footer-text-color: var(--info-text-color);
}

/* Common footer style */
.footer {
  background: white;
  font-family: var(--font-default);
}

/* Standard link styling */
.footer a {
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
}
.footer a:hover {
  color: var(--brand-color);
  text-decoration: underline;
}

/* Text styling */
.footer__heading,
.footer__text {
  margin: 0;
  padding: 0;
}

.footer__heading {
  display: inline-block;
  margin-bottom: 0.5rem;
  letter-spacing: var(--footer-heading-letter-spacing);
  font-weight: var(--fw-medium);

  font-size: var(--footer-heading-size);
  color: var(--footer-heading-color);
}

.footer__text {
  font-size: var(--footer-text-size);
  color: var(--footer-text-color);
}
.footer__text a {
  color: var(--footer-text-color);
}

/* Disable list styling */
.footer ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

/* Contact block styling */
.footer__contact {
  text-align: right;
}

/* Nav block styling */
.footer__nav a {
  font-size: var(--footer-heading-size);
  font-weight: var(--fw-medium);
  text-decoration: none;
  color: var(--footer-heading-color);
}

/* List spacing */
.footer__nav li:not(:last-child) {
  margin-bottom: 0.6rem;
}

/* Services block styling */
.footer__services ul a {
  text-decoration: none;
  font-size: var(--footer-text-size);
  color: var(--footer-text-color);
}

/* List spacing */
.footer__services li:not(:last-child) {
  margin-bottom: 0.2rem;
}

/* Contact block styling */
.footer__contact {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}

/* Phone styling */
.footer__phone {
  padding: 0;
  margin: 0;
}

/* List spacing */
.footer__phone li {
  padding-bottom: 0.3rem;
}

.footer__phone li a {
  font-weight: var(--fw-medium);
  font-size: calc(var(--footer-heading-size) * 1.2);
  color: var(--footer-heading-color);
}

/* Meta block styling */
.footer__meta {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}

/* Logo (I HATE THIS) */
.footer__logo {
  width: 100%;
  display: block;
}
.footer__logo-container {
  width: 15rem;
}

/* Social networks block */
.footer__media-sn {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  font-size: calc(var(--footer-heading-size) * 2);
  margin-bottom: calc(var(--footer-text-size) * 1);
}

.footer__media-sn-btn {
  color: var(--header-heading-color);
  /* Centering icon inside the button */
  line-height: 0;
  cursor: pointer;
  transition: all ease 0.2s;
}

.footer__media-sn-btn:hover {
  color: #000;
}

/* Common grid definitions */
.footer__meta {
  grid-area: meta;
}
.footer__services {
  grid-area: services;
}
.footer__nav {
  grid-area: nav;
}
.footer__address {
  grid-area: address;
}
.footer__schedule {
  grid-area: schedule;
}
.footer__contact {
  grid-area: contact;
}

/* Standard grid container for desktop  */
.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr) 1.3fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  grid-template-areas:
    "meta services nav address  contact"
    "meta services nav schedule contact";
  padding: 3.5rem 7.5rem;
}

/* adaptive for laptop  */
@media screen and (max-width: 80em) {
  :root {
    --footer-heading-size: 0.85rem;
    --footer-text-size: 0.75rem;
  }

  .footer__grid {
    padding: 2rem 2rem;
    gap: 1rem 4rem;
  }

  .footer__contact {
    text-align: left;
  }

  .footer__media-sn {
    justify-content: flex-start;
  }
}

/* adaptive for tablet  */
@media screen and (max-width: 64em) {
  .footer__grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "meta services address"
      "meta services schedule"
      "meta nav      contact"
      "meta nav      contact";
  }
}

/* adaptive for mobile */
@media screen and (max-width: 48em) {
  :root {
    --footer-text-size: 0.75rem;
    --footer-heading-size: 0.85rem;
  }

  .footer__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, min-content);
    gap: 2rem;
    grid-template-areas:
      "contact  contact"
      "address  schedule"
      "services nav"
      "meta     meta";
    padding: 2rem;
  }

  .footer__meta,
  .footer__contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". .";
    gap: 2rem;
  }

  /* No logo on mobile */
  .footer__logo-container {
    display: none;
  }
}
</style>