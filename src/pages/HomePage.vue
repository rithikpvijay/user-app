<template>
  <div class="home">
    <main-content></main-content>
  </div>
</template>

<script setup lang="ts">
import MainContent from "@/components/home/MainContent.vue";
</script>

<style scoped>
.home {
  padding: 40px 165px;
  min-height: 80vh;
  margin: 0 auto;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-items: center;
}

@media (max-width: 855px) {
  .home {
    /* display: block; */
    flex-direction: column;
  }
}

@media (max-width: 760px) {
  .home {
    padding: 40px 64px;
  }
}
</style>
