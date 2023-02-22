<script setup>
  const { type, theme } = defineProps(['type', 'theme']);
  const { data } = await useMoviesApi().getMovies(`${type}/popular`, 1);

  const thumbnailSwiperParams = {
      spaceBetween: 10,
      loop: true,                         
      autoplay: {                         
          delay: 1000,  
      },
      touchRatio: 0.2,
      slidesPerView: 5,
      pagination:{ clickable: true, dynamicBullets: true },
      breakpoints: {
          480: {
              slidesPerView: 2.5,
              spaceBetween: 24,
              resistanceRatio: 0.85
          },
          768: {
              slidesPerView: 2.1,
              spaceBetween: 28,
              resistanceRatio: 0.85
          },
          980: {
              slidesPerView: 4,
              spaceBetween: 28,
              resistanceRatio: 0.85
          },
          1280: {
              slidesPerView: 5.5,
              spaceBetween: 32,
              resistanceRatio : 0
          }
      }
  };
</script>

<template>

  <swiper 
    class="swiperList"
    ref="thumbnailSwiperParams"
    :modules="[SwiperAutoplay, SwiperPagination]"
    grab-cursor lazy 
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
    :preload-images="true"
    :loop="thumbnailSwiperParams.loop"
    :breakpoints="thumbnailSwiperParams.breakpoints"
    :pagination="thumbnailSwiperParams.pagination">
    <SwiperSlide v-for="(movie, i) in data.results" :key="i" class="h-full shadow-xl mr-6 border border-gray-700p-4 hover:bg-gray-900 shadow-custom overflow-hidden">
      <a :href="`movie/${movie.id}`">
      <div class="relative" style="padding-top: 160%;">
        <picture>
          <img 
            class="absolute inset-0 object-cover w-full h-full"
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="`${movie.original_title || movie.original_name}`">
        </picture>
      </div>
        
      </a>
    </SwiperSlide>
  </swiper>
 
</template>