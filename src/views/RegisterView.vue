<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from "../store"

const store = useStore();
const router = useRouter();

const firstname = ref('');
const lastname = ref('');
const password = ref('');
const restatepassword = ref('');
const email = ref('');

const handleRegister = () => {
  if (password.value === restatepassword.value) {
    store.email = email.value;
    store.firstname = firstname.value
    store.lastname = lastname.value
    router.push("/movies");
  } else {
    alert("Invalid Password");
  }
};
</script>

<template>
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
        <h1>Kinema</h1>
        <RouterLink to="/login" class="button login">Login</RouterLink>
      </div>
      <div class="form-container">
        <h2>Create an Account</h2>
        <form @submit.prevent="handleRegister">
          <input v-model="firstname" type="text" placeholder="First Name" class="input-field" required>
          <input v-model="lastname" type="text" placeholder="Last Name" class="input-field" required>
          <input v-model="email" type="email" placeholder="Email" class="input-field" required>
          <input v-model="password" type="password" placeholder="Password" class="input-field" required>
          <input v-model="restatepassword" type="password" placeholder="Re-enter Passwords" class="input-field"
            required>
          <button type="submit" class="button register">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  color: white;
  position: relative;
}

/* Navbar */
.navbar {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar .brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.navbar .login {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.navbar .login:hover {
  background-color: #2980b9;
}

/* Overlay */
.overlay {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* Form Container */
.form-container h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.input-field {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 100%;
}

.input-field:focus {
  border-color: #1abc9c;
}

.button.register {
  padding: 10px 20px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button.register:hover {
  background-color: #16a085;
}

/* Responsive Design */
@media (max-width: 600px) {
  .navbar .brand {
    font-size: 1.2rem;
  }

  .navbar .login {
    font-size: 0.9rem;
    padding: 8px 15px;
  }

  .form-container h2 {
    font-size: 1.5rem;
  }
}
</style>