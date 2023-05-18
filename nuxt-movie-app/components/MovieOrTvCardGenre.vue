<script setup>

  const router = useRouter();
  const {id} = useRoute().params;
  const {name, type} = useRoute().query;
  const page = ref(1);
  const movies = ref([]);
  const mainOffsetTRef = ref(null)

  movies.value = await useMoviesApi().getMoviesD(`discover/${type}`, page.value, `${id}`);

 const mainOffsetT = mainOffsetTRef.value


  if (name === '' || type === '' || id === ''  && type === ''   && page && name) {
    router.push('/genres')
  } else {
    router.push({query: {type: type, name: name, page: page.value}, path:`/genres/${id}`})
  }
    


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
    router.push({query: {type: type, name: name, page: page.value}, path:`/genres/${id}`})
    movies.value = await useMoviesApi().getMoviesD(`discover/${type}`, page.value, `${id}`)
  };

      async function handleBlur() {
      if(page.value === "" || page.value === null || page.value > 500) {

        page.value = 1
        movies.value = ''
        router.push({query: {type: type, name: name, page: 1}, path:`/genres/${id}`})
        movies.value = await useMoviesApi().getMoviesD(`discover/${type}`, 1, `${id}`)
      } else {
        movies.value = ''
        router.push({query: {type: type, name: name, page: page.value}, path:`/genres/${id}`})
        movies.value = await useMoviesApi().getMoviesD(`discover/${type}`, page.value, `${id}`)
      }
    }

</script>
<template ref="mainOffsetTRef">

<div class="container max-w-xs mx-auto pagination">
    <div class="flex justify-center items-center">
      <span class="my-5 w-full" @click="pageCall(false)" v-if="page > 1">P</span>  
      <input class="my-5 w-16 border-b-4 border-blue-800 current text-center outline-none" 
        @input="handleBlur" 
        v-model.number="page" min="1" max="500" type="number" style="color: #111827"/>  
      <span class="my-5 w-full" @click="pageCall(true)" >N</span>
      
    </div>
</div>   

<div 
  v-if="movies.length"
  class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

  <MovieOrTvOrPersonCard :items="movies" :type="type"></MovieOrTvOrPersonCard>
</div>
<!-- <div class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
   <NuxtLink
      v-for="(movie, i) in movies" :key="i" 
      :to="{ path:`/${type}/${movie.id}`}">
        <div class=" shadow-lg border border-gray-700 component-app__wrap-movieCard relative overflow-hidden">
            <picture>
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.original_title">
            </picture>
            <div class="component-app__wrap-movieCard-info">
              <span class="mt-8 text-xs text-lg inline-block">{{ useMoviesApi().showYear(`${movie.release_date}`) || useMoviesApi().showYear(`${movie.first_air_date}`) }}</span><br>
              <div class="precent-bar mt-10" v-if="useMoviesApi().percent(`${movie.vote_average}`) > 1">
              <span class="precent-per inline-block" :style="{'width':useMoviesApi().percent(`${movie.vote_average}`)+'%'}">
                <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${movie.vote_average}`) }}</span>
              </span>
              </div>
              <div v-else>
                <div class="percent-tooltip inline-block text-xs">0</div>
                <div class="precent-bar">
                  <span class="precent-per inline-block" :style="{'width':0}"></span>
                </div>
              </div>
            </div>
        </div>
        <span class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
          <span class="relative text-white">{{ movie.original_title ||movie.original_name }}</span>
          </span>
    </NuxtLink>

    
</div> -->


</template>