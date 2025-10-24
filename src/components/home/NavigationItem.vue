<template>
  <nav>
    <p>Vuer</p>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/users">Users</router-link></li>

      <li><router-link to="/about">About</router-link></li>
    </ul>

    <base-button link to="/users" class="blank">{{ isShow ? "Go to users" : "Users" }}</base-button>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import BaseButton from "./BaseButton.vue";
import { ref, watch } from "vue";

const route = useRoute();
const isShow = ref(true);
console.log(route.path);

watch(
  () => route.path,
  (newPath) => {
    console.log(newPath);
    if (newPath === "/users") {
      isShow.value = false;
    } else {
      isShow.value = true;
    }
  }
);
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 120px;
}
ul {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

li a:link,
li a:visited {
  text-decoration: none;
  color: #000;
}

li a:hover,
li a:active {
  color: #bbb;
}
</style>
