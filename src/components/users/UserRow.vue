<template>
  <router-link :to="userLink" class="row">
    <div>{{ id }}</div>
    <div>{{ name }}</div>
    <div>{{ email }}</div>
    <div>{{ phone }}</div>

    <div>{{ company }}</div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const userLink = computed(() => `/users/${props.id}`);
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.row {
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr;
  padding: 20px;
  margin: 0 120px;
  align-items: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.row:hover {
  background-color: #eee;
}
</style>
