<script setup>
  const getGenres = await useMoviesApi().getGenres(`movie`);
  const getGenresTv = await useMoviesApi().getGenres(`tv`);
  const genresMovie = getGenres.data.genres;
  const genresTv = getGenresTv.data.genres;


</script>
<template>
  <div>
    <PageHeader title="Genre" type="Movie"></PageHeader>

    <section class="py-10 container max-w-7xl mx-auto">
      <div class="flex flex-wrap gap-5">
        <NuxtLink 
        class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-blue-800 relative inline-block block py-2 px-4 bg-gray-300 hover:bg-gray-400"
          v-for="genre in genresMovie"
          :key="genre.id"
          :to="{query: {type: 'movie', name: genre.name.replace(/%/g, '').toLowerCase(), page: 1}, path:`/genres/${genre.id}`}"
          >
          <span class="relative text-white">#{{ genre.name }}</span>
          </NuxtLink>
      </div>
    </section>

    <PageHeader title="Genre" type="TV"></PageHeader>

    <section class="py-10 container max-w-7xl mx-auto">
      <div class="flex flex-wrap gap-5">
        <NuxtLink 
        class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-blue-800 relative inline-block block py-2 px-4 bg-gray-300 hover:bg-gray-400"
          v-for="genre in genresTv"
          :key="genre.id"
          :to="{query: {type: 'tv', name: genre.name.replace(/%/g, '').toLowerCase(), page: 1}, path:`/genres/${genre.id}`}"
          >
          <span class="relative text-white">#{{ genre.name }}</span>
          </NuxtLink>
      </div>
    </section>
  </div>
</template>