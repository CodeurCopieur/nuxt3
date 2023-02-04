<script setup>
  const { data } = await useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cc4c125990f5777406886df6fdb3e266');
</script>
<template>
  <Hero :movies="data"/>
</template>
