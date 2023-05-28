<script setup>
  const { type } = defineProps(['type']);
  const {id} = useRoute().params;
  
  const data = await useMoviesApi().getDetails(`${type}`, `${id}`);

  const state = reactive({
    infos: [],
    recommendations: [],
    personCreditsMovies: [],
    personCreditsTv: []
  })
  

  if (type === 'movie' || type ==='tv') {
    state.infos = await useMoviesApi().credits(`${type}`, `${id}`)
    state.recommendations = await useMoviesApi().recommendations(`${type}`, `${id}`)

  } else if (type === 'person') {
    state.personCreditsMovies = await useMoviesApi().personCredits('movie', `${id}`)
    state.personCreditsTv = await useMoviesApi().personCredits('tv', `${id}`)
  }
  

</script>
<template>
  <section class="pb-10 sm:pb-16">
    <div class="postImage w-full rounded mb-10 relative">
      <div 
      class="postImage-bck relative overflow-hidden"
      :class="{'h-[350px] sm:h-[550px]': type === 'person'}">
        <div class="postImage__aspect-ratio"></div>
        <picture>

          <img v-if="type === 'movie' || type ==='tv' || type === 'person'"
          :src="`https://image.tmdb.org/t/p/original${data.backdrop_path || data.profile_path}`"
          :alt="`${data.original_title || data.original_name || data.name}`" />

        </picture>
      </div>
      <div class="container max-w-7xl mx-auto postImage-pst mb-12">
        <div class="postImage-cover relative">
          <div class="postImage-cover__aspect-ratio"></div>
            <picture>
              <img 
                v-if="type === 'movie' || type ==='tv' || type === 'person'"
                :src="`https://image.tmdb.org/t/p/original${data.poster_path || data.profile_path}`"
                :alt="`${data.original_title || data.original_name || data.name}`">

            </picture>
        </div>
        <div class="postImage-pst__info h-full px-4">
          <div>
            <h4 class="text-xs text-2xl sm:text-3xl font-bold mb-2">{{ data.title || data.original_name || data.name }}</h4>
            <p class="text-xs mb-6" v-if="data.release_date || data.first_air_date"> {{ useMoviesApi().getDate(data.release_date || data.first_air_date) }}</p>

            <ul class="flex flex-nowrap mb-6" v-if="type === 'movie' || type === 'tv'">
                <li 
                    v-for="(title, i) in data.genres" :key="i"
                    class="bg-[#111827] border-b-4 border-blue-800 px-1 py-0"
                    :class="{ 'mr-1' : i != data.genres.length -1  }"> 
                    <NuxtLink 
                        :to="{query: {type: type , name: title.name.toLowerCase().replace(/%/g, ''), page: 1}, path:`/genres/${title.id}`}"
                        class="text-base">{{ title.name }}</NuxtLink>
                </li>
            </ul>
            <ul v-else class="flex flex-nowrap mb-6">
              <li class="bg-[#111827] border-b-4 border-blue-800 px-1 py-0"> {{ data.known_for_department }}</li>
            </ul>

            <div v-if="type === 'movie' && data.vote_average > 1 || type ==='tv' && data.vote_average > 1" 
              class="precent-bar mb-6">
              <span class="precent-per inline-block" 
                :class="useMoviesApi().getColor(`${data.vote_average}`)"
                :style="{'width':useMoviesApi().percent(`${data.vote_average}`)+'%'}">
                <span class="percent-tooltip inline-block" 
                :class="useMoviesApi().getColor(`${data.vote_average}`)">{{ useMoviesApi().percent(`${data.vote_average}`) }}</span>
              </span>
            </div>

            <div v-else-if="type === 'movie' && data.vote_average  === 0 || type ==='tv' && data.vote_average === 0" class="mb-6">
              <div class="percent-tooltip inline-block text-xs">0</div>
              <div class="precent-bar">
                <span class="precent-per inline-block" :style="{'width':0+'%'}"></span>
              </div>
            </div>

            <div class="text-sm text-base mb-6 flex items-center" v-if="type === 'person'">
              <div class="flex items-center pr-2" v-if="data.birthday">
                <dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </dt>
                <dd>
                  <span>{{ data.birthday }}</span> 
                </dd>
              </div>

              <div class="flex items-center pl-2"
                :class="{'border-l-2' : data.place_of_birth}" v-if="data.place_of_birth">
                <dt>
                  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                </dt>
                <dd>
                  <span>{{ data.place_of_birth }}</span>
                </dd>
              </div>
            </div>
            <p class="mt-8 text-sm text-base mb-6">{{ data.overview || data.biography}}</p>



            <div class="recommended mb-12" v-if="type === 'movie' || type === 'tv'">
              <h2 class="text-white-600 mb-1">
                <span class="border-b-4 border-blue-800 text-lg">Têtes d'affiche</span>
              </h2>
                <MovieOrTvSlider :type="`person`" :items="state.infos.cast"/> 
            </div>

          </div>
        </div>
      </div> 

      <div class="recommended container max-w-7xl mx-auto px-4 md:px-8" v-if="type === 'person'">
        <div>
          <h2 class="text-white-600 mb-1">
            <span class="border-b-4 border-blue-800 text-lg">Films</span>
          </h2>
          <MovieOrTvSlider :type="'movie'" :items="state.personCreditsMovies.cast"/> 
        </div>
        <div>
          <h2 class="text-white-600 mb-1">
            <span class="border-b-4 border-blue-800 text-lg">Series</span>
          </h2>
          <MovieOrTvSlider :type="'tv'" :items="state.personCreditsTv.cast"/> 
        </div>
      </div>

      <div class="recommended container max-w-7xl mx-auto px-4 md:px-8" v-if="type === 'movie' && state.recommendations.length || type === 'tv' && state.recommendations.length">
        <h2 class="text-white-600 mb-1">
          <span class="border-b-4 border-blue-800 text-lg">Tu pourrais aussi aimer</span>
        </h2>
          <MovieOrTvSlider :type="type" theme="recommendations" :items="state.recommendations"/> 
      </div>
    </div>
    <!-- Post Content -->
  </section>
</template> 