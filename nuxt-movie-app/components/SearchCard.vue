<script setup>
  const { items, type } = defineProps(['items', 'type']);
</script>
<template>

  <template v-if="type === 'movie' || type ==='tv'">
    <NuxtLink 
          v-for="(item, i) in items"
          :key="i" 
          :to="{ path:`/${type}/${item.id}`}">
        <div class=" shadow-lg border border-gray-700 component-app__wrap-movieCard relative overflow-hidden">
            <picture>
              <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" :alt="item.original_title || item.original_name">
            </picture>
            <div class="component-app__wrap-movieCard-info">
              <span class="mt-8 text-xs text-lg inline-block">{{ useMoviesApi().showYear(`${item.release_date}`) || useMoviesApi().showYear(`${item.first_air_date}`) }}</span><br>
              <div class="precent-bar mt-8">
                <span class="precent-per inline-block" :style="{'width':useMoviesApi().percent(`${item.vote_average}`)+'%'}"  v-if="useMoviesApi().percent(`${item.vote_average}`) > 1">
                  <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${item.vote_average}`) }} %</span>
                </span>
                <span v-else class="precent-per inline-block">0 %</span>
              </div>
            </div>
        </div>
        <span class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
          <span class="relative text-white">{{ item.original_title || item.original_name }}</span>
        </span>
      </NuxtLink>
  </template>
  <template v-else-if="type === 'person'">
    <NuxtLink 
          v-for="(item, i) in items"
          :key="i" 
          :to="{ path:`/${type}/${item.id}`}">
          <div class=" shadow-lg border border-gray-700 component-app__wrap-movieCard relative overflow-hidden">
            <picture>
              <img :src="`https://image.tmdb.org/t/p/original/${item.profile_path}`" :alt="item.name || item.original_name">
            </picture>

            <div class="component-app__wrap-movieCard-info">
              <span class="mt-8 text-xs text-lg inline-block">{{ item.known_for_department }}</span><br>
              <div class="precent-bar mt-8">
                <span class="precent-per inline-block" :style="{'width':item.popularity+'%'}"  v-if="item.popularity > 1">
                  <span class="percent-tooltip inline-block">{{ item.popularity }} %</span>
                </span>
                <span v-else class="precent-per inline-block">0 %</span>
              </div>
            </div>
          </div>

          <span class="before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-[#111827] relative inline-block before:border before:border-gray-700 ">
            <span class="relative text-white">{{ item.name || item.original_name }}</span>
        </span>
    </NuxtLink>
  </template>

</template>