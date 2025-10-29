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
            @blur="clearValidity(name)"
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
            @blur="clearValidity(userName)"
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
            @blur="clearValidity(email)"
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
            @blur="clearValidity(city)"
          />
          <p v-if="!city.isValid">Enter a valid city</p>
        </div>

        <div>
          <label for="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            :class="{ valid: !phone.isValid }"
            v-model.trim="phone.val"
            @blur="clearValidity(phone)"
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
            @blur="clearValidity(company)"
          />
          <p v-if="!company.isValid">Enter a valid company</p>
        </div>

        <div>
          <base-button class="blank submit">Submit</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script setup>
import { useUsers } from "@/hooks/useUsers";
import router from "@/router";
import { ref } from "vue";

const { addUser } = useUsers();

const name = ref({
  val: "",
  isValid: true,
});

const userName = ref({
  val: "",
  isValid: true,
});

const email = ref({
  val: "",
  isValid: true,
});

const city = ref({
  val: "",
  isValid: true,
});

const phone = ref({
  val: "",
  isValid: true,
});

const company = ref({
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

function clearValidity(input) {
  input.isValid = true;
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

  const newUser = {
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
}
.submit {
  grid-column: 3/3;
  margin-top: 12px;
}

.valid {
  border: 1px solid red;
}

@media (max-width: 760px) {
  .container {
    padding: 40px 64px;
  }
}
</style>
