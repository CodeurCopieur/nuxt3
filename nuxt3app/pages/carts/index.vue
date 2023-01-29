<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in carts" :key="p.id">
      <NuxtLink :to="`/carts/${p.id}`">
        <span>Carts id {{ p.id }}</span><br>
        <span>User id {{ p.userId }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
 const{ data:carts } =  await useFetch('https://fakestoreapi.com/carts');
</script>