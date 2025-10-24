<template>
  <div v-if="isLoading" class="loading">
    <Icon icon="line-md:loading-twotone-loop" width="72" height="72" />
  </div>
  <div v-if="user && !isLoading">
    <base-card>
      <div class="container">
        <div class="first">
          <img src="/images/Avatar_placeholder.png" alt="avatar" />
          <div>
            <p class="name">{{ user.name }}</p>
            <p class="email">{{ user.email }}</p>
          </div>
        </div>
        <div class="detail">
          <p>Name</p>
          <p>{{ user.name }}</p>
        </div>
        <div class="detail">
          <p>Email</p>
          <p>{{ user.email }}</p>
        </div>
        <div class="detail">
          <p>Phone</p>
          <p>{{ user.phone }}</p>
        </div>
        <div class="detail">
          <p>Address</p>
          <p>{{ user.address.street }}</p>
        </div>
        <div class="detail">
          <p>Company</p>
          <p>{{ user.company.name }}</p>
        </div>
      </div>
    </base-card>
  </div>
  <div v-if="!user && !isLoading">
    <not-found></not-found>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import NotFound from "./NotFound.vue";
import { Icon } from "@iconify/vue";

const user = ref(null);
const error = ref(null);
const isLoading = ref(false);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
onMounted(async () => {
  try {
    isLoading.value = true;
    error.value = null;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}`);
    user.value = res.data;
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
img {
  width: 72px;
  border-radius: 1000px;
  margin-right: 24px;
  margin-bottom: 12px;
}

.first {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  /* padding: 12px; */
}

.name {
  font-size: 16px;
}

.email {
  font-size: 12px;
  color: #555;
  margin-top: 4px;
}

.detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}

.container {
  padding: 12px;
}

.loading {
  position: absolute;
  top: 300px;
  right: 750px;
}
</style>
