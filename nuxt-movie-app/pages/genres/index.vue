<script setup>
  const getGenres = await useMoviesApi().getGenres();
  const genres = getGenres.data.genres;

</script>
<template>
  <div>
    <PageHeader title="Movie : Genre"></PageHeader>
    <section class="py-10 container max-w-7xl mx-auto">
      <div class="flex flex-wrap gap-5">
        <NuxtLink 
        class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          v-for="genre in genres"
          :key="genre.id"
          :to="{query: {name: genre.name.toLowerCase(), page: 1}, path:`/genres/${genre.id}`}"
          >
          <span class="relative text-white">#{{ genre.name }}</span>
          </NuxtLink>
      </div>
    </section>
  </div>
</template>