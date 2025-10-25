<template>
  <div class="container">
    <router-link :to="userLink" class="row">
      <div>{{ id }}</div>
      <div>{{ name }}</div>
      <div class="email">{{ email }}</div>
      <div class="phone">{{ phone }}</div>

      <div>{{ company }}</div>
    </router-link>
  </div>
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
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 150px;
}
a {
  text-decoration: none;
  color: #000;
}
.row {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1.2fr 1.2fr 0.9fr;
  padding: 20px;
  column-gap: 2rem;

  align-items: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.row:hover {
  background-color: #eee;
}
@media (max-width: 950px) {
  .row {
    font-size: 14px;
  }
}
@media (max-width: 855px) {
  .phone {
    display: none;
  }

  .row {
    grid-template-columns: 0.2fr 1fr 1.2fr 0.9fr;
  }
}
@media (max-width: 760px) {
  .email {
    display: none;
  }
  .row {
    grid-template-columns: 0.3fr 1fr 0.9fr;
  }

  .container {
    padding: 0 64px;
  }
}
@media (max-width: 460px) {
  .row {
    font-size: 12px;
    column-gap: 1rem;
  }

  .container {
    padding: 0 48px;
  }
}
</style>
