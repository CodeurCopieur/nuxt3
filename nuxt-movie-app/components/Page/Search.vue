<script setup>
  const picked = ref('movie');
</script>

<template>
  <section class="container max-w-7xl max-w-2xl mx-auto px-4 py-8">
    <ul class="flex justify-center">
      <li class="flex-auto">
        <input type="radio" id="movie" value="movie" v-model="picked" />
        <label for="movie" :class="{'border-b-4 border-indigo-800' : picked === 'movie' }" class="text-lg">Movie</label>
      </li>
      <li class="flex-auto">
        <input type="radio" id="person" value="person" v-model="picked" />
        <label for="person" :class="{'border-b-4 border-indigo-800' : picked === 'person' }" class="text-lg">Person</label>
      </li>
      <li class="flex-auto">
        <input type="radio" id="tv" value="tv" v-model="picked" />
        <label for="tv" :class="{'border-b-4 border-indigo-800' : picked === 'tv' }" class="text-lg">Tv</label>
      </li>
    </ul>
  </section>
</template>

<style scoped>

  label {
    cursor: pointer;
  }
  
  input[type="radio"] {
    opacity: 0;
    visibility: hidden;
  }
</style>