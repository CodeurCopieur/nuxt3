<template>
  <section>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus molestias est odit exercitationem dolorem ab sit iusto corrupti quasi earum!</p>
  </section>
</template>

<script setup>
  const {id} = useRoute().params
</script>