<template>
  <div class="container">
    <div>S.No</div>
    <div>Name</div>
    <div>Email</div>
    <div>Phone</div>
    <div>Company</div>
    <div></div>
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
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr;
  padding: 12px;
  margin: 24px 120px 0 120px;
  align-items: center;

  background-color: antiquewhite;
}

.container div {
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
</style>
