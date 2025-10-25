<template>
  <div class="container">
    <div class="table">
      <div>S.No</div>
      <div>Name</div>
      <div class="email">Email</div>
      <div class="phone">Phone</div>
      <div>Company</div>
      <div></div>
    </div>
  </div>

  <div v-if="isLoading">
    <base-loading></base-loading>
  </div>

  <div v-if="!isLoading">
    <div v-for="user in userData" :key="user.id">
      <user-row
        :id="user.id"
        :name="user.name"
        :email="user.email"
        :phone="user.phone"
        :company="user.company.name"
      ></user-row>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import UserRow from "./UserRow.vue";

const userData = ref([]);
const error = ref(null);
const isLoading = ref(false);

onMounted(async () => {
  try {
    error.value = null;
    isLoading.value = true;
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    userData.value = response.data;
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 24px 150px 0 150px;
}
.table {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1.2fr 1.2fr 0.9fr;
  padding: 12px;

  align-items: center;
  column-gap: 2rem;

  background-color: antiquewhite;
}

.table div {
  text-transform: uppercase;
}

.loading {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

@media (max-width: 950px) {
  .table {
    font-size: 14px;
  }
}

@media (max-width: 855px) {
  .phone {
    display: none;
  }

  .table {
    grid-template-columns: 0.2fr 1fr 1.2fr 0.9fr;
  }
}
@media (max-width: 760px) {
  .email {
    display: none;
  }
  .table {
    grid-template-columns: 0.3fr 1fr 0.9fr;
  }

  .container {
    padding-left: 64px;
    padding-right: 64px;
  }
}

@media (max-width: 460px) {
  .container {
    padding-left: 48px;
    padding-right: 48px;
  }
  .table {
    font-size: 12px;
    column-gap: 1rem;
  }
}
</style>
