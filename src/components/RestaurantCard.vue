<script setup lang="ts">
import Restaurant from "./icons/Restaurant.vue";
import CardHabits from "./CardHabits.vue";
import { useI18n } from "vue-i18n";

import { onMounted, ref } from "vue";
import { HabitsFactoryRepository } from "@/repository/HabitsRepository/HabitsFactoryRepository";
import type { HabitResponseModel, TransactionResponseModel } from "@/repository/HabitsRepository/model/response/HabitResponseModel";

const habitsRepository = HabitsFactoryRepository.getInstance();

const { t } = useI18n();

const data = ref<string>('--');

onMounted(() => {
  habitsRepository
    .restaurant()
    .then((resul) => {
      if (resul && resul.transactions) {
        const suma = sumarPropiedad(resul.transactions);
        data.value = `${suma.toFixed(2)}€ (${resul.transactions.length})`
      }
    })
    .catch((error) => {
      console.log({ error });
    });
});

function sumarPropiedad(array: TransactionResponseModel[]): number {
  return array.reduce((suma: number, objeto) => {
    return suma + (objeto.amount || 0);
  }, 0);
}
</script>
<template>
  <CardHabits
    :title="t(`cardHabits.restaurantTitle`)"
    :description="t(`cardHabits.restaurantDescription`)"
    :price="data"
  >
    <template #icon>
      <Restaurant />
    </template>
  </CardHabits>
</template>
