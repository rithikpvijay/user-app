<template>
  <div class="container">
    <base-card class="base">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name</label>
          <input
            :class="{ valid: !name.isValid }"
            type="text"
            id="name"
            v-model.trim="name.val"
            
          />
          <p v-if="!name.isValid">Enter a valid name</p>
        </div>

        <div>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            :class="{ valid: !userName.isValid }"
            v-model.trim="userName.val"
            
          />
          <p v-if="!userName.isValid">Enter a valid username</p>
        </div>

        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            :class="{ valid: !email.isValid }"
            v-model.trim="email.val"
            
          />
          <p v-if="!email.isValid">Enter a valid email</p>
        </div>

        <div>
          <label for="city">City</label>
          <input
            type="text"
            id="city"
            :class="{ valid: !city.isValid }"
            v-model.trim="city.val"
            
          />
          <p v-if="!city.isValid">Enter a valid city</p>
        </div>

        <div>
          <label for="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            :class="{ valid: !phone.isValid }"
            v-model.trim="phone.val"
            
          />
          <p v-if="!phone.isValid">Enter a valid phone</p>
        </div>

        <div>
          <label for="company">Company</label>
          <input
            type="company"
            id="company"
            :class="{ valid: !company.isValid }"
            v-model.trim="company.val"
            
          />
          <p v-if="!company.isValid">Enter a valid company</p>
        </div>
        <span>
          <base-button class="blank submit">Submit</base-button>
        </span>
      </form>
    </base-card>
  </div>
</template>

<script setup lang="ts">
import { useUsers } from "@/hooks/useUsers";
import { ref } from "vue";
import { useRouter } from "vue-router";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  phone: string;
  company: {
    name: string;
  };
}

interface Field {
  val: string;
  isValid: boolean;
}

const { addUser } = useUsers();
const router = useRouter();

const name = ref<Field>({
  val: "",
  isValid: true,
});

const userName = ref<Field>({
  val: "",
  isValid: true,
});

const email = ref<Field>({
  val: "",
  isValid: true,
});

const city = ref<Field>({
  val: "",
  isValid: true,
});

const phone = ref<Field>({
  val: "",
  isValid: true,
});

const company = ref<Field>({
  val: "",
  isValid: true,
});

const isFormValid = ref(true);

function resetInput() {
  name.value.val = "";
  userName.value.val = "";
  email.value.val = "";
  city.value.val = "";
  company.value.val = "";
  phone.value.val = "";
}
function validateForm() {
  isFormValid.value = true;

  if (name.value.val === "") {
    name.value.isValid = false;
    isFormValid.value = false;
  }

  if (userName.value.val === "") {
    userName.value.isValid = false;
    isFormValid.value = false;
  }

  if (email.value.val === "") {
    email.value.isValid = false;
    isFormValid.value = false;
  }

  if (phone.value.val === "") {
    phone.value.isValid = false;
    isFormValid.value = false;
  }

  if (city.value.val === "") {
    city.value.isValid = false;
    isFormValid.value = false;
  }

  if (company.value.val === "") {
    company.value.isValid = false;
    isFormValid.value = false;
  }
}

function handleSubmit() {
  validateForm();

  if (!isFormValid.value) {
    return;
  }

  const newUser: User = {
    id: Math.random(),
    name: name.value.val,
    username: userName.value.val,
    email: email.value.val,
    address: {
      street: city.value.val,
    },
    phone: phone.value.val,
    company: {
      name: company.value.val,
    },
  };

  addUser(newUser);

  resetInput();

  router.replace("/users");
}
</script>

<style scoped>
.container {
  display: flex;
  place-items: center;
  min-height: 80vh;
}

.base {
  width: 100%;
}
form div {
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.8fr;
  align-items: center;
  padding: 12px 24px;
}
input {
  outline: none;
  padding: 6px 8px;
  border: 1px solid #999;
}

form div p {
  margin-left: 24px;
  color: #555;
}

span {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.submit {
  margin-top: 12px;
  grid-column: 2/2;
}

.valid {
  border: 1px solid red;
}

@media (max-width: 760px) {
  .container {
    padding: 40px 64px;
  }
}

@media (max-width: 600px) {
  form div {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  form div p {
    grid-column: 2/2;
    grid-row: 1/1;
    margin-left: 0;
  }

  input {
    grid-column: 2/2;
    grid-row: 2/2;
  }
  label {
    grid-row: 2/2;
  }
}
@media (max-width: 460px) {
  .container {
    padding: 40px 48px;
  }

  form div {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding-top: 0;
    padding-bottom: 12px;
  }

  label {
    grid-row: 1/1;
  }
  input {
    grid-column: 1/1;
  }

  form div p {
    grid-row: 3/3;
    grid-column: 1/1;
  }
}
</style>
