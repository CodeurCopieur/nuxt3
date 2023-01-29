<template>
  <section class="container mx-auto p-4">
    <p>Product details for {{ product.id }}</p>
    <p>{{ product.title }}</p>
    <p>{{ product.price }} $</p>
  </section>
</template>

<script setup>
  const {id} = useRoute().params;
  const runTimeConfig = useRuntimeConfig();

   const uri = `${runTimeConfig.public.baseUrl}/products/`+id;

   const { data:product } = await useFetch(uri, {key: id});
</script>