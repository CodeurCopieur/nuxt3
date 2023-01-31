<template>
  <section>
    <div v-if="products" class="grid grid-cols-4 gap-5">
      <div v-for="(item, i) in products" :key="i">
        <ProductCard :product="item" />
      </div>
    </div>
  </section>
 
</template>

<script setup>
  
  const runTimeConfig = useRuntimeConfig()
//   const products = ref([]);

    // fetch(`${runTimeConfig.public.baseUrl}/products`, {
    //   headers: {
    //     Authorization: `${runTimeConfig.public.appSecret}`,
    //   },
    // }).then(res=>res.json()).then(data=>products.value=data);

    const{ data:products } =  await useFetch(`${runTimeConfig.public.baseUrl}/products`);

    useHead({
    title: 'Products | Nuxt 3 Demo',
    meta: [
      {name: "description", content: "Ceci est la page de products de l'application Nuxt 3"},
      {property: "og:title", content: "C'est un titre og"}],
    });
</script>