<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'vue-router';
import { useStore } from "../store"

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const store = useStore();

async function registerByEmail() {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email.value, password.value)).user;
    await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error creating a user with email!");
  }
}

async function registerByGoogle() {
  try {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error creating a user with Google!");
  }
}
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
        <form @submit.prevent="registerByEmail">
          <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required>
          <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required>
          <input v-model="email" type="email" placeholder="Email" class="input-field" required>
          <input v-model="password" type="password" placeholder="Password" class="input-field" required>
          <input v-model="confirmPassword" type="password" placeholder="Re-enter Passwords" class="input-field"
            required>
          <button type="submit" class="button register">Register</button>
        </form>
      </div>
      <button @click="registerByGoogle()" class="button register">Register by Google</button>
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