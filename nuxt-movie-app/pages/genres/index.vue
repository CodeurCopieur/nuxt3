<script setup></script>
<template>
  <main>
    <PageHeader title="Genre Index"></PageHeader>
    <section class="py-10 container mx-auto">
      <div class="flex flex-wrap gap-5">
        <NuxtLink 
          v-for="i in 20"
          :key="i"
          to="/genres/1234"
          class="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          >#GenreName{{ i }}</NuxtLink>
      </div>
    </section>
  </main>
</template>



<style lang="scss" scoped>
  
</style>