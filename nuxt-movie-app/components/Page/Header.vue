<script setup>
  const props = defineProps(["title"]);
</script>

<template>
  <section class="hero">
    <div class="container mx-auto">
      <h1 v-if="props.title" class="text-4xl font-bold">{{ props.title }}</h1>
    </div>
  </section>
</template>

<style>
  .hero {
    @apply py-16 bg-gray-100;
  } 
</style>