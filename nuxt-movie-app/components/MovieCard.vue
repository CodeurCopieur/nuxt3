<script setup>
    const { movies } = defineProps(['movies']);
    const resMovies = ref(movies.data.results);
</script>

<template>
  <NuxtLink 
    v-for="(movie, i) in resMovies" :key="i" 
    :to="{ path:`/movie/${movie.id}`}"
    class="shadow-lg border border-gray-700 rounded">
      <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">{{ movie.original_title }}</span>
    </span>
  </NuxtLink>
</template>