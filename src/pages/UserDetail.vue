<template>
  <div v-if="isLoading">
    <base-loading></base-loading>
  </div>
  <div v-if="user && !isLoading">
    <div class="container">
      <base-card class="base">
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
      </base-card>
    </div>
  </div>

  <div v-if="!user && !isLoading">
    <not-found></not-found>
  </div>
</template>

<script setup>
import { computed } from "vue";
import NotFound from "./NotFound.vue";
import { useUsers } from "@/hooks/useUsers";

const { users, isLoading } = useUsers();

console.log(isLoading.value);
console.log(users.value);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const user = computed(() => users.value?.find((user) => user.id === Number(props.id)));
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

.loading {
  position: absolute;
  top: 300px;
  right: 750px;
}

.container {
  display: flex;
  place-items: center;
  min-height: 80vh;
}
.base {
  width: 100%;
}

@media (max-width: 760px) {
  .container {
    padding: 40px 64px;
  }
}

@media (max-width: 460px) {
  .container {
    padding: 40px 48px;
  }
}
</style>
