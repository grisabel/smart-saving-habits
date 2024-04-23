<script setup lang="ts">
    import CardHabits from './components/CardHabits.vue'
    import FoodCard from './components/FoodCard.vue'
    import CarCard from './components/CarCard.vue'
    import AntCard from './components/AntCard.vue'
    import RestaurantCard from './components/RestaurantCard.vue'

    import { onMounted, ref } from 'vue';
    import { LOCAL_STORAGE_KEYS } from './utils/Http/HttpService'
    import { HttpFactory } from './utils/Http/HttpFactory'

    const http = HttpFactory.getInstance();

    const isReady = ref<boolean>(false);

    onMounted(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const accessToken = queryParams.get("accessToken") ||  window.localStorage.getItem(
        LOCAL_STORAGE_KEYS.accessToken,
      );
      const refreshToken = queryParams.get("refreshToken") ||  window.localStorage.getItem(
        LOCAL_STORAGE_KEYS.refreshToken,
      );

      if (accessToken && refreshToken) {
        window.localStorage.setItem(
          LOCAL_STORAGE_KEYS.refreshToken,
          refreshToken
        );
        window.localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, accessToken);
      }

      http.setAccessToken(accessToken)
      // TODO

      isReady.value = true
    })

</script>

<template>
<div v-if="isReady" class="habitsWp">
  <FoodCard />
  <CarCard />
  <RestaurantCard />
  <AntCard />
</div>
</template>


<style scoped>
  .habitsWp{
    width: 100%;
    margin: 0;
    padding: 0;
    font-weight: normal;
    background-color: transparent;

    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
