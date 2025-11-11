<template>
  <div class="container">
    <base-card class="base">
      <form @submit.prevent="handleSubmit" class="user-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            :class="{ valid: !isFormValid && !formValues.name.trim() }"
            type="text"
            id="name"
            v-model.trim="formValues.name"
            @blur="clearValidity(name)"
          />
          <p v-if="!isFormValid && !formValues.name.trim()" class="invalid-message">
            Enter a valid name
          </p>
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            :class="{ valid: !isFormValid && !formValues.userName.trim() }"
            v-model.trim="formValues.userName"
            @blur="clearValidity(userName)"
          />
          <p v-if="!isFormValid && !formValues.userName.trim()" class="invalid-message">
            Enter a valid username
          </p>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            :class="{ valid: !isFormValid && !formValues.email.trim() }"
            v-model.trim="formValues.email"
            @blur="clearValidity(email)"
          />
          <p v-if="!isFormValid && !formValues.email.trim()" class="invalid-message">
            Enter a valid email
          </p>
        </div>

        <div class="form-group">
          <label for="city">City</label>
          <input
            type="text"
            id="city"
            :class="{ valid: !isFormValid && !formValues.city.trim() }"
            v-model.trim="formValues.city"
            @blur="clearValidity(city)"
          />
          <p v-if="!isFormValid && !formValues.city.trim()" class="invalid-message">
            Enter a valid city
          </p>
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            :class="{ valid: !isFormValid && !formValues.phone.trim() }"
            v-model.trim="formValues.phone"
            @blur="clearValidity(phone)"
          />
          <p v-if="!isFormValid && !formValues.phone.trim()" class="invalid-message">
            Enter a valid phone
          </p>
        </div>

        <div class="form-group">
          <label for="company">Company</label>
          <input
            type="company"
            id="company"
            :class="{ valid: !isFormValid && !formValues.company.trim() }"
            v-model.trim="formValues.company"
            @blur="clearValidity(company)"
          />
          <p v-if="!isFormValid && !formValues.company.trim()" class="invalid-message">
            Enter a valid company
          </p>
        </div>
        <span class="btn-container">
          <base-button class="blank submit">Submit</base-button>
        </span>
      </form>
    </base-card>
  </div>
</template>

<script setup>
import { useUsers } from "@/hooks/useUsers";
import router from "@/router";
import { reactive, ref } from "vue";

const { addUser } = useUsers();

const formValues = reactive({
  name: "",
  userName: "",
  email: "",
  city: "",
  company: "",
  phone: "",
});

const isFormValid = ref(true);

function resetInputs() {
  formValues.name = "";
  formValues.userName = "";
  formValues.email = "";
  formValues.city = "";
  formValues.company = "";
  formValues.phone = "";
}

function clearValidity(input) {
  input.isValid = true;
}

function handleSubmit() {
  isFormValid.value = Object.values(formValues).every((value) => value.trim() !== "");

  if (!isFormValid.value) {
    return;
  }

  const newUser = {
    id: Math.random(),
    name: formValues.name,
    username: formValues.userName,
    email: formValues.email,
    address: {
      street: formValues.city,
    },
    phone: formValues.phone,
    company: {
      name: formValues.company,
    },
  };

  addUser(newUser);

  resetInputs();

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

.form-group {
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.8fr;
  align-items: center;
  padding: 12px 24px;
}

.form-group input {
  outline: none;
  padding: 6px 8px;
  border: 1px solid #999;
}

.invalid-message {
  margin-left: 24px;
  color: #555;
}

.btn-container {
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
  .user-form .form-group {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .invalid-message {
    grid-column: 2/2;
    grid-row: 1/1;
    margin-left: 0;
  }

  .form-group input {
    grid-column: 2/2;
    grid-row: 2/2;
  }
  .form-group label {
    grid-row: 2/2;
  }
}
@media (max-width: 460px) {
  .container {
    padding: 40px 48px;
  }

  .user-form .form-group {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding-top: 0;
    padding-bottom: 12px;
  }

  .form-group label {
    grid-row: 1/1;
  }
  .form-group input {
    grid-column: 1/1;
  }

  .invalid-message {
    grid-row: 3/3;
    grid-column: 1/1;
  }
}
</style>
