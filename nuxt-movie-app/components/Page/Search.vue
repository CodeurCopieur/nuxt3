<script setup>
  // const picked = ref('movie');

  const state = reactive({
  picked: 'movie',
  options: [
    { label: 'Movie', value: 'movie' },
    { label: 'Person', value: 'person' },
    { label: 'Tv', value: 'tv' }
  ]
});

const handleOptionChange = (event) => {
  state.picked = event.target.value
  console.log(event);
};

const getClassForOption = (optionValue) => {
  return state.picked === optionValue ? 'border-b-8 border-indigo-800' : ''
};
</script>

<template>
  <section class="container max-w-7xl max-w-2xl mx-auto px-4 py-8">
    <ul class="flex justify-center wrapper_li">
      <li class="flex-auto text-center" 
          v-for="(option, index) in state.options" 
          :key="index">
        <label :class="getClassForOption(option.value)" class="text-lg">
          <input type="radio" id="movie" 
              :value="option.value" 
              v-model="state.picked" 
              @change="handleOptionChange"  />
        {{ option.label }}</label>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  .wrapper_li {
    overflow: hidden;
    position: relative;
  }

  .wrapper_li li label input {
    position: absolute;
    top: 0;
  }

  label {
    cursor: pointer;
  }
  
  input[type="radio"] {
    opacity: 0;
    visibility: hidden;
  }
</style>