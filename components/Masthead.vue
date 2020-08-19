<template>
  <section class="masthead">
    <ResponsiveImage
      :src="require('~/assets/images/masthead.png?resize&sizes[]=400&sizes[]=600&sizes[]=1000&sizes[]=1366')"
      :webp="require('~/assets/images/masthead.png?resize&sizes[]=400&sizes[]=600&sizes[]=1000&format=webp&sizes[]=1366')"
      :fallback="require('~/assets/images/masthead.png')"
      :placeholder="require('~/assets/images/masthead.png?lqip')"
    />
    <div class="masthead__container">
      <h1 class="masthead__heading">Эффект голливудской улыбки в клинике Life Mint</h1>
      <p
        class="masthead__description"
      >Более 5.000 человек уже приобрели красивую улыбку, поэтому доверьте и вы свои зубы профессионалам, приходите в клинику Life&nbsp;Mint</p>
      <a href class="masthead__action inline-svg-container">
        <span class="meathead__action-text">Получить консультацию</span>
        <iconify-icon icon="arrow-right"></iconify-icon>
      </a>
    </div>
  </section>
</template>

<style>
.masthead {
  --gradient-start-bp: 23%;
  --gradient-end-bp: 72%;
  --gradient-start-color: rgb(251, 251, 251);
  --gradient-end-color: rgba(251, 251, 251, 0.2);

  --container-width: 50%;
  --container-height: 40rem;
  --container-padding-v: 0;

  --heading-size: 3.5rem;
}

.masthead {
  background: linear-gradient(
    90deg,
    var(--gradient-start-color) 0%,
    var(--gradient-start-color) var(--gradient-start-bp),
    transparent var(--gradient-end-bp)
  );
  position: relative;

  width: 100%;

  /* TODO: Universal gap */
  padding: var(--container-padding-v) var(--universal-gap);
  height: var(--container-height);
}

.masthead img {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  object-fit: contain;
  z-index: -1;
}

.masthead__container {
  width: var(--container-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.masthead__container > *:not(:last-child) {
  margin-bottom: 2rem;
}

.masthead__heading {
  padding: 0;
  margin: 0;

  font-family: var(--font-serif);
  font-size: var(--heading-size);
  font-weight: var(--fw-regular);
}

.masthead__description {
  padding: 0;
  margin: 0;

  font-family: var(--font-default);
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: var(--fw-regular);
}

.masthead__action {
  font-family: var(--font-default);
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--accent-color);
  font-weight: var(--fw-semibold);
  text-decoration: none;

  display: flex;
  align-items: center;
  text-align: center;

  width: fit-content;

  transition-property: border, transform;
  transition: var(--standard-transition);

  border-bottom: 2px solid transparent;
}

.masthead__action:hover {
  border-bottom-color: var(--accent-color);
  transform: translateX(1rem);
}

.masthead__action span {
  line-height: 0;
}

.masthead__action svg {
  width: 1.4rem;
  height: 1.4rem;
}

/* Small desktop / large laptop */
@media screen and (max-width: 100em) {
  .masthead {
    --gradient-start-bp: 40%;
    --gradient-end-bp: 100%;
    --container-width: 60%;
  }
}

/* Laptop */
@media screen and (max-width: 80em) {
  .masthead {
    --gradient-start-bp: 40%;
    --gradient-end-bp: 150%;

    --container-width: 70%;
    --heading-size: 3rem;
  }
}

/* Tablet */
@media screen and (max-width: 64em) {
  .masthead {
    --gradient-start-bp: 40%;
    --gradient-end-bp: 270%;

    --container-width: 60%;
    --heading-size: 2.5rem;
  }

  .masthead__action:hover {
    border-bottom-color: var(--accent-color);
    transform: none;
  }
}

/* Mobile */
@media screen and (max-width: 40em) {
  .masthead {
    --gradient-start-bp: 20%;
    --gradient-end-bp: 300%;

    --container-width: 100%;
    --container-height: auto;
    --container-padding-v: 5rem;
    --heading-size: 2.5rem;
  }
}
</style>