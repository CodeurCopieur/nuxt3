<script setup>
  // const { data } = await useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=');

  const getMovies = await useMoviesApi().getMovies('now_playing', 1);
  const allMovies  = ref();
  allMovies.value = getMovies;
</script>
<template>
<!-- <div>lol</div> -->
  <Hero :movies="allMovies" />
</template>
