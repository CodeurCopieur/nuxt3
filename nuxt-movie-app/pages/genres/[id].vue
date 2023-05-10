<script setup>
  const query = useRoute().query;
</script>
<template>
  <div>
    <PageHeader :title="query.name.toUpperCase()"  type="movie"></PageHeader>

  <section>
    <MovieOrTvCardGenre type="movie" />
  </section>
  
  </div>
</template>
