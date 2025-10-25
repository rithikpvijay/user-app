<template>
  <ul :class="mode">
    <li>
      <router-link to="/home">
        <Icon icon="ri:home-7-line" width="24" height="24" />
        <span>Home</span>
      </router-link>
    </li>
    <li>
      <router-link to="/users">
        <Icon icon="ri:shield-user-line" width="24" height="24" />
        <span> Users </span>
      </router-link>
    </li>

    <li>
      <router-link to="/about">
        <Icon icon="ri:information-2-line" width="24" height="24" />
        <span> About </span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  mode: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;
}

li a {
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  position: relative;
  gap: 8px;
}

li a:hover {
  color: #bbb;
}

li a span {
  line-height: 1;
}
.col {
  flex-direction: column;
}

.col li a {
  padding: 0 30rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.router-link-active {
  color: #bbb;
}

@media (max-width: 850px) {
  ul {
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  ul {
    gap: 3rem;
  }

  li a:link,
  li a:visited {
    gap: 12px;
  }
}
</style>
