<script setup>
  const getMoviesByGenres = await useMoviesApi().getMoviesD(`discover/movie`, 1, `action`);
</script>
<template>
 <span>genre</span>
</template>
