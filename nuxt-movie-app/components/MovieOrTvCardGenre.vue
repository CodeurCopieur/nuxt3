<script setup>
  const { type } = defineProps(['type']);
  const {id} = useRoute().params;
  const page = ref(1);
  const movies = await useMoviesApi().getMoviesD(`discover/movie`, page.value, `${id}`);

  console.log(movies);
  async function sendChange(e) {
    page.value++;
    console.log(await useMoviesApi().getMoviesD(`discover/movie`, page.value, `${id}`));

  };
</script>

<template>
  <section class="container max-w-7xl max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl  grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    <NuxtLink
      v-for="(movie, i) in movies" :key="i" 
      :to="{ path:`/${type}/${movie.id}`}">
        <div class=" shadow-lg border border-gray-700 component-app__wrap-movieCard relative overflow-hidden">
            <picture>
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.original_title">
            </picture>
            <div class="component-app__wrap-movieCard-info">
              <span class="mt-8 text-xs text-lg inline-block">{{ useMoviesApi().showYear(`${movie.release_date}`) || useMoviesApi().showYear(`${movie.first_air_date}`) }}</span><br>
              <div class="precent-bar mt-8">
                <span class="precent-per inline-block" :style="{'width':useMoviesApi().percent(`${movie.vote_average}`)+'%'}">
                  <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${movie.vote_average}`) }} %</span>
                </span>
              </div>
            </div>
        </div>
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
          <span class="relative text-white">{{ movie.original_title ||movie.original_name }}</span>
          </span>
    </NuxtLink>
  </section>
  <button class="my-5 w-full" @click="sendChange" >+</button>
</template>