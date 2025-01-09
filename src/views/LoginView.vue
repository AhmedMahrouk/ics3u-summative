<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from "../store"

const store = useStore();
const router = useRouter();
const password = ref('');
const email = ref('');

const handleLogin = () => {
  if (password.value === "12345") {
    store.email = email.value;
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
      <RouterLink to="/register" class="button register">Register</RouterLink>
    </div>
    <div class="form-container">
      <h2>Login to Your Account</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" class="input-field" required />
        <input v-model="password" type="password" placeholder="Password" class="input-field" required />
        <button type="submit" class="button login">Login</button>
      </form>
    </div>
  </div>
</div>
</template>

<style scoped>
/* Hero Section */
.hero {
  height: 100vh; /* Full viewport height */
  background-color: black; /* Black background */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Arial, sans-serif;
  position: relative; /* Position for Navbar */
}

.overlay {
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8); /* Semi-transparent overlay */
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Subtle shadow */
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  padding: 0 20px;
}

.navbar h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar .register {
  padding: 10px 20px;
  background-color: #1abc9c; /* Green button */
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.navbar .register:hover {
  background-color: #16a085; /* Darker green on hover */
}

/* Form Container */
.form-container {
  margin-top: 60px;
}

.form-container h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns for input fields */
  gap: 20px;
  justify-content: center;
  align-items: center;
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
  border-color: #3498db; /* Blue outline on focus */
}

.button.login {
  grid-column: span 2; /* Button spans both columns */
  padding: 10px 20px;
  background-color: #3498db; /* Blue button */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button.login:hover {
  background-color: #2980b9; /* Darker blue on hover */
}

/* Responsive Design */
@media (max-width: 600px) {
  form {
    grid-template-columns: 1fr; /* Single column for small screens */
  }

  .button.login {
    grid-column: span 1; /* Adjust button to fit single column */
  }
}
</style>