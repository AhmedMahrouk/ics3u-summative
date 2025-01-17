<script setup>
import { useStore } from "../store"
import { ref } from 'vue';

const store = useStore()
const firstName = ref()
const lastName = ref()

const changeFirstname = () => {
store.firstname = firstName.value
};
const changeLastname = () => {
store.lastname = lastName.value
};
</script>

<template>
<body>
<div class="settings-container">
  <h1>{{ `Email: ${store.email}` }}</h1>
  <h1>{{ `First Name: ${store.firstname}` }}</h1>
  <h1>{{ `Last Name: ${store.lastname}` }}</h1>

  <form @submit.prevent="changeFirstname">
    <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required>
    <button type="submit" class="button register">Change First Name</button>
  </form>

  <form @submit.prevent="changeLastname">
    <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required>
    <button type="submit" class="button register">Change Last Name</button>
  </form>
</div>
</body>
</template>

<style scoped>
/* General settings for the body */
body {
  font-family: 'Arial', sans-serif;
  background-color: #000000; /* Black background */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white; /* White text for contrast */
}

/* Styling for headings (modern font and white text) */
h1 {
  font-family: 'Roboto', sans-serif; /* Modern font */
  font-weight: 300; /* Light font weight for elegance */
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffffff;
  text-align: center;
}

/* Form container styling */
form {
  background: #1a1a1a; /* Dark gray form background */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin: 15px 0;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Input field styling */
.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #555; /* Subtle border */
  border-radius: 5px;
  font-size: 1rem;
  background-color: #333; /* Darker background for inputs */
  color: white; /* White text for inputs */
  transition: border-color 0.3s ease;
}

.input-field::placeholder {
  color: #bbb; /* Subtle placeholder text color */
}

.input-field:focus {
  border-color: #4a90e2; /* Blue border on focus */
  outline: none;
}

/* Button styling */
.button {
  background-color: #4a90e2; /* Blue button */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; /* Full-width button for consistency */
}

.button:hover {
  background-color: #3a78c2;
}

.button:active {
  background-color: #2a5c92;
}

/* Adjust layout for small screens */
@media (max-width: 600px) {
  h1 {
    font-size: 1.2rem;
  }

  .input-field {
    font-size: 0.9rem;
  }

  .button {
    font-size: 0.9rem;
  }
}

</style>