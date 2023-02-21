<script setup>
  const props = defineProps(["title"]);
</script>

<template>
  <section class="hero">
    <div class="container xl:mx-auto max-w-7xl sm:mx-4 mx-4">
      <h1 v-if="props.title" class="text-4xl font-bold">{{ props.title }}</h1>
    </div>
  </section>
</template>

<style>
  .hero {
    @apply py-16 bg-[#111827];
  } 
</style>