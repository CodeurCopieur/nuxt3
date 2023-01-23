<script setup>
const route = useRoute();
</script>
<template>
  <div>
    Page dynamic {{ route.params.name }}
  </div>
</template>