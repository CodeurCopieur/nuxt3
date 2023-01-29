<template>
  <div>
    <ul v-if="products">
    <li v-for="(item, i) in products" :key="i">
      <span>{{ item?.title }}</span><br>
      <NuxtLink :to="`products/${item.id}`">Product {{item.id }}</NuxtLink>
      </li>
  </ul>
  </div>
 
</template>

<script setup>
  
  const runTimeConfig = useRuntimeConfig()
  const products = ref([]);

  onMounted(() => {
    fetch(`${runTimeConfig.public.baseUrl}/products`, {
      headers: {
        Authorization: `${runTimeConfig.public.appSecret}`,
      },
    }).then(res=>res.json()).then(data=>products.value=data);

  });
</script>