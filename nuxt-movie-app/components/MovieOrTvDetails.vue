<script setup>
  const { type } = defineProps(['type']);
  const {id} = useRoute().params;

  const data = await useMoviesApi().getDetails(`${type}/${id}`);

</script>
<template>
    <section class="container max-w-7xl mx-auto py-10 sm:py-16">
    <!-- Post Title -->
    <div class="text-center mb-10">
      <h1 class="text-3xl sm:text-5xl font-bold">
        {{ data.title || data.original_name || data.name }}
      </h1>
    </div>
    <!-- Post Meta -->
    <div class="text-center mb-8">
      <span v-if="type === 'movie' || type ==='tv'">{{ useMoviesApi().showDate( `${data.release_date || data.first_air_date}`) }}</span>
      <span v-else>{{ data.known_for_department }}</span>
    </div>
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
      <div class="postImage-pst">
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
        <div class="postImage-pst__info h-full">
          <div>
            <h4 class="text-xs text-2xl sm:text-3xl font-bold mb-12">{{ data.original_title || data.original_name || data.name }}</h4>

            <div v-if="type === 'movie' && data.popularity > 1 || type ==='tv' && data.popularity > 1" class="precent-bar" >
              <span class="precent-per inline-block" 
                :style="{'width':useMoviesApi().percent(`${parseInt(data.vote_average)}`)+'%'}">
                <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${parseInt(data.vote_average)}`) }}</span>
              </span>
            </div>

            <div v-else-if="type === 'person' && data.popularity > 1"  class="precent-bar" >
              <span class="precent-per inline-block">
                <span class="percent-tooltip inline-block">{{ parseInt(data.popularity) }}</span>
              </span>
            </div>

            <div v-else>
              <div class="percent-tooltip inline-block text-xs">0</div>
              <div class="precent-bar">
                <span class="precent-per inline-block" :style="{'width':110+'%'}"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- Post Content -->
    </section>
</template>