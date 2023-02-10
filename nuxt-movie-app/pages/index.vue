<script setup>
  const getMovies = await useMoviesApi().getMovies('now_playing', 1);
  const allMovies  = ref();
  allMovies.value = getMovies;
</script>
<template>
  <Hero :movies="allMovies" />
</template>
