<template>
  <section>
    <head>
      <Title>Product : {{ product.title }} | Nuxt 3 Demo</Title>
      <Meta name="description" :content="product.description" />
    </head>
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