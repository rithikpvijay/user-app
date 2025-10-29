<template>
  <div class="container-row">
    <router-link :to="userLink" class="row">
      <div>{{ num + 1 }}</div>
      <div>{{ name }}</div>
      <div class="email">{{ email }}</div>
      <div class="phone">{{ phone }}</div>

      <div>{{ company }}</div>
    </router-link>
    <div class="icon" @click.stop="handleDelete(id)">
      <Icon icon="material-symbols-light:delete-outline-rounded" width="24" height="24" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { useUsers } from "@/hooks/useUsers";

const { deleteUser } = useUsers();
const props = defineProps({
  num: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

function handleDelete(id) {
  const result = confirm("Are you sure you want to delete the user?");
  if (!result) return;
  deleteUser(id);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const userLink = computed(() => `/users/${props.id}`);
</script>

<style scoped>
.container-row {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 150px;
  display: flex;
  align-items: center;
  gap: 10px;
}
a {
  text-decoration: none;
  color: #000;
}
.row {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1.2fr 1.2fr 0.9fr;
  padding: 20px;
  column-gap: 2rem;
  width: 1100px;
  align-items: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.row:hover {
  background-color: #eee;
}

.icon {
  cursor: pointer;
}

@media (max-width: 950px) {
  .row {
    font-size: 14px;
  }
}
@media (max-width: 855px) {
  .phone {
    display: none;
  }

  .row {
    grid-template-columns: 0.2fr 1fr 1.2fr 0.9fr;
  }
}
@media (max-width: 760px) {
  .email {
    display: none;
  }
  .row {
    grid-template-columns: 0.3fr 1fr 0.9fr;
  }

  .container-row {
    padding: 0 64px;
  }
}
@media (max-width: 460px) {
  .row {
    font-size: 12px;
    column-gap: 1rem;
  }

  .container-row {
    padding: 0 48px;
  }
}
</style>
