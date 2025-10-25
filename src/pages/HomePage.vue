<template>
  <div class="home">
    <main-content></main-content>
  </div>
</template>

<script setup>
import MainContent from "@/components/home/MainContent.vue";
</script>

<style scoped>
.home {
  padding: 40px 165px;
  /* min-height: 100vh; */
  margin: 0 auto;
  max-width: 1500px;
}
@media (max-width: 760px) {
  .home {
    padding: 40px 64px;
  }
}
</style>
