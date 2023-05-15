<script setup>
  // const picked = ref('movie');

  const state = reactive({
    search: '',
    picked: 'movie',
    options: [
      { label: 'Movie', value: 'movie' },
      { label: 'Person', value: 'person' },
      { label: 'Tv', value: 'tv' }
    ],
    allItems: [],
    page: 1
  });

const handleOptionChange = (event) => {
  state.picked = event.target.value
};

const getClassForOption = (optionValue) => {
  return state.picked === optionValue ? 'border-b-4 border-blue-800' : ''
};


async function handleBlur(event) {
  event.preventDefault();
  
  state.allItems = await useMoviesApi().search(state.picked, state.search, 1);
  
  if (!state.search) {
    state.allItems = []
  }
}
</script>

<template>
  <section class="">
    <ul class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 flex justify-center wrapper_li">
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
          @keypress.enter="handleBlur"
          type="text" class="w-full border-b-4 border-blue-800 outline-none p-2 text-blue-800 text-center" style="line-height: 1.75rem;" 
          placeholder="Que cherchez-vous ?" 
          v-model="state.search" />
      </form>
    </ul>

    <div 
      v-if="state.allItems.length"
      class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

      <SearchCard :items="state.allItems" :type="state.picked"></SearchCard>

    </div>
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