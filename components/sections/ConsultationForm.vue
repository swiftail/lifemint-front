<template>
  <div class="consultation-form">
    <div class="consultation-form__heading a11y-bg-image-container">
      <ResponsiveImage :image="headingImage" />

      <div class="consultation-form__heading-text">
        <h2>Запишитесь на бесплатный осмотр</h2>
        <p>
          Оставьте заявку и в ближайшее время наш специалист свяжется с вами
        </p>
      </div>
    </div>

    <div class="consultation-form__actions">
      <div
        class="
        consultation-form__action-container
        consultation-form__input-container
        consultation-form__phone
        "
      >
        <input
          type="text"
          placeholder="Телефон"
          v-model.trim="phone"
          v-mask="{
            mask: '+7 (999) 999 99-99',
            jitMasking: true
          }"
          ref="phone"
        />
      </div>
      <div
        class="
        consultation-form__action-container
        consultation-form__input-container
        consultation-form__name
        "
      >
        <input type="text" placeholder="Имя" v-model.trim="name" />
      </div>
      <button
        class="
        consultation-form__action-container
        consultation-form__button-container
        consultation-form__button
        button-reset
        action-link-container
      "
        @click="openPopup()"
      >
        <ActionLink text="Записаться" icon="arrow-right" @click="openPopup()" />
      </button>
    </div>
  </div>
</template>

<style>
.consultation-form {
  --container-width: 30%;
  --gradient-end: 100%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
}

.consultation-form img {
  width: 100%;
  max-width: 1160px;

  position: absolute;
  top: 0;
  right: 0;
  max-height: 100%;
  object-fit: cover;
  z-index: 0;
}

.consultation-form__heading > * {
  position: relative;
  z-index: 1;
}

.consultation-form__heading {
  z-index: 1;
  position: relative;
}

.consultation-form__heading-text {
  position: relative;
  padding: 4rem var(--universal-gap);
  background: linear-gradient(
    90deg,
    #fafafa 0%,
    transparent var(--gradient-end)
  );
}

.consultation-form__heading-text > * {
  max-width: var(--container-width);
}

.consultation-form__heading h2 {
  font-family: var(--font-serif);
  font-weight: var(--fw-normal);

  padding: 0;
  margin: 0;

  margin-bottom: 1.3rem;

  font-size: 2.25rem;
  line-height: 2.5rem;
}

.consultation-form__heading p {
  font-family: var(--font-default);
  font-weight: var(--fw-normal);

  padding: 0;
  margin: 0;

  font-size: 1rem;
  line-height: 1.5rem;
}

.consultation-form__actions {
  display: grid;

  grid-template:
    "phone name button" 6.25rem /
    1fr 1fr 1fr;
}

.consultation-form__phone {
  grid-area: phone;
}

.consultation-form__name {
  grid-area: name;
}

.consultation-form__button {
  grid-area: button;
}

.consultation-form__action-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.consultation-form__button-container {
  background: #fafafa;
  cursor: pointer;

  transition-property: background;
  transition: 0.4s;
}

.consultation-form__button-container:hover {
  background: var(--accent-color);
}

.consultation-form__button-container:hover .action-link {
  --accent-color: white;
}

.consultation-form__input-container {
  background: var(--accent-color);
  padding: 2rem 0;
}

.consultation-form__input-container input {
  background: 0;
  outline: none;
  color: white;
  border: none;
  border-bottom: 1px solid #eee;

  font-family: var(--font-default);
  font-weight: var(--fw-normal);

  margin: 0 10%;

  font-size: 1rem;

  height: 100%;
  width: 100%;

  padding: 0.5rem;
}

.consultation-form__input-container input::placeholder {
  color: white;
  opacity: 0.7;

  font-family: var(--font-default);
  font-weight: var(--fw-normal);
}

@media screen and (max-width: 80em) {
  .consultation-form {
    --container-width: 50%;
  }
}

@media screen and (max-width: 60em) {
  .consultation-form {
    --container-width: 60%;
    --gradient-end: 150%;
  }

  .consultation-form img {
    min-height: 100%;
    max-height: 100%;
    max-width: 100%;
    width: auto;
    object-fit: cover;
  }

  .consultation-form__actions {
    display: grid;

    grid-template:
      "phone " 6.25rem
      "name  " 6.25rem
      "button" 6.25rem /
      1fr;
  }

  .consultation-form__input-container {
    padding: 2rem 0;
  }

  .consultation-form__input-container input {
    margin: 0;
    margin-left: 2rem;

    margin-right: 25%;
    max-width: 30rem;
  }

  .consultation-form__button-container {
    padding-left: 2rem;
  }

  .consultation-form__action-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

@media screen and (max-width: 48em) {
  .consultation-form {
    --gradient-end: 250%;
    --container-width: 100%;
  }
}
</style>

<script>
import images from "~/assets/js/images";

export default {
  methods: {
    openPopup() {
      this.$showAppointment({
        context: "Записаться на бесплатную консультацию",
        name: this.name,
        phone: this.$refs["phone"].inputmask.unmaskedvalue()
      });
    }
  },
  data() {
    return {
      headingImage: images.consultation,
      name: "",
      phone: ""
    };
  }
};
</script>
