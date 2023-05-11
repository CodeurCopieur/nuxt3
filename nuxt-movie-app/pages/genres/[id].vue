<script setup>
  const query = useRoute().query;
</script>
<template>
  <div>
    <PageHeader :title="query.name.toUpperCase()"></PageHeader>

  <section>
    <MovieOrTvCardGenre />
  </section>
  
  </div>
</template>
