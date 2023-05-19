<script setup>
  const getMovies = await useMoviesApi().getMovies('movie/now_playing', 1);

  const allMovies  = ref();
  allMovies.value = getMovies;

</script>
<template>
  <div>
    <Hero :movies="allMovies" type="movie" />
    <Content />
  </div>
  
</template>
