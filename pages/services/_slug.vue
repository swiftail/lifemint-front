<template>
  <div class="body">
    <SectionMasthead
      :heading="service.mastheadHeading"
      :description="service.mastheadDescription"
      :image="mastheadImage"
      actionText="Записаться на приём"
      actionContext="Главный экран"
    />

    <PageSection :text="service.name" white>
      <SectionServiceDescription :service="service" />
    </PageSection>

    <PageSection v-if="service.subServices.length" :text="service.serviceListHeading" gray>
      <SectionServiceSubList :service="service" />
    </PageSection>

    <PageSection header="Преимущества" text="Почему выбирают нас" white>
      <SectionAdvantages />
    </PageSection>

    <PageSection header="Врачи клиники" text="Наши специалисты" gray>
      <SectionExperts :experts="experts" />
    </PageSection>

    <PageSection white>
      <ConsultationForm />
    </PageSection>

    <PageSection header="Отзывы" text="О нас говорят" gray id="reviews">
      <SectionReviews :reviews="reviews" />
    </PageSection>

    <PageSection header="Акции" white id="promotions">
      <SectionPromotions />
    </PageSection>

    <PageSection white id="about">
      <SectionAbout />
    </PageSection>

    <PageSection header="Контакты" text="Как нас найти" gray>
      <SectionContacts />
    </PageSection>
  </div>
</template>

<script>
import images from "~/assets/js/images";

export default {
  validate({ params, store }) {
    let slug = params.slug;
    return store.getters.getServiceBySlug(slug);
  },
  data() {
    let service =this.$store.getters.getServiceBySlug(this.$route.params.slug)
    return {
      service: service,
      reviews: service.reviews,
      experts: service.experts,
      mastheadImage: images.randomMastheadImage()
    };
  },
  head() {
    return {
      title: this.$get(this.service, 'meta.title', this.service.name),
      meta: [
        { name: 'description', content: this.$get(this.service, 'meta.description', '') },
        { name: 'keywords', content: this.$get(this.service, 'meta.keywords', '') }
      ]
    }
  }
};
</script>
