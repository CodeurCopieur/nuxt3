<script setup>
  const query = useRoute().query;
</script>
<template>
  <div>
    <PageHeader :title="query.name.toUpperCase()"></PageHeader>
    
  <section class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl  grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    <MovieOrTvCardGenre type="movie" />
  </section>
  
  </div>
</template>
