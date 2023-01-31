<template>
  <section>
    <ProductDetails :product="product" />
  </section>
</template>

<script setup>
  const {id} = useRoute().params;
  const runTimeConfig = useRuntimeConfig();

   const uri = `${runTimeConfig.public.baseUrl}/products/`+id;

   const { data:product } = await useFetch(uri, {key: id});

   if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Produit non trouvé !', fatal: true})
   }
</script>