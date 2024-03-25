<script setup lang="ts">
    import Car from './icons/Car.vue'
    import CardHabits from './CardHabits.vue'
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
</script>
<template>
    <CardHabits
    :title="t(`cardHabits.carTitle`)"
    :description="t(`cardHabits.carDescription`)"
    :price="`${t('cardHabits.april')}/300€`"
  >
    <template #icon>
      <Car />
    </template>
    </CardHabits>
</template>