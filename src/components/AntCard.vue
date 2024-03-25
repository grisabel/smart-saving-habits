<script setup lang="ts">
    import Ant from './icons/Ant.vue'
    import CardHabits from './CardHabits.vue'
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
</script>
<template>
    <CardHabits
    :title="t(`cardHabits.antTitle`)"
    :description="t(`cardHabits.antDescription`)"
    price="10/65€"
  >
    <template #icon>
      <Ant />
    </template>
    </CardHabits>
</template>