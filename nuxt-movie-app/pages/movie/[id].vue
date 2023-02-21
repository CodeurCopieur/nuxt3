<script setup>
  const {id} = useRoute().params;
  const getDetails = await useMoviesApi().getDetails(`movie/${id}`);
  const movie  = ref();
  movie.value = getDetails;
</script>

<template>
    <MovieDetails :movie="movie" />
</template>