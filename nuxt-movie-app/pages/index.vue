<script setup>
  // const { data } = await useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cc4c125990f5777406886df6fdb3e266');
  const value = await useMoviesApi().getMovies('now_playing', 1);
</script>
<template>
  <Hero :movies="val" />
</template>
