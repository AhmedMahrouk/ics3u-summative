<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);
const numbers = ref([]);

// Random 3 numbers using a Set
numbers.value = (() => {
  const set = new Set();

  while (true) {
    set.add(Math.floor(Math.random() * 19));

    if (set.size === 3) {
      return set;
    }
  }
})();

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
})
</script>

<template>
  <div class="movie-gallery">
    <div v-if="response" class="movie-list">
      <div v-for="number in numbers" :key="response.data.results[number].id" class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.results[number].poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ response.data.results[number].title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Movie Gallery Styling */
.movie-gallery {
  display: flex;
  justify-content: center; /* Center the gallery */
  padding: 20px;
  background-color: #000000; /* Light background color */
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
  gap: 20px; /* Spacing between cards */
  width: 100%;
  max-width: 1200px; /* Limit gallery width */
}

.movie-card {
  border: 2px solid black; /* Black border */
  border-radius: 8px; /* Rounded corners */
  background-color: white;
  overflow: hidden; /* Ensure content stays within border */
  text-align: center; /* Center-align text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.movie-poster {
  width: 100%; /* Ensure poster fits card */
  height: auto; /* Maintain aspect ratio */
}

.movie-title {
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #333; /* Dark text color */
}

@media (max-width: 600px) {
  .movie-list {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Smaller cards on smaller screens */
  }

  .movie-title {
    font-size: 0.9rem; /* Slightly smaller text */
  }
}

</style>