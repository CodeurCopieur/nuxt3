<script setup>
  // const picked = ref('movie');

  const state = reactive({
    search: '',
    picked: 'movie',
    options: [
      { label: 'Movie', value: 'movie' },
      { label: 'Person', value: 'person' },
      { label: 'Tv', value: 'tv' }
    ]
  });

const handleOptionChange = (event) => {
  state.picked = event.target.value
};

const getClassForOption = (optionValue) => {
  return state.picked === optionValue ? 'border-b-4 border-indigo-800' : ''
};


async function handleBlur(event) {
  console.log(event);
}
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

      <form class="mt-6">
        <input 
          @input="handleBlur"
          type="text" class="w-full border-b-4 border-indigo-800 outline-none p-2 text-indigo-800 text-center" style="line-height: 1.75rem;" 
          placeholder="Que cherchez-vous ?" 
          v-model="state.search" />
      </form>
    </ul>
  </section>
</template>

<style scoped>
  .wrapper_li form {
    flex: 1 0 100%;
  }
  .wrapper_li {
    overflow-y: hidden;
    position: relative;

    display: flex;
    flex-wrap: wrap;
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