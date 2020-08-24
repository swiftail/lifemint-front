<template>
  <n-link v-if="to" :to="to" v-slot="{ href, navigate }">
    <a :href="href" class="action-link inline-svg-container" :class="{ 'black': black }" @click="navigate">
      <span>{{ text }}</span>
      <iconify-icon v-if="icon !== undefined" :icon="icon"></iconify-icon>
    </a>
  </n-link>
  <a
    v-else
    class="action-link inline-svg-container"
    @click.capture.stop.prevent="$emit('click')"
  >
    <span>{{ text }}</span>
    <iconify-icon v-if="icon !== undefined" :icon="icon"></iconify-icon>
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    icon: String,
    to: {
      type: String,
      default: ""
    },
    black: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>

.action-link {
  --color: var(--accent-color)
}

.action-link.black {
  --color: black;
}

.action-link {
  font-family: var(--font-default);
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color);
  font-weight: var(--fw-semibold);
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  text-align: center;

  width: fit-content;
  cursor: pointer;
}

.action-link span {
  line-height: 0;
}

.action-link svg {
  width: 1.4em;
  height: 1.4em;
}

@media (hover: hover) {
  /* Cool animated underline */
  .action-link {
    position: relative;
  }

  .action-link:after {
    content: "";
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 2px solid var(--color);
    transition: 0.4s;
  }

  .action-link:hover:after {
    width: 100%;
  }

  .action-link-container:hover .action-link:after {
    width: 100%;
  }
}

@media (hover: none) {
  .action-link {
    border-bottom: 2px solid var(--color);
  }
}
</style>
