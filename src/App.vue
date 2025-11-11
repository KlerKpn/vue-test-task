<script lang="ts" setup>
import CardsList from '@/entities/CardsList/CardsList.vue'
import UiCard from '@/entities/Card/UiCard.vue'
import { useCoffeeStore } from '@/stores/useCoffeeStore.ts'
import { onMounted } from 'vue'
import AddCoffee from '@/features/AddCoffee/AddCoffee.vue'

const store = useCoffeeStore()
onMounted(() => {
  store.loadAllCoffees()
})
</script>

<template>
  <CardsList>
    <UiCard
      v-for="item in store.$state.coffeeList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :ingredients="item.ingredients"
      :image="item.image"
    />
    <AddCoffee />
  </CardsList>
</template>

<style>
body {
  background: #d2d7da;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
}
</style>
