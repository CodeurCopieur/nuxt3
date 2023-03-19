<script setup>
    const { type } = defineProps(['type']);
    const movies = await useMoviesApi().getMoviesD(`discover/${type}`, 1, null);
</script>

<template>
  <NuxtLink
    v-for="(movie, i) in movies" :key="i" 
    :to="{ path:`/${type}/${movie.id}`}">
      <div class=" shadow-lg border border-gray-700 component-app__wrap-movieCard relative overflow-hidden">
          <picture>
            <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.original_title || movie.original_name">
          </picture>
          <div class="component-app__wrap-movieCard-info">
            <span class="mt-8 text-xs text-lg inline-block">{{ useMoviesApi().showYear(`${movie.release_date}`) || useMoviesApi().showYear(`${movie.first_air_date}`) }}</span><br>
            <div class="precent-bar mt-8">
              <span class="precent-per inline-block" :style="{'width':useMoviesApi().percent(`${movie.vote_average}`)+'%'}"  v-if="useMoviesApi().percent(`${movie.vote_average}`) > 1">
                <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${movie.vote_average}`) }} %</span>
              </span>
              <span v-else class="precent-per inline-block">0 %</span>
            </div>
          </div>
      </div>
      <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
        <span class="relative text-white">{{ movie.original_title || movie.original_name }}</span>
        </span>
  </NuxtLink>
</template>