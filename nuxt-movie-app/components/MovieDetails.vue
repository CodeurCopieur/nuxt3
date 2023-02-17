<script setup>
  const movie = defineProps(["movie"]);
  const resMovie = ref();
  resMovie.value = movie.movie.data
  // console.log(resMovie)
</script>
<template>
   <section class="container mx-auto py-10 sm:py-16">
    <!-- Post Title -->
    <div class="text-center mb-5">
      <h1 class="text-3xl sm:text-5xl font-bold">
        {{ resMovie.original_title}}
      </h1>
    </div>
    <!-- Post Meta -->
    <div class="text-center mb-10">
      <span class="mr-3">{{ Math.round(resMovie.vote_average) }}</span>
      <span>{{ useMoviesApi().showData( `${resMovie.release_date}`) }}</span>
    </div>
    <!-- Post Image -->
    <div class="blog__image w-full h-[250px] sm:h-[500px] relative shadow-xl rounded overflow-hidden mb-10">
      <img 
        :src="`https://image.tmdb.org/t/p/original/${resMovie.backdrop_path}`"
        alt=""
        class="absolute w-full h-full object-cover object-[center_center]"/>
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