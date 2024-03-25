<script setup lang="ts">
    import CardHabits from './components/CardHabits.vue'
    import Car from './components/icons/Car.vue'
    import Ant from './components/icons/Ant.vue'
    import Food from './components/icons/Food.vue'
    import Restaurant from './components/icons/Restaurant.vue'

    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
</script>

<template>
  <CardHabits
    :title="t(`cardHabits.foodTitle`)"
    :description="t(`cardHabits.foodDescription`)"
    price="300€"
  >
    <template #icon>
      <Food />
    </template>
  </CardHabits>
  <CardHabits
    :title="t(`cardHabits.carTitle`)"
    :description="t(`cardHabits.carDescription`)"
    :price="`${t('cardHabits.carPrice')}/300€`"
  >
    <template #icon>
      <Food />
    </template>
  </CardHabits>
  <CardHabits
    :title="t(`cardHabits.restaurantTitle`)"
    :description="t(`cardHabits.restaurantDescription`)"
    price="300€"
  >
    <template #icon>
      <Food />
    </template>
  </CardHabits>
  <CardHabits
    :title="t(`cardHabits.antTitle`)"
    :description="t(`cardHabits.antDescription`)"
    price="300€"
  >
    <template #icon>
      <Food />
    </template>
  </CardHabits>
</template>


<style scoped>


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
