<template>
  <nav>
    <router-link class="logo" :class="{ fixed: menuToggle }" to="/">VUER</router-link>
    <div class="desk-nav">
      <navigation-list></navigation-list>
    </div>
    <div class="mobile-nav">
      <Icon
        icon="material-symbols:menu"
        width="24"
        height="24"
        @click="handleToggle"
        :class="{ disable: menuToggle }"
      />
      <transition name="menu">
        <base-menu v-if="menuToggle" @close="handleClose" class="menu">
          <navigation-list mode="col"></navigation-list>
        </base-menu>
      </transition>
    </div>

    <base-button link to="/users" class="blank desk-nav" :class="{ 'users-button': !isShow }"
      >Go to users</base-button
    >
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import BaseButton from "@/components/UI/BaseButton.vue";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import NavigationList from "@/components/home/NavigationList.vue";

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
  z-index: 10;
}

.fixed {
  position: fixed;
}

.disable {
  visibility: hidden;
}

.mobile-nav {
  display: none;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(100vw);
  opacity: 0;
}

.menu-enter-to,
.menu-leave-from {
  transform: translateX(0px);
  opacity: 1;
}

.menu-enter-active {
  transition: all 0.5s ease-out;
}

.menu-leave-active {
  transition: all 0.5s ease-in;
}
.menu {
  overflow: hidden;
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
