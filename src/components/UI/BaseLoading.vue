<template>
  <div class="loading">
    <Icon icon="line-md:loading-twotone-loop" width="56" height="56" />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.loading {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
