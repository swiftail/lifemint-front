<template>
  <div class="section-service-sub-list">
    <div class="section-service-sub-list__categories">
      <ServiceCategory
        v-for="item in categories"
        :key="item.header"
        :header="item.header"
        :items="item.items"
      />
    </div>

    <div class="section-service-sub-list__action-container">
      <ActionLink
        text="Получить консультацию"
        icon="arrow-right"
        @click="
          $showAppointment({
            context: 'Список услуг'
          })
        "
      />
    </div>

  </div>
</template>

<style>
.section-service-sub-list__categories > *:not(:last-child) {
  margin-bottom: 4rem;
}

.section-service-sub-list__action-container {
  margin-top: 3rem;
}
</style>

<script>
export default {
  props: {
    service: Object
  },
  data() {
    let subs = this.service.subServices;

    let categoriesMap = new Map();

    for (let sub of subs) {
      let catName = (sub.categoryName || '').toLowerCase();
      if (!categoriesMap.has(catName)) categoriesMap.set(catName, []);
      categoriesMap.get(catName).push(sub);
    }

    let entriesArray = Array.from(categoriesMap.entries());
    let categories =
      entriesArray.map(([header, items]) => ({ header, items }));

    return {
      categories
    };
  }
};
</script>
