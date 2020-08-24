<template>
  <div
    class="modal micromodal-slide"
    :class="{ 'is-open': isOpen }"
    :id="id"
    aria-hidden="true"
  >
    <div class="modal__overlay" @click.self="close">
      <div
        class="modal__container"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
      >
        <header class="modal__header">
          <h2 :id="titleId" class="modal__title">
            {{ title }}
          </h2>

          <button
            class="modal__close button-reset"
            aria-label="Close modal"
            tabindex="-1"
            @click="close"
          >
            <iconify-icon icon="modal-close" />
          </button>
        </header>

        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title"],
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    titleId() {
      return this.id + "__title";
    }
  },
  methods: {
    show() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    keyListener(e) {
      if (e.key == "Escape") {
        this.close();
      }
    }
  },
  mounted() {
    window.modals = window.modals || {};
    window.modals[this.id] = this;
  },
  created: function() {
    if (process.client) {
      window.addEventListener("keydown", this.keyListener);
    }
  },
  destroyed: function() {
    if (process.client) {
      window.removeEventListener("keydown", this.keyListener);
    }
  }
};
</script>

<style>
.modal {
  font-family: var(--font-default);
  z-index: 10;
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__container {
  background-color: #fff;
  padding: 2em 3em;

  max-width: 35rem;
  width: 90vw;

  max-height: 100vh;
  border-radius: 2px;
  overflow-y: auto;
  box-sizing: border-box;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__title {
  margin: 0;
  font-weight: var(--fw-semibold);
  font-size: 2em;
}

.modal__close {
  cursor: pointer;
  color: var(--icon-color);
  transition-property: color;
  transition: var(--standard-transition);
}

.modal__close,
.modal__close svg {
  width: 1.8rem;
  height: 1.8rem;
}

.modal__close:hover {
  color: var(--accent-color);
}

.modal__content {
  padding: 1em 0;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 60em) {
  .modal__title {
    font-size: 1.7em;
  }

  .modal__container {
    max-width: 95vw;
    width: 95vw;
    max-height: none;
    padding: 2em;
  }

  .modal__content {
    padding: 0;
  }
}

@media screen and (max-width: 25em) {
  .modal__container {
    padding: 2em;
  }
}

.micromodal-slide {
  opacity: 0;
  visibility: hidden;

  transition-property: opacity, visibility;
  transition: 0.3s ease;

  pointer-events: none;
}

.modal__container {
  transform: translateY(15%);

  transition-property: transform;
  transition: 0.3s ease;
}

body.__a11y-contrast .modal__container {
  background: black!important;
  border: 4px solid white;
}

.micromodal-slide.is-open {
  pointer-events: initial;
  opacity: 1;
  visibility: visible;
  transform: none;
}

.micromodal-slide.is-open .modal__container {
  transform: none;
}
</style>
