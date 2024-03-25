<script setup lang="ts">
    import Food from './icons/Food.vue'
    import CardHabits from './CardHabits.vue'
    import { useI18n } from 'vue-i18n';

    import { onMounted, ref } from 'vue';
    import { HabitsFactoryRepository } from '@/repository/HabitsRepository/HabitsFactoryRepository';

    import AggregateData from "./utils/AggregateData"

    const habitsRepository = HabitsFactoryRepository.getInstance();

    const { t } = useI18n();
    const data = ref<string>('--');

    onMounted(() => {
      habitsRepository.food().then((resul) => {

        const expenseByMonth = AggregateData.byMonth(resul.transactions)
        
        const average = expenseByMonth.reduce((acc, expense) => {
          const constant = 100;
          const result = acc + expense.amount;
          return Math.round(result * constant) / constant;
        }, 0)

        data.value = `${average.toFixed(2)}€`;

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
    :price="data"
  >
    <template #icon>
      <Food />
    </template>
    </CardHabits>
</template>