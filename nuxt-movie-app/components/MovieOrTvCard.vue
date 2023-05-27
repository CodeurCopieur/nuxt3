<script setup>
    const { type } = defineProps(['type']);
    const mainOffsetTRef = ref(null)
    const mainOffsetT = mainOffsetTRef.value;
    const page = ref(1);

    const movies = ref([]);
    movies.value = await useMoviesApi().getMovies(`discover/${type}`, 1);

    async function pageCall(resBool) {
      window.scrollTo({
        top: mainOffsetT,
        behavior: "smooth"
      })

      if (resBool) {
        page.value++
      } else {
        page.value--
      }
    
      movies.value = ''
      movies.value = await useMoviesApi().getMovies(`discover/${type}`, page.value)
    };

    async function handleBlur() {
      if(page.value === "" || page.value === null || page.value > 500) {

        page.value = 1
        movies.value = ''
        movies.value = await useMoviesApi().getMovies(`discover/${type}`, 1)
      } else {
        movies.value = ''
        movies.value = await useMoviesApi().getMovies(`discover/${type}`, page.value)
      }
    }
</script>

<template ref="mainOffsetTRef">

  <div class="container max-w-xs mx-auto pagination">
      <div class="flex justify-center items-center">
        <span class="my-5" @click="pageCall(false)" v-if="page > 1">P</span>  
        <input class="my-5 w-16 border-b-4 border-blue-800 current text-center outline-none" 
          @input="handleBlur" 
          v-model.number="page" min="1" max="500" type="number" style="color: #111827"/>  
        <span class="my-5" @click="pageCall(true)" >N</span>
        
      </div>
  </div>
  <div 
    v-if="movies.length"
    class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

    <MovieOrTvOrPersonCard :items="movies" :type="type" />
  </div>
</template>