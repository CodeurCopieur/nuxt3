<script setup>
  const {id} = useRoute().params;
</script>

<template>
    <MovieDetails :id="id" />
</template>