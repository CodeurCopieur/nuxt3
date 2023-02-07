<script setup>
  // const { data } = await useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=');
  const value = await useMoviesApi().getMovies('now_playing', 1);
</script>
<template>
  <Hero :movies="val" />
</template>
