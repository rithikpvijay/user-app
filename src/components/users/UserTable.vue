<template>
  <div class="container">
    <base-button link to="/add" class="blank btn">Add User</base-button>

    <div class="table">
      <div>S.No</div>
      <div>Name</div>
      <div class="email">Email</div>
      <div class="phone">Phone</div>
      <div>Company</div>
      <div></div>
    </div>
  </div>

  <div v-if="isLoading">
    <base-loading></base-loading>
  </div>

  <div v-if="!isLoading">
    <div v-for="(user, index) in users" :key="user.id">
      <user-row
        :num="index"
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
import UserRow from "./UserRow.vue";
import { useUsers } from "@/hooks/useUsers";

const { users, isLoading } = useUsers();
console.log(users.value);
</script>

<style scoped>
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 150px 0 150px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.table {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1.2fr 1.2fr 0.9fr;
  padding: 12px;
  max-width: 1100px;
  margin-right: 2.1rem;

  align-items: center;
  column-gap: 2rem;

  background-color: antiquewhite;
}
.btn {
  /* position: absolute;
  top: -60px;
  right: 120px; */
  align-self: end;
  margin-bottom: 24px;
  /* position: fixed; */
}

.table div {
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

@media (max-width: 950px) {
  .table {
    font-size: 14px;
  }
}

@media (max-width: 855px) {
  .phone {
    display: none;
  }

  .table {
    grid-template-columns: 0.2fr 1fr 1.2fr 0.9fr;
  }
}
@media (max-width: 760px) {
  .email {
    display: none;
  }
  .table {
    grid-template-columns: 0.3fr 1fr 0.9fr;
  }

  .container {
    padding-left: 64px;
    padding-right: 64px;
  }
}

@media (max-width: 460px) {
  .container {
    padding-left: 48px;
    padding-right: 48px;
  }
  .table {
    font-size: 12px;
    column-gap: 1rem;
  }
}

.btn {
  font-size: 14px;
}
</style>
