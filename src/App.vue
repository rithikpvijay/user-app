<template>
  <navigation-item></navigation-item>
  <router-view></router-view>
</template>

<script setup>
import NavigationItem from "./components/home/NavigationItem.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  /* font-family: "Roboto"; */
}
</style>
