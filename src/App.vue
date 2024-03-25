<script setup lang="ts">
    import CardHabits from './components/CardHabits.vue'
    import FoodCard from './components/FoodCard.vue'
    import CarCard from './components/CarCard.vue'
    import AntCard from './components/AntCard.vue'
    import RestaurantCard from './components/RestaurantCard.vue'

    import { onMounted } from 'vue';
    import { LOCAL_STORAGE_KEYS } from './utils/Http/HttpService'

    onMounted(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const accessToken = queryParams.get('accessToken');
      const refreshToken = queryParams.get('refreshToken');

      if (accessToken && refreshToken) {
        window.localStorage.setItem(
          LOCAL_STORAGE_KEYS.refreshToken,
          refreshToken
        );
        window.localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, accessToken);
      }
    })

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
