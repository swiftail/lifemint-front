<template>
  <div class="body">
    <SectionMasthead
      heading="Эффект голливудской улыбки в клинике Life&nbsp;Mint"
      description="Более 5000 человек уже приобрели красивую улыбку, поэтому доверьте и вы свои зубы профессионалам, приходите в клинику Life Mint"
      :image="mastheadImage"
      actionText="Получить консультацию"
      actionContext="Главный экран"
    />

    <PageSection header="Преимущества" text="Почему выбирают нас" white>
      <SectionAdvantages />
    </PageSection>

    <PageSection header="Услуги" text="Мы предлагаем" gray id="services">
      <SectionServices />
    </PageSection>

    <PageSection white>
      <ConsultationForm />
    </PageSection>

    <PageSection header="Отзывы" text="О нас говорят" gray id="reviews">
      <SectionReviews />
    </PageSection>

    <PageSection header="Акции" white id="promotions">
      <SectionPromotions />
    </PageSection>

    <PageSection header="Врачи клиники" text="Наши специалисты" white>
      <SectionExperts />
    </PageSection>

    <PageSection white id="about">
      <SectionAbout />
    </PageSection>

    <PageSection header="Фотогалерея" text="Клиника изнутри" white>
      <SectionGallery />
    </PageSection>

    <PageSection header="Контакты" text="Как нас найти" gray>
      <SectionContacts />
    </PageSection>
  </div>
</template>

<script>
import images from "~/assets/js/images";
import pageMixin from "~/assets/js/pageMixin";

export default {
  mixins: [pageMixin],
  data() {
    return {
      mastheadImage: images.randomMastheadImage()
    };
  },
  head() {
    return {
      title: "Стоматология Life Mint в Ижевске",
      meta: [
        {
          name: "description",
          content:
            "Стоматология Life Mint в самом центре Ижевска. Качественное лечение и профилактика по приемлемым ценам."
        },
        {
          name: "keywords",
          content:
            "Стоматология, стоматолог, Стоматология Ижевск, стоматология прием, стоматология ижевск, life mint, life mint ижевск, стоматология life mint"
        }
      ]
    };
  }
};
</script>
