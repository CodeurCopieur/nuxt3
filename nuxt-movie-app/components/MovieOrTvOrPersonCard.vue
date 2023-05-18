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
              <img v-if="type === 'movie' || type ==='tv'" :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" :alt="item.original_title || item.original_name">
              <img v-else :src="`https://image.tmdb.org/t/p/original/${item.profile_path}`" :alt="item.name || item.original_name">
            </picture>

            <div class="component-app__wrap-movieCard-info">

              <span class="mt-8 text-xs text-lg inline-block">{{ useMoviesApi().showYear(`${item.release_date}`) || useMoviesApi().showYear(`${item.first_air_date}`) || item.known_for_department }}</span><br>

              <div class="precent-bar mt-10" v-if="type === 'movie' || type ==='tv'">
                <span class="precent-per inline-block" 
                  :class="useMoviesApi().getColor(`${parseInt(item.vote_average)}`)"
                  :style="{'width':useMoviesApi().percent(`${item.vote_average}`)+'%'}"     
                  v-if="useMoviesApi().percent(`${item.vote_average}`) > 1">
                  <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${item.vote_average}`) }}</span>
                </span>
                <span v-else class="precent-per inline-block" :style="{'width':0}">
                  <span class="percent-tooltip inline-block">0</span>
                </span>
              </div>

              <div class="precent-bar mt-10" v-if="type === 'person'">
                <span class="precent-per inline-block" :style="{'width':parseInt(item.popularity)+'%'}"  v-if="item.popularity > 1">
                  <span class="percent-tooltip inline-block">{{ parseInt(item.popularity) }}</span>
                </span>
                <span v-else class="precent-per inline-block" :style="{'width':0}">
                  <span class="percent-tooltip inline-block">0</span>
                </span>
              </div>

            </div>
        </div>
        <span class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
          <span class="relative text-white">{{ item.original_title || item.original_name || item.name }}</span>
        </span>
      </NuxtLink>
</template>