<script lang="ts" setup>
import type { Coffee } from '@/entities/Card/types.ts'
import { ref } from 'vue'

const props = defineProps<Coffee>()
const loaded = ref(false)

function handleLoad() {
  loaded.value = true
}
</script>

<template>
  <div class="card">
    <div :class="['placeholder', { hidden: loaded }]">Loading..</div>
    <img
      :src="props.image"
      alt="coffee"
      @load="handleLoad"
      :class="['card-image', { hidden: !loaded }]"
    />
    <div class="card-body">
      <span class="card-title">{{ props.title }} </span>
      <span>{{ props.description }}</span>
    </div>
    <div class="card-ingredients">
      <div v-for="(ingredient, index) in props.ingredients" class="ingredient" :key="index" >
        {{ ingredient }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  height: fit-content;
}

.card-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
}

.card-ingredients {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
}

.ingredient {
  border-radius: 0.5rem;
  padding: 0.25rem;
  white-space: nowrap;
  background-color: #b4daff;
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: beige;
}

.hidden {
  display: none;
}
</style>
