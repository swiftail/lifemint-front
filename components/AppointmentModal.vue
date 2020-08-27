<template>
  <Modal id="appointment-modal" title="Оставить заявку" ref="modal">
    <div class="appointment-modal">
      <p class="appointment-modal__description">
        Оставьте заявку и в ближайшее время наши специалисты свяжутся с Вами
      </p>

      <form @submit.prevent="submit">
        <div class="form-group">

          <input
            type="text"
            name="phone"
            id="appointment-modal__phone"

            placeholder="+7"
            v-model.trim="phone"

            ref="phone"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            name="name"
            id="appointment-modal__name"
            placeholder="Имя"
            v-model.trim="name"
            ref="name"
          />
        </div>

        <div class="form-group">
          <textarea
            rows="2"
            name="comment"
            id="appointment-modal__comment"
            placeholder="Комментарий (не обязательно)"
            v-model.trim="comment"
            ref="comment"
          ></textarea>
        </div>

        <div class="errors" v-if="formErrors.length">
          <ul>
            <li v-for="error in formErrors" class="error" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>

        <div class="appointment-modal__policy-notice">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </div>

        <div>
          <button
            class="appointment-modal__submit button-reset"
            :disabled="submitted"
          >
            <template v-if="submitted">
              Обработка...
            </template>
            <template v-else>
              Отправить
            </template>
          </button>
        </div>
      </form>
    </div>
  </Modal>
</template>

<script>
import { postAppointment } from "~/assets/js/api";

const defaultData = {
  context: "",
  name: "",
  phone: "",
  comment: ""
};

export default {
  mounted() {
    window.AppointmentModal = this;
  },
  data() {
    return Object.assign(
      {
        formErrors: [],
        submitted: false
      },
      defaultData
    );
  },
  methods: {
    async submit() {
      let errors = [];

      if (this.$refs["phone"].inputmask.unmaskedvalue().length < 10) {
        errors.push("Пожалуйста, укажите свой номер телефона");
      }

      if (this.name) {
        if (this.name.length < 2) {
          errors.push("Имя должно быть длиной минимум в два символа");
        }
      } else {
        errors.push("Пожалуйста, укажите имя");
      }

      this.formErrors = errors;

      if (errors.length) {
        return;
      }

      this.submitted = true;

      let { name, phone, comment, context } = this;

      context = `${context} (Страница: ${window.location.pathname})`;

      let result = await postAppointment({
        name,
        phone,
        comment,
        context
      });

      if (result) {
        this.$refs.modal.close();
        this.$notyf.success({
          message: "Ваша заявка принята!<br>Ожидайте звонка.",
          duration: 0,
          dismissible: true
        });
      } else {
        this.submitted = false;
        this.$notyf.error({
          message: "Ошибка при выполнении запроса",
          duration: 0,
          dismissible: true
        });
      }
    },
    setData(data) {
      this.formErrors = [];
      this.submitted = false;
      Object.assign(this, defaultData, data);
    }
  }
};
</script>

<style>
.appointment-modal form {
  display: grid;
  grid-template-columns: 100%;
  gap: 1rem;
}

.appointment-modal .errors {
  background: rgb(255, 247, 249);
  border: 1px solid pink;
  padding: 1em;
  border-radius: 4px;
  width: 100%;
}

.appointment-modal .errors ul {
  margin: 0;
  padding-left: 1.5em;
  font-size: 0.9em;
}

.appointment-modal > div {
  width: 100%;
}
.appointment-modal label {
  width: 100%;
}

.appointment-modal form input[type="text"],
.appointment-modal form textarea {
  border: 0;
  outline: none;
  background: white;
  border: 1px solid #ddd;
  padding: 1em;
  border-radius: 4px;
  width: 100%;
  resize: none;
}

.appointment-modal form input[type="text"]::placeholder,
.appointment-modal form textarea::placeholder {
  color: #ccc;
}

.appointment-modal form input[type="text"]:focus,
.appointment-modal form textarea:focus {
  border-color: var(--brand-color);
}

.appointment-modal__policy-notice {
  font-size: 0.8em;
  color: #aaa;
}

.appointment-modal__submit {
  cursor: pointer;
  width: 100%;
  padding: 1.5em;
  background: var(--accent-color);
  border-radius: 4px;
  color: white;
  font-weight: var(--fw-semibold);

  border: 2px solid;

  transition-property: color, background;
  transition: var(--standard-transition);
  border-color: var(--accent-color);
}

.appointment-modal__submit:hover {
  background: #fafafa;
  color: var(--accent-color);
}

.appointment-modal__submit[disabled] {
  background: #fafafa;
  color: gray;
  border-color: gray;
  cursor: not-allowed;
}

.appointment-modal__submit:focus {
  border-color: var(--brand-color);
}

@media screen and (max-width: 60em) {
  #appointment-modal {
    font-size: 14px;
  }

  .appointment-modal__description {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 22em) {
  #appointment-modal {
    font-size: 13px;
  }
}
</style>
