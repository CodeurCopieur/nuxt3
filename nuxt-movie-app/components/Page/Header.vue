<script setup>
  const props = defineProps(["title", "type"]);
</script>

<template>
  <section class="hero">
    <div class="mx-4">
      <h1 v-if="props.type" class="text-4xl font-bold text-center">{{ props.title }} - {{ props.type }}</h1>
      <h1 v-else class="text-4xl font-bold text-center">{{ props.title }}</h1>
    </div>
  </section>
</template>

<style>
  .hero {
    @apply pt-14 bg-[#111827];
  } 
</style>