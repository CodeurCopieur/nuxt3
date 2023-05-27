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

              <div 
                 v-if="type !== 'person' && item.vote_average >= 1" 
                 class="precent-bar mt-6">
                <span 
                  :class="useMoviesApi().getColor(`${item.vote_average}`)"
                  :style="{'width':useMoviesApi().percent(`${item.vote_average}`)+'%'}"
                   class="precent-per inline-block">
                  <span
                    :class="useMoviesApi().getColor(`${item.vote_average}`)" 
                    class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${item.vote_average}`) }}</span>
                </span>
              </div>
              <div 
                v-else-if="type !== 'person' && item.vote_average === 0"
                class="precent-bar mt-6">
                <span class="precent-per nr inline-block bg-red-600" style="width:0%;"><span class="percent-tooltip inline-block bg-red-600 nr" style="right: -25px; top: -12px;">NR</span></span>
              </div>
              <!-- <div 
                  v-else-if="item.popularity === 0" 
                  class="precent-bar mt-6">
                  <span class="precent-per nr inline-block bg-red-600" style="width:0%;">
                    <span class="percent-tooltip inline-block bg-red-600 nr" style="right: -25px; top: -12px;">NR lol</span>
                  </span>
              </div> -->

            </div>
        </div>
        <span class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
          <span class="relative text-white">{{ item.original_title || item.original_name || item.name }}</span>
        </span>
      </NuxtLink>
</template>