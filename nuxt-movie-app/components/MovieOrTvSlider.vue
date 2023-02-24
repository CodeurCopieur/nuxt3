<script setup>
  const { type, theme } = defineProps(['type', 'theme']);
  const { data } = await useMoviesApi().getMovies(`${type}/${theme}`, 1);

  const thumbnailSwiperParams = {
      spaceBetween: 10,
      loop: true,                         
      autoplay: {                         
          delay: 8000,
          disableOnInteraction: false  
      },
      touchRatio: 0.2,
      slidesPerView: 5,
      pagination:{ clickable: true, dynamicBullets: true },
      breakpoints: {
          480: {
              slidesPerView: 2,
              spaceBetween: 24,
              resistanceRatio: 0.85
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 28,
              resistanceRatio: 0.85
          },
          980: {
              slidesPerView: 4,
              spaceBetween: 28,
              resistanceRatio: 0.85
          },
          1280: {
              slidesPerView: 5,
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
    :autoplay="thumbnailSwiperParams.autoplay"
    :preload-images="true"
    :loop="thumbnailSwiperParams.loop"
    :breakpoints="thumbnailSwiperParams.breakpoints"
    :pagination="thumbnailSwiperParams.pagination">
    <SwiperSlide v-for="(movie, i) in data.results" :key="i" class="h-full shadow-xl mr-0 sm:mr-4 border border-gray-700 hover:bg-gray-900 shadow-custom overflow-hidden">
      <a :href="`movie/${movie.id}`">
        <div class="relative" style="padding-top: 160%;">
          <picture>
            <img 
              class="absolute inset-0 object-cover w-full h-full"
              :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="`${movie.original_title || movie.original_name}`">
          </picture>
          <div class="precent-bar mt-8">
                <span class="precent-per inline-block" :style="{'width':useMoviesApi().percent(`${movie.vote_average}`)+'%'}">
                  <span class="percent-tooltip inline-block">{{ useMoviesApi().percent(`${movie.vote_average}`) }} %</span>
                </span>
              </div>
        </div>
      </a>
    </SwiperSlide>
  </swiper>
 
</template>