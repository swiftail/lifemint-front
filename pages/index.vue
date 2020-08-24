<template>
  <div class="body">
    <SectionMasthead
      heading="Эффект голливудской улыбки в клинике Life Mint"
      description="Более 5000 человек уже приобрели красивую улыбку, поэтому доверьте и вы свои зубы профессионалам, приходите в клинику Life Mint"
      :image="mastheadImage"
      actionText="Получить консультацию"
      actionContext="Главный экран"
    />

    <PageSection header="Преимущества" text="Почему выбирают нас" white>
      <SectionAdvantages />
    </PageSection>

    <PageSection header="Услуги" text="Мы предлагаем" gray>
      <SectionServices />
    </PageSection>

    <PageSection white>
      <ConsultationForm />
    </PageSection>

    <PageSection header="Отзывы" text="О нас говорят" gray>
      <SectionReviews />
    </PageSection>

    <PageSection header="Акции" white>
      <SectionPromotions />
    </PageSection>

    <PageSection header="Врачи клиники" text="Наши специалисты" white>
      <SectionExperts />
    </PageSection>

    <PageSection white>
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

import images from "~/assets/js/images"

export default {
  data() {
    return {
      mastheadImage: images.randomMastheadImage()
    }
  }
};
</script>
