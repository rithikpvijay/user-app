<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script setup>
//eslint-disable-next-line
const props = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },

  to: {
    type: String,
    required: false,
    default: "/",
  },
  mode: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped>
.blank {
  border: 1px solid #000;
  padding: 12px 24px;
  border-radius: 4px;
  display: inline-block;
  color: #000;
}
.blank:hover {
  background-color: #eee;
}
.fill {
  border: 1px solid #000;
  padding: 12px 24px;
  border-radius: 4px;
  display: inline-block;
  background-color: #000;
  color: #fff;
  display: inline-block;
}
.fill:hover {
  background-color: #333;
}
a:link,
a:visited {
  text-decoration: none;
}
@media (max-width: 1250px) {
  .blank,
  .fill {
    font-size: 14px;
  }
}
</style>
