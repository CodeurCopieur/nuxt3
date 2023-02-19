<script setup>
  const {id} = useRoute().params;
  const query = useRoute().query;
  const getMoviesByGenres = await useMoviesApi().getMoviesD(`discover/movie`, 1, `${id}`);
  const allMovies  = ref();
  allMovies.value = getMoviesByGenres;

</script>
<template>
  <div>
    <PageHeader :title="query.name.toUpperCase()"></PageHeader>
    <section class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl  grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      <MovieCard :movies="allMovies"/>
    </section>
  </div>
</template>
