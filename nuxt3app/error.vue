<template>

<NuxtLayout name="default">
  <section>
    <div class="my-7 max-w-sm mx-auto text-center card">
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl">Ooops.</p>
      <p class="mt-7">{{ error.message }}</p>
      <button class="btn my-7">Go Home ...</button>
  </div>
  </section>
 </NuxtLayout>
</template>

<script setup>
  defineProps(['error']);
</script>