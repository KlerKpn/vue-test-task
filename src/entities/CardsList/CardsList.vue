<template>
  <div class="cardsList">
    <slot />
  </div>
</template>

<style scoped>
  .cardsList{
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding:  1rem;
  }
</style>
