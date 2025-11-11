<script lang="ts" setup>
import { useCoffeeStore } from '@/stores/useCoffeeStore.ts'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const { addCoffee } = useCoffeeStore()

const TIME_TO_START = 10
const time = ref(TIME_TO_START)
let timer: ReturnType<typeof setInterval> | null = null

const clearTimer = () => {
  if (timer !== null) clearInterval(timer)
}

const scrollToBottom = async () => {
  await nextTick()
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}

const start = () => {
  timer = setInterval(() => {
    if (time.value < 1) {
      addCoffee()
      time.value = TIME_TO_START
      clearTimer()
      start()
    }
    time.value--
  }, 1000)
}

const click = () => {
  addCoffee()
  time.value = TIME_TO_START
  clearTimer()
  start()
  void scrollToBottom()
}

onMounted(() => {
  start()
})
onUnmounted(() => {
  clearTimer()
})
</script>

<template>
  <div @click="click" class="button">Add Coffee</div>
</template>

<style scoped>
.button {
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
}
</style>
