<template>
  <header class="header">
    <div class="header__grid">
      <div class="header__info">
        <img class="header__logo" src="../assets/logo.png" alt="Логотип LifeMint" />

        <div class="header__address">
          <p class="header__heading">г. Ижевск</p>
          <p class="header__text">ул. Ломоносова, 2</p>
        </div>
        <div class="header__schedule">
          <p class="header__heading">Режим работы</p>
          <p class="header__text">
            пн-пт 8.00 - 20.00
            <br />сб по записи
          </p>
        </div>
        <div class="header__phone">
          <ul>
            <li>
              <a href="tel:+73412510050">8 3412 51 00 50</a>
            </li>
            <li>
              <a href="tel:+79512025433">8 951 202-54-33</a>
              </li>
          </ul>
        </div>

        <div class="header__separator"></div>
      </div>
      <a class="header__appointment" aria-label="Записаться на приём">
        <span class="header__appointment-text">
          Записаться на приём
          <iconify-icon icon="arrow-right" :inline="true"></iconify-icon>
        </span>
      </a>

      <div class="header__nav" ref="nav">
        <div class="header__nav-touch-button-container">
          <button
            class="button-reset header__nav-touch-button"
            aria-label="Меню навигации"
            title="Меню навигации"
            aria-haspopup="true"
            @click="toggleMenu()"
          >
            <iconify-icon icon="menu" data-size="lg" :inline="true"></iconify-icon>
          </button>
        </div>
        <nav role="navigation">
          <ul class="header__nav-list">
            <li class="header__nav-services">
              <a href="#" aria-haspopup="true">Услуги</a>
              <div class="header__nav-submenu-container transitioned">
                <ul class="header__nav-submenu" aria-label="submenu">
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
            </li>
            <li class="header__nav-price">
              <a href>Стоимость</a>
            </li>
            <li class="header__nav-promotions">
              <a href>Акции</a>
            </li>
            <li class="header__nav-reviews">
              <a href>Отзывы</a>
            </li>
            <li class="header__nav-about">
              <a href>О нас</a>
            </li>
            <li class="header__nav-concacts">
              <a href>Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__a11y">
        <A11y />
      </div>
    </div>
  </header>
</template>

<script>
import A11y from "~/components/A11y.vue";

export default {
  methods: {
    toggleMenu() {
      this.$refs["nav"].classList.toggle("visible");
    },
  },
  components: {
    A11y,
  },
  mounted() {},
};
</script>

<style>
:root {
  --header-text-size: 0.75rem;
  --header-heading-size: 0.85rem;

  --header-text-color: var(--info-text-color);

  --header-heading-color: var(--info-text-color);

  --header-gap: 6rem;
  --header-nav-gap: 4rem;

  --header-appointment-width: 24rem;
  --header-appointment-offset: -2rem;

  --header-a11y-gap: 0.5rem;

  --header-menu-color: #fafafa;

  --header-dropdown-shadow: 0 6px 6px rgba(0, 0, 0, 0.1);
}

/* Common header styling */
.header {
  width: 100%;
  font-family: var(--font-default);
  white-space: nowrap;
}

/* Nav button is hidden by default */
.header__nav-touch-button-container {
  display: none;
}

/* Text styling */
.header__heading,
.header__text {
  margin: 0;
  padding: 0;
}

.header__heading {
  font-weight: var(--fw-medium);

  font-size: var(--header-heading-size);
  color: var(--header-heading-color);

  margin-bottom: 0.25rem;
}

.header__text {
  font-size: var(--header-text-size);
  color: var(--header-text-color);
}

/* Navbar styling */

/* Common resets */
.header__nav a {
  text-decoration: none;
}
.header__nav ul {
  list-style: none;
}
.header__nav li {
  /* We need this to display absolute submenu */
  position: relative;
}

/* Main nav menu styling */
.header__nav-list {
  display: flex;
  gap: var(--header-nav-gap);
  margin: 0;
  padding: 0;
}

/* Main nav menu item styling */
.header__nav-list > li > a {
  color: var(--header-heading-color);
  text-transform: uppercase;
  font-weight: var(--fw-semibold);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  cursor: pointer;
}

/* Dropdown container */
.header__nav-submenu-container {
  position: absolute;

  padding-top: calc(1rem - 1px);

  /* Centering */
  left: 50%;
  transform: translate(-50%);

  opacity: 0;

  transition: opacity ease 0.2s;
  visibility: hidden;

  max-width: 10rem;
}

/* Dropdown container visible */
.header__nav-list > li:hover > .header__nav-submenu-container,
.header__nav-list > li:focus-within > .header__nav-submenu-container,
.header__nav-list > li > .header__nav-submenu-container:hover,
.header__nav-list > li > .header__nav-submenu-container:focus {
  visibility: visible;
  opacity: 1;
}

.header__nav-list > li:hover > a,
.header__nav-list > li:focus-within > a {
  transition: all ease 0.2s;
  color: var(--brand-color);
}

/* Dropdown */
.header__nav-submenu {
  border-top: 1px solid var(--brand-color);
  background-color: white;
  padding: 0.7rem 0;
  box-shadow: var(--header-dropdown-shadow);
}

/* Dropdown link */
.header__nav-submenu > li > a {
  color: var(--header-text-color);
  font-size: 0.83rem;
  white-space: break-spaces;
}

/* Dropdown spacing */

.header__nav-submenu > li {
  padding: 0.3rem 1.5rem;
  cursor: pointer;
  transition: all ease 0.1s;
}

.header__nav-submenu > li:hover {
  background-color: var(--header-menu-color);
}

/* Phone styling */
.header__phone ul {
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  text-align: right;
}

.header__phone li {
  padding-bottom: 0.5rem;
}

.header__phone li a {
  text-decoration: none;
  color: var(--header-heading-color);
  font-weight: var(--fw-semibold);
}
.header__phone li a:hover {
  color: var(--brand-color);
  text-decoration: underline;
}

/* Logo styling */
.header__logo {
  max-height: 100%;
  display: block;
  margin: 0;
  height: 4rem;
}

/* Info - container styling */
.header__info {
  display: flex;

  padding-top: 1.5rem;
  padding-bottom: 0.7rem;

  margin: 0 var(--header-gap);

  justify-content: space-between;

  align-items: flex-start;

  gap: 1rem;
}

/*
* Bottom row styling
* We're using grid, so to style the bottom row
* we need to style all the bottom cells
*/
.header__a11y,
.header__nav {
  background: var(--header-menu-color);
  border-bottom: solid 2px #e5e5e5;
}

.header__a11y {
  padding: var(--header-a11y-gap);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
}
.header__nav {
  padding: 1rem var(--header-gap);
}

/* Separator for xl devices */
.header__separator {
  width: 0;
  display: none;
}

/* Header should not take all the space on large screens */
@media screen and (min-width: 90em) {
  .header__separator {
    width: 25%;
    display: block;
  }
}

/* Appointment button styling */
.header__appointment {

  background: var(--brand-color);
  padding: auto;
  /* Since this element is <a> */
  display: block;

  color: white;
  font-weight: var(--fw-semibold);
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.09em;

  width: var(--header-appointment-width);
  display: flex;

  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.3s ease-in-out;
}

.header__appointment-text {
  transition: transform 0.3s ease-in-out;
  transform: translate(var(--header-appointment-offset), 0);

  display: flex;
  align-items: center;
}
.header__appointment-text svg {
  width: 1.4rem;
  height: 1.4rem;
}

.header__appointment:hover {
  background-color: white;
  color: var(--brand-color);
}
.header__appointment:hover .header__appointment-text {
  transform: translate(0);
}

/* Common grid areas */
.header__info {
  grid-area: info;
}
.header__appointment {
  grid-area: appointment;
}
.header__nav {
  grid-area: nav;
}
.header__a11y {
  grid-area: a11y;
}

/* Grid for desktop */
.header__grid {
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: 90px min-content;
  gap: 0;
  grid-template-areas:
    "info appointment"
    "nav  a11y";
}

/* Lowering the gap */
@media screen and (max-width: 90em) {
  :root {
    --header-gap: 3rem;
  }
}

/* Lowering the gaps and the button */
@media screen and (max-width: 80em) {
  :root {
    --header-gap: 2rem;
    --header-nav-gap: 1rem;
    --header-appointment-width: 18rem;
    --header-appointment-offset: 0;
  }
}

/* Tablet adaptive */
@media screen and (max-width: 64em) {
  :root {
    --header-gap: 4rem;
    --header-a11y-gap: 1rem;
    --header-bottom-height: 5rem;
  }

  .header__grid {
    height: var(--header-height);

    display: grid;
    grid-template-columns: auto min-content min-content;
    grid-template-rows: 1fr var(--header-bottom-height);
    gap: 0 2rem;
    grid-template-areas:
      "info info info"
      "nav  a11y appointment";
  }

  .header__logo {
    max-height: none;
    height: 2.5rem;
    margin: auto 0;
  }

  .header__nav,
  .header__a11y {
    background: white;
    border-bottom: none;
  }

  /* Displaying menu btn */
  .header__nav-touch-button-container {
    display: block;
  }

  /* Btn styling */
  .header__nav-touch-button {
    font-size: 2.5rem;
    line-height: 0;
    color: var(--icon-color);
    cursor: pointer;
    transition: all ease 0.2s;
  }

  .header__nav.visible .header__nav-touch-button {
    color: var(--brand-color);
  }

  .header__nav-touch-button:hover {
    color: black;
  }

  /* Adjusting icons */
  .header__a11y {
    font-size: 2rem;
  }

  .header__nav {
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 0;
  }

  /* Styling nav menu to act like dropdown */
  .header__nav nav {
    position: absolute;
    top: 0;
    margin-top: var(--header-bottom-height);
    transform: translateX(calc(-1 * var(--header-gap)));
    box-shadow: var(--header-dropdown-shadow);

    width: auto;

    /* Not visible by default */
    opacity: 0;
    visibility: hidden;
    transition: opacity ease 0.2s;
  }

  .header__nav.visible nav {
    opacity: 1;
    visibility: visible;
  }

  /* Styling nav list as a grid */
  .header__nav-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    gap: 0 4rem;

    background: var(--header-menu-color);
    padding: 2rem var(--header-gap);
  }

  .header__nav-list > li > a {
    font-size: 1rem;
  }

  /* This one takes whole 2nd column */
  .header__nav-list .header__nav-services {
    grid-column: 2;
    grid-row: span 5;

    display: flex;
    flex-direction: column;
  }

  /* Should be on left of the screen */
  .header__nav-submenu-container {
    position: relative;
    transform: none;
    left: 0;
  }

  /* Common styling for 1st column */
  .header__nav-price {
    grid-column: 1;
    grid-row: 1;
  }
  .header__nav-promotions {
    grid-column: 1;
    grid-row: 2;
  }
  .header__nav-reviews {
    grid-column: 1;
    grid-row: 3;
  }
  .header__nav-about {
    grid-column: 1;
    grid-row: 4;
  }
  .header__nav-contacts {
    grid-column: 1;
    grid-row: 5;
  }

  /* Dropdown container */
  .header__nav-submenu-container {
    position: relative;
    padding-top: 0.8rem;
    opacity: 1;
    visibility: visible;
  }

  /* Dropdown */
  .header__nav-submenu {
    border: none;
    background: none;
    padding: 0;
    box-shadow: none;
  }

  /* Dropdown link */
  .header__nav-submenu > li > a {
    color: #545454;
    font-size: var(--header-heading-size);
    white-space: break-spaces;
  }

  /* Dropdown spacing */
  .header__nav-submenu > li {
    padding: 0;
    cursor: pointer;
    transition: all ease 0.1s;
  }

  /* Li spacing */
  .header__nav-submenu > li:not(:last-child) {
    padding-bottom: 0.2rem;
  }

  /* Resetting desktop style */
  .header__nav-submenu > li:hover {
    background: transparent;
  }

  .header__nav-submenu > li:hover > a {
    color: var(--brand-color);
  }
}

/* Mobiles */
@media screen and (max-width: 48em) {
  :root {
    --header-gap: 1rem;
    --header-appointment-width: 100%;
  }

  .header__grid {
    height: var(--header-height);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr var(--header-bottom-height);
    gap: 0 2rem;
    grid-template-areas:
      "info info"
      "nav  appointment";
  }

  /* A11y is hidden on mobile devices */
  .header__a11y {
    display: none;
    visibility: hidden;
  }

  /* Schedule is hidden, too */
  .header__schedule {
    display: none;
  }

  /* Styling info container to merge phone & address into one column */
  .header__info {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content min-content;
    grid-template-areas:
      "logo phones"
      "logo address";
    gap: 0;

    padding: 1rem 0;
  }

  .header__logo {
    grid-area: logo;
  }

  .header__phone {
    grid-area: phones;
  }

  .header__address {
    grid-area: address;
  }

  .header__phone,
  .header__address {
    text-align: right;
  }

  /* Resetting info to common style */
  .header__phone li,
  .header__address p {
    padding: 0;
    margin: 0;
    font-weight: var(--fw-regular);
    font-size: var(--header-text-size);
  }

  .header__appointment {
    font-size: 0.8rem;
    white-space: break-spaces;
    padding: 1rem;
  }
}

/* A11y styling */
body[data-a11y-size] .header__info {
  padding: 0;
}
</style>