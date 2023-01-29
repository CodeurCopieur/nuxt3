<script setup>
const route = useRoute();
console.log(route);
</script>
<template>
  <div>
    Page dynamic {{ route.params.name }}
  </div>
</template>