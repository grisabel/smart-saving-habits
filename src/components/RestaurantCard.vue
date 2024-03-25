<script setup lang="ts">
    import Restaurant from './icons/Restaurant.vue'
    import CardHabits from './CardHabits.vue'
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
</script>
<template>
    <CardHabits
    :title="t(`cardHabits.restaurantTitle`)"
    :description="t(`cardHabits.restaurantDescription`)"
    price="4/300€"
  >
    <template #icon>
      <Restaurant />
    </template>
    </CardHabits>
</template>