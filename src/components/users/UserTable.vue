<template>
  <div class="container">
    <div>S.No</div>
    <div>Name</div>
    <div>Email</div>
    <div>Phone</div>
    <div>Company</div>
    <div></div>
  </div>

  <div v-if="isLoading" class="loading">
    <Icon icon="line-md:loading-twotone-loop" width="100" height="100" />
  </div>

  <div v-for="user in userData" :key="user.id">
    <user-row
      :id="user.id"
      :name="user.name"
      :email="user.email"
      :phone="user.phone"
      :company="user.company.name"
    ></user-row>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import UserRow from "./UserRow.vue";
import { Icon } from "@iconify/vue";

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
  position: absolute;
  top: 300px;
  right: 700px;
}
</style>
