<template>
  <nav>
    <router-link class="logo" to="/">VUER</router-link>
    <div class="desk-nav">
      <navigation-list></navigation-list>
    </div>
    <div class="mobile-nav">
      <Icon
        icon="material-symbols:menu"
        width="24"
        height="24"
        @click="handleToggle"
        class="menu"
      />
      <base-menu v-if="menuToggle" @close="handleClose" class="menu">
        <navigation-list mode="col"></navigation-list>
      </base-menu>
    </div>

    <base-button link to="/users" class="blank desk-nav" :class="{ 'users-button': !isShow }"
      >Go to users</base-button
    >
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import BaseButton from "../UI/BaseButton.vue";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import NavigationList from "./NavigationList.vue";

const menuToggle = ref(false);

const router = useRouter();
const isShow = ref(true);

function handleToggle() {
  menuToggle.value = true;
}

function handleClose() {
  menuToggle.value = false;
}

router.afterEach((to) => {
  to.path === "/users" ? (isShow.value = false) : (isShow.value = true);
  menuToggle.value = false;
});
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 120px;
  max-width: 1500px;
  margin: 0 auto;
}

.users-button {
  visibility: hidden;
}

.logo {
  font-weight: 700;
  text-decoration: none;
  color: #000;
  letter-spacing: 1.3px;
}

.mobile-nav {
  display: none;
}
@media (max-width: 760px) {
  nav {
    padding: 16px 48px;
  }
}
@media (max-width: 600px) {
  .mobile-nav {
    display: block;
  }

  .desk-nav {
    display: none;
  }
}
</style>
