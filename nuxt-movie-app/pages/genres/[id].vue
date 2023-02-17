<script setup>
  const getMoviesByGenres = await useMoviesApi().getMoviesD(`discover/movie`, 1, `action`);
  const {id} = useRoute().params;
</script>
<template>
 <span>genre</span>
</template>
