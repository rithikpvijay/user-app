<template>
  <div class="menu">
    <Icon
      icon="material-symbols:close-small"
      width="24"
      height="24"
      class="icon"
      @click="handleClose"
    />
    <slot></slot>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const emit = defineEmits(["close"]);

function handleClose() {
  emit("close");
}
</script>

<style scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 36px;
  box-shadow: 0 2px 8px rgba(0, 0, 0);
  background-color: white;
  z-index: 1;
}

.icon {
  align-self: flex-end;
  border-bottom: none;
  cursor: pointer;
}
</style>
