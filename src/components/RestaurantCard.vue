<script setup lang="ts">
import Restaurant from "./icons/Restaurant.vue";
import CardHabits from "./CardHabits.vue";
import { useI18n } from "vue-i18n";

import { onMounted, ref } from "vue";
import { HabitsFactoryRepository } from "@/repository/HabitsRepository/HabitsFactoryRepository";
import type { HabitResponseModel } from "@/repository/HabitsRepository/model/response/HabitResponseModel";

const habitsRepository = HabitsFactoryRepository.getInstance();

const { t } = useI18n();

const data = ref<HabitResponseModel | null>(null);
const numberTransaction = ref(0);
const total = ref(0);

onMounted(() => {
  habitsRepository
    .restaurant()
    .then((resul) => {
      if (resul && resul.transactions) {
        numberTransaction.value = resul.transactions.length;
        total.value = sumarPropiedad(resul.transactions);
      }
    })
    .catch((error) => {
      console.log({ error });
    });
});

function sumarPropiedad(array) {
  return array.reduce((suma, objeto) => {
    return suma + (objeto.amount || 0);
  }, 0);
}
</script>
<template>
  <CardHabits
    :title="t(`cardHabits.restaurantTitle`)"
    :description="t(`cardHabits.restaurantDescription`)"
    :price="`${total}€ (${numberTransaction})`"
  >
    <template #icon>
      <Restaurant />
    </template>
  </CardHabits>
</template>
