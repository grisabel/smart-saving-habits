<script setup lang="ts">
    import CardHabits from './components/CardHabits.vue'
    import Car from './components/icons/Car.vue'
    import Ant from './components/icons/Ant.vue'
    import Food from './components/icons/Food.vue'
    import Restaurant from './components/icons/Restaurant.vue'
</script>

<template>
  <CardHabits
    title="Alimentación"
    description="Planifica tu despensa, prevé tu futuro: ¡Estima tu gasto mensual de alimentos!"
    price="300€"
  >
    <template #icon>
      <Food />
    </template>
  </CardHabits>
  <CardHabits
    title="Alimentación"
    description="Planifica tu despensa, prevé tu futuro: ¡Estima tu gasto mensual de alimentos!"
    price="300€"
  >
    <template #icon>
      <Food />
    </template>
  </CardHabits>
  <CardHabits
    title="Alimentación"
    description="Planifica tu despensa, prevé tu futuro: ¡Estima tu gasto mensual de alimentos!"
    price="300€"
  >
    <template #icon>
      <Food />
    </template>
  </CardHabits>
  <CardHabits
    title="Alimentación"
    description="Planifica tu despensa, prevé tu futuro: ¡Estima tu gasto mensual de alimentos!"
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
