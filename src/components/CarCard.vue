<script setup lang="ts">
    import Car from './icons/Car.vue'
    import CardHabits from './CardHabits.vue'
    import { useI18n } from 'vue-i18n';

    import { onMounted, ref } from 'vue';
    import { HabitsFactoryRepository } from '@/repository/HabitsRepository/HabitsFactoryRepository';

    import AggregateData from "./utils/AggregateData"

    const habitsRepository = HabitsFactoryRepository.getInstance();

    const { t } = useI18n();
    const data = ref<string>('');

    onMounted(() => {
      habitsRepository.food().then((resul) => {

        const expenseByMonth = AggregateData.byMonth(resul.transactions)
        
        const expensesSorted = expenseByMonth.sort(
          (expense1, expense2) => expense2.amount - expense1.amount
        );

        if (expensesSorted.length > 0) {
          const expenseMax = expensesSorted[0];
          data.value = `${expenseMax.amount} (${expenseMax.date})`;
        }

      })
      .catch((error) => {
        console.log({error})
      })


    });
</script>
<template>
    <CardHabits
    :title="t(`cardHabits.carTitle`)"
    :description="t(`cardHabits.carDescription`)"
    :price="data"
  >
    <template #icon>
      <Car />
    </template>
    </CardHabits>
</template>