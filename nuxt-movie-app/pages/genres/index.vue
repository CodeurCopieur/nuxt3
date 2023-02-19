<script setup>
  const getGenres = await useMoviesApi().getGenres();
  const genres = ref();
  genres.value = getGenres.data;

</script>
<template>
  <div>
    <PageHeader title="Genre Index"></PageHeader>
    <section class="py-10 container mx-auto">
      <div class="flex flex-wrap gap-5">
        <NuxtLink 
        class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          v-for="genre in genres.value.genres"
          :key="genre.id"
          :to="{query: {name: genre.name.toLowerCase()}, path:`/genres/${genre.id}`}"
          >
          <span class="relative text-white">#{{ genre.name }}</span>
          </NuxtLink>
      </div>
    </section>
  </div>
</template>