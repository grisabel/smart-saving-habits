<script setup lang="ts">
    import Food from './icons/Food.vue'
    import CardHabits from './CardHabits.vue'
    import { useI18n } from 'vue-i18n';

    import { onMounted, ref } from 'vue';
    import { HabitsFactoryRepository } from '@/repository/HabitsRepository/HabitsFactoryRepository';
    import type { HabitResponseModel } from '@/repository/HabitsRepository/model/response/HabitResponseModel';

    const habitsRepository = HabitsFactoryRepository.getInstance();

    const { t } = useI18n();
    const data = ref<HabitResponseModel | null>(null);

    onMounted(() => {
      habitsRepository.food().then((resul) => {
        console.log({resul})
        data.value = resul;
      })
      .catch((error) => {
        console.log({error})
      })


    });
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