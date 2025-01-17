<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const props = defineProps(["genres"]);
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
})
</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre()">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card" @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Movie Gallery */
.movie-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #000000; /* Light background */
  min-height: 100vh; /* Ensure full viewport height */
}

/* Select Box */
.movie-gallery select {
  width: 200px; /* Set a fixed width */
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #000000;
  border-radius: 5px;
  outline: none;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  align-self: flex-start; /* Keep the select aligned to the top-left */
}

/* Movie List Grid */
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between grid items */
  width: 100%;
}

/* Movie Card */
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.05); /* Slight zoom effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow on hover */
}

/* Movie Poster */
.movie-poster {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd; /* Divider line */
}

/* Movie Title */
.movie-title {
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  color: #333;
}
</style>