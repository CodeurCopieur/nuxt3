<script setup>
  const { items, type } = defineProps(['items', 'type']);
</script>
<template>

    <NuxtLink 
          v-for="(item, i) in items"
          :key="i" 
          :to="{ path:`/${type}/${item.id}`}">
        <div class=" shadow-lg border border-gray-700 component-app__wrap-movieCard relative overflow-hidden">

            <picture>
              <img v-if="type === 'movie' || type === 'tv'" :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" :alt="item.original_title || item.original_name">
              <img v-else :src="`https://image.tmdb.org/t/p/original/${item.profile_path}`" :alt="item.name || item.original_name">
            </picture>

            <div class="component-app__wrap-movieCard-info">

              <span class="mt-8 text-xs text-lg inline-block">{{ useMoviesApi().showYear(`${item.release_date}`) || useMoviesApi().showYear(`${item.first_air_date}`) || item.known_for_department }}</span><br>

              <div class="precent-bar mt-10" v-if="type === 'movie' && item.popularity > 1 || type === 'tv' && item.popularity > 1 ">
                <span class="precent-per inline-block" 
                  :class="useMoviesApi().getColor(`${item.vote_average}`)"
                  :style="{'width':useMoviesApi().percent(`${item.vote_average}`)+'%'}">
                  <span 
                    class="percent-tooltip inline-block" 
                    :class="useMoviesApi().getColor(`${item.vote_average}`)">{{ useMoviesApi().percent(`${item.vote_average}`) }}</span>
                </span>
              </div>

              <div class="precent-bar mt-10" v-else-if="type === 'person' && item.popularity > 1">
                <span 
                  :class="useMoviesApi().getColor(`${parseInt(item.popularity)}`)"
                  :style="{'width':`${parseInt(item.popularity)}`+'%'}"
                  class="precent-per inline-block" >
                  <span class="percent-tooltip inline-block">{{ parseInt(item.popularity) }} lol</span>
                </span>
              </div>

              <div v-else class="mb-6">
                <div class="percent-tooltip inline-block text-xs">0</div>
                  <div class="precent-bar">
                    <span class="precent-per inline-block" :style="{'width':0+'%'}"></span>
                  </div>
              </div>

            </div>
        </div>
        <span class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
          <span class="relative text-white">{{ item.original_title || item.original_name || item.name }}</span>
        </span>
      </NuxtLink>
</template>