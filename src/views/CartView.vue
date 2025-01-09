<script setup>
import { useStore } from '../store';

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const store = useStore();
</script>

<template>
<Header></Header>
<body>
<div class="cart">
  <h1>Shopping Cart</h1>
  <div class="item" v-for="([key, value]) in store.cart" :key="key">
    <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" alt="Movie Poster" />
    <h1>{{ value.title }}</h1>
    <button @click="store.cart.delete(key)">Remove</button>
  </div>
</div>
</body>
</template>

<style scoped>
/* General page styling */
body {
  background-color: #363434; /* Light gray page background */
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* General cart styling */
.cart {
  width: 90%;
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: #1a1a1a; /* Black cart background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  text-align: center;
  color: white; /* White text for contrast */
}

/* Cart title */
.cart h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff; /* Bright white for the title */
}

/* Item container styling */
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #444444; /* Subtle divider */
  margin-bottom: 10px;
}

/* Last item should have no border */
.item:last-child {
  border-bottom: none;
}

/* Image styling */
.item img {
  width: 80px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

/* Item title styling */
.item h1 {
  font-size: 1.2rem;
  font-weight: normal;
  color: #cccccc; /* Light gray for the text */
  margin: 0;
  flex: 1;
  text-align: left;
}

/* Remove button styling */
.item button {
  background-color: #e63946; /* Bright red button */
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.item button:hover {
  background-color: #d62839; /* Darker red on hover */
}

.item button:active {
  background-color: #b71d30; /* Even darker red on click */
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
  .item {
    flex-direction: column;
    align-items: flex-start;
  }

  .item img {
    margin-bottom: 10px;
  }

  .item h1 {
    text-align: center;
  }
}
</style>