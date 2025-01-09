<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { useStore } from "../store";

const store = useStore();

const route = useRoute();
const response = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`);
</script>

<template>
  <div class="movie-detail"> 
    <div v-if="store.cart.has(route.params.id)">
      <button 
      @click="store.cart.set(route.params.id, { title: response.data.original_title, url: response.data.poster_path })" 
      class="movie-site">
      Added
      </button>
    </div>
    <div v-else>
      <button 
      @click="store.cart.set(route.params.id, { title: response.data.original_title, url: response.data.poster_path })" 
      class="movie-site">
      Buy
    </button>
</div>

    <h1 class="movie-title">{{ response.data.original_title }}</h1>
    <p class="movie-overview">{{ response.data.overview }}</p>
    <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
    <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
    <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster" class="movie-poster" />

    <h2 class="trailers-title">Trailers</h2>
    <div class="trailers-container">
      <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
        <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
            class="trailer-thumbnail" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Movie Detail Section */
.movie-detail {
  max-width: 800px; /* Restrict width for better readability */
  margin: 20px auto; /* Center on the page with vertical spacing */
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4; /* Light background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center; /* Center align text */
}

/* Movie Title */
.movie-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* Movie Overview */
.movie-overview {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6; /* Better readability */
  text-align: justify;
}

/* Release Date */
.movie-release-date {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 20px;
}

/* Official Movie Site Link */
.movie-site {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #3498db; /* Blue background */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.movie-site:hover {
  background-color: #2980b9; /* Darker blue on hover */
}

/* Movie Poster */
.movie-poster {
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Trailers Section */
.trailers-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 30px 0 20px;
}

/* Trailers Container */
.trailers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between trailers */
}

/* Trailer Tile */
.trailer-tile {
  width: 200px;
}

.trailer-thumbnail {
  width: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.trailer-thumbnail:hover {
  transform: scale(1.05); /* Slight zoom effect */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}

</style>