<script setup>
  const getGenres = await useMoviesApi().getGenres();
  const genres = ref();
  genres.value = getGenres.data;

</script>
<template>
  <main>
    <PageHeader title="Genre Index"></PageHeader>
    <section class="py-10 container mx-auto">
      <div class="flex flex-wrap gap-5">
        <NuxtLink 
          v-for="genre in genres.value.genres"
          :key="genre.id"
          :to="{query: {id: genre.id}, path:`/genres/${genre.name.toLowerCase()}`}"
          class="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          >#{{ genre.name }}</NuxtLink>
      </div>
    </section>
  </main>
</template>



<style lang="scss" scoped>
  
</style>