<script setup>
  const props = defineProps(["id"]);
</script>
<template>
   <section class="container mx-auto py-10 sm:py-16">
    <!-- Post Title -->
    <div class="text-center mb-5">
      <h1 class="text-3xl sm:text-5xl font-bold">
        h1: {{ props.id }}
      </h1>
    </div>
    <!-- Post Meta -->
    <div class="text-center mb-10">
      <span class="mr-3">text1</span>
      <span>text2</span>
    </div>
    <!-- Post Image -->
    <div class="w-full h-[250px] h-[400px] relative shadow-xl rounded overflow-hidden mb-10">
      <img 
        src="https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" 
        alt=""
        class="absolute w-full h-full object-cover"/>
    </div>
    <!-- Post Content -->
  </section>
</template>


<style lang="scss" scoped>
  
</style>