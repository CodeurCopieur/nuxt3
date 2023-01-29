<template>
  <div>
    <ul v-if="products" class="grid grid-cols-4 gap-5">
    <li v-for="(item, i) in products" :key="i">
      <span>{{ item?.title }}</span><br>
      <NuxtLink :to="`products/${item.id}`" class="btn">Product {{item.id }}</NuxtLink>
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