<script setup>
  const query = useRoute().query;

</script>
<template>
  <div>
    <PageHeader :title="query.name.toUpperCase()"></PageHeader>
    <MovieOrTvCardGenre type="movie"/>
  </div>
</template>
