// <script setup>
//   const loading = ref(false);
//   const start = () => {
//     loading.value = true
//   };
//   const finish = () => {
//     loading.value = false
//   };

//   onMounted(() => {
//     start();
//     setTimeout(() => finish(), 500);
//   });

  
// </script>
<template>
 <div class="min-h-screen">
  <Loading v-if="loading"/>
  <Header/>
  <main>
    <slot />
  </main>
  <Footer/>
 </div>
</template>
