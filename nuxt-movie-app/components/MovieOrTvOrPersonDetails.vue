<script setup>
  const { type } = defineProps(['type']);
  const {id} = useRoute().params;

  const data = await useMoviesApi().getDetails(`${type}`, `${id}`);
  var infos = await useMoviesApi().credits(`${type}`, `${id}`);

</script>
<template>
  <section class="pb-10 sm:pb-16">
    <!-- Post Title -->
    <!-- <div class="text-center mb-10">
      <h1 class="text-3xl sm:text-5xl font-bold">
        {{ data.title || data.original_name || data.name }}
      </h1>
    </div> -->
    <!-- Post Meta -->
    <!-- <div class="text-center mb-8">
      <span v-if="type === 'movie' || type ==='tv'">{{ useMoviesApi().showDate( `${data.release_date || data.first_air_date}`) }}</span>
      <span v-else>{{ data.known_for_department }}</span>
    </div> -->
    <!-- Post Image -->
    <div class="postImage w-full rounded mb-10 relative">
      <div class="postImage-bck h-[350px] sm:h-[550px] relative overflow-hidden">
        <div class="postImage__aspect-ratio"></div>
        <picture>
          <img v-if="type === 'movie' || type ==='tv'"
          :src="`https://image.tmdb.org/t/p/original${data.backdrop_path}`"
          :alt="`${data.original_title || data.original_name}`" />
          <img v-else
          :src="`https://image.tmdb.org/t/p/original${data.profile_path}`"
          :alt="`${data.name}`" />
        </picture>
      </div>
      <div class="container max-w-7xl mx-auto postImage-pst">
        <div class="postImage-cover relative">
          <div class="postImage-cover__aspect-ratio"></div>
            <picture>
              <img 
                v-if="type === 'movie' || type ==='tv'"
                :src="`https://image.tmdb.org/t/p/original${data.poster_path}`"
                :alt="`${data.original_title || data.original_name}`">
              <img v-else :src="`https://image.tmdb.org/t/p/original${data.profile_path}`"
                :alt="`${data.name}`">
            </picture>
        </div>
        <div class="postImage-pst__info h-full px-4">
          <div>
            <h4 class="text-xs text-2xl sm:text-3xl font-bold mb-6">{{ data.title || data.original_name || data.name }}</h4>

            <ul class="flex flex-nowrap mb-6">
                <li 
                    v-for="(title, i) in data.genres" :key="i"
                    class="bg-[#111827] border-b-4 border-blue-800 px-1 py-0"
                    :class="{ 'mr-1' : i != data.genres.length -1  }"> 
                    <NuxtLink 
                        :to="{query: {type: type , name: title.name.toLowerCase(), page: 1}, path:`/genres/${title.id}`}"
                        class="text-base">{{ title.name }}</NuxtLink>
                </li>
            </ul>

            <div 
              v-if="type === 'movie' && data.vote_average > 1 || type ==='tv' && data.vote_average > 1" 
              class="precent-bar mb-6">
              <span class="precent-per inline-block" 
                :class="useMoviesApi().getColor(`${data.vote_average}`)"
                :style="{'width':useMoviesApi().percent(`${data.vote_average}`)+'%'}">
                <span class="percent-tooltip inline-block" 
                :class="useMoviesApi().getColor(`${data.vote_average}`)">{{ useMoviesApi().percent(`${data.vote_average}`) }}</span>
              </span>
            </div>

            <!-- <div v-else-if="type === 'person' && data.popularity > 1"  class="precent-bar mb-6">
              <span 
                :class="useMoviesApi().getColor(`${parseInt(data.popularity)}`)"
                :style="{'width':`${parseInt(data.popularity)}`+'%'}"
                class="precent-per inline-block">
                <span class="percent-tooltip inline-block"
                :class="useMoviesApi().getColor(`${parseInt(data.popularity)}`)">{{ parseInt(data.popularity) }}</span>
              </span>
            </div> -->

            <div v-else-if="type === 'movie' && data.vote_average  === 0 || type ==='tv' && data.vote_average === 0" class="mb-6">
              <div class="percent-tooltip inline-block text-xs">0</div>
              <div class="precent-bar">
                <span class="precent-per inline-block" :style="{'width':0+'%'}"></span>
              </div>
            </div>

            <p class="mt-8 text-sm text-base mb-6">{{ data.overview }}</p>

            <div class="recommended mb-12" v-if="type === 'movie' || type === 'tv'">
              <h2 class="text-white-600 mb-6">
                <span class="border-b-4 border-blue-800 text-lg">Acteurs</span>
              </h2>
                <MovieOrTvSlider :items="infos.cast"/> 
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- Post Content -->
  </section>
</template> 