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
        {{ data.title || data.original_name }}
      </h1>
    </div>
    <!-- Post Meta -->
    <div class="text-center mb-8">
      <span>{{ useMoviesApi().showDate( `${data.release_date || data.first_air_date}`) }}</span>
    </div>
    <!-- Post Image -->
    <div class="postImage w-full rounded mb-10 relative">
      <div class="postImage-bck h-[350px] sm:h-[550px] relative overflow-hidden">
        <div class="postImage__aspect-ratio"></div>
        <picture>
          <img 
          :src="`https://image.tmdb.org/t/p/original${data.backdrop_path}`"
          :alt="`${data.original_title || data.original_name}`" />
        </picture>
      </div>
      <div class="postImage-pst">
        <div class="postImage-cover relative">
          <div class="postImage-cover__aspect-ratio"></div>
          <picture>
            <img :src="`https://image.tmdb.org/t/p/original${data.poster_path}`"
              :alt="`${data.original_title || data.original_name}`">
          </picture>
        </div>
        <div class="postImage-pst__info h-full">
          <div>
            <h4 class="text-xs text-2xl sm:text-3xl font-bold mb-12">{{ data.original_title || data.original_name }}</h4>
            <div class="precent-bar">
              <span class="precent-per inline-block" :style="{'width':useMoviesApi().percent(`${data.vote_average}`)+'%'}">
                <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${data.vote_average}`) }} %</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Post Content -->
  </section>
</template>


<style >
  .blog__content {
  @apply sm:px-10;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6,
.blog__content p {
  @apply my-5;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6 {
  @apply font-bold;
}

.blog__content h1 {
  @apply text-2xl sm:text-4xl;
}

.blog__content h2 {
  @apply text-xl sm:text-3xl;
}

.blog__content h3 {
  @apply text-lg sm:text-2xl;
}

.blog__content h4 {
  @apply sm:text-xl;
}

.blog__content h5 {
  @apply text-sm sm:text-lg;
}
</style>