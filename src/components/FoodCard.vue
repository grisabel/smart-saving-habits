<script setup lang="ts">
    import Food from './icons/Food.vue'
    import CardHabits from './CardHabits.vue'
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
</template>