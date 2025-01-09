<script setup>
import { useStore } from "../store"

const store = useStore()
</script>

<template>
<header class="main-header">
  <img
    class="logo"
    src="https://t4.ftcdn.net/jpg/06/90/82/69/360_F_690826931_H2Gxvlm26y12tkrcZ3xAfFPphmdNRVjn.jpg"
    alt="Kinema Logo"
  />

  <input class="searchbar" placeholder="Search" />

  <div class="user-info">
    <h1 class="welcome-message" v-if="store.email">
      {{ `Hello ${store.firstname} ${store.lastname}!` }}
    </h1>
    <div v-if="store.email">
      <RouterLink to="/settings" class="button register">Settings</RouterLink>
      <RouterLink to="/cart" class="button login">Cart</RouterLink>
      <RouterLink to="/" class="button login">Logout</RouterLink>
    </div>
    <div v-else>
      <RouterLink to="/register" class="button register">Register</RouterLink>
      <RouterLink to="/login" class="button login">Login</RouterLink>
    </div>
  </div>
</header>

</template>

<style scoped>
/* General styling for the header */
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #1a1a1a; /* Dark background */
  color: white; /* White text for contrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Logo styling */
.logo {
  width: 100px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
}

/* Search bar styling */
.searchbar {
  flex: 1;
  max-width: 400px;
  margin: 0 20px;
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #444444;
  border-radius: 5px;
  background-color: #333333;
  color: white;
}

.searchbar::placeholder {
  color: #bbb;
}

.searchbar:focus {
  outline: none;
  border-color: #4a90e2;
}

/* User info section */
.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.welcome-message {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #ffffff;
  text-align: right;
}

/* Links and buttons */
.button {
  padding: 8px 12px;
  margin: 5px 0;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button.register {
  background-color: #4a90e2;
  color: white;
}

.button.register:hover {
  background-color: #3a78c2;
}

.button.login {
  background-color: #e63946;
  color: white;
}

.button.login:hover {
  background-color: #d62839;
}

.button:active {
  transform: scale(0.98);
}

/* Responsive design */
@media (max-width: 768px) {
  .main-header {
    flex-wrap: wrap;
    justify-content: center;
  }

  .logo {
    margin-bottom: 10px;
  }

  .searchbar {
    margin: 10px 0;
  }

  .user-info {
    align-items: center;
  }

  .welcome-message {
    text-align: center;
  }
}

</style>