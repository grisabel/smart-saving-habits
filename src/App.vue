<script setup lang="ts">
    import CardHabits from './components/CardHabits.vue'
    import FoodCard from './components/FoodCard.vue'
    import CarCard from './components/CarCard.vue'
    import AntCard from './components/AntCard.vue'
    import RestaurantCard from './components/RestaurantCard.vue'
</script>

<template>
  <FoodCard />
  <CarCard />
  <RestaurantCard />
  <AntCard />
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
