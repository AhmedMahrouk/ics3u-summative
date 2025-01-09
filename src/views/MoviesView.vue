<script setup>
import Genres from "../components/Genres.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const genresList = [
  {
    id: 28,
    genreName: "Action"
  },
  {
    id: 16,
    genreName: "Animation"
  },
  {
    id: 27,
    genreName: "Horror"
  },
  {
    id: 10752,
    genreName: "War"
  },
  {
    id: 878,
    genreName: "Sci-Fi"
  },
]
</script>

<template>
  <Header></Header>
  <Genres :genres="genresList" />
  <Footer></Footer>
</template>

<style scoped>

</style>