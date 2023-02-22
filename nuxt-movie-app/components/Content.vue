<script setup>
  const { data } = await useMoviesApi().getMovies('movie/popular', 1);

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
   <div class="home my-8 container max-w-7xl mx-auto px-4 py-8 lg:max-w-7xl">
    <!-- categories 
    <div class="categories flex items-center mb-12 -mx-4 overflow-hidden">
      <div class="w-1/5 px-4">
        <a href="#" class="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-900 shadow-custom">
          <img src="../assets/disney_logo.svg" alt="disney">
        </a>
      </div>
      <div class="w-1/5 px-4">
        <a href="#" class="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-900 shadow-custom">
          <img src="../assets/pixar_logo.svg" alt="pixar">
        </a>
      </div>
      <div class="w-1/5 px-4">
        <a href="#" class="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-900 shadow-custom">
          <img src="../assets/marvel_logo.svg" alt="marvel">
        </a>
      </div>
      <div class="w-1/5 px-4">
        <a href="#" class="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-900 shadow-custom">
          <img src="../assets/star_wars_logo.svg" alt="star wars">
        </a>
      </div>
      <div class="w-1/5 px-4">
        <a href="#" class="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-900 shadow-custom">
          <img src="../assets/national_geographic_logo.svg" alt="national geographic">
        </a>
      </div>
    </div> 
     categories -->
    
    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-500 mb-1">Films populaires</h2>
      <MovieOrTvSlider type="movie" theme="popular"/>
      <!-- <swiper 
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
        <SwiperSlide v-for="(movie, i) in data.results" :key="i" class="shadow-xl mr-6 border border-gray-700p-4 hover:bg-gray-900 shadow-custom overflow-hidden">
          <a :href="`movie/${movie.id}`">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="star wars">
          </a>
        </SwiperSlide>
      </swiper> -->
    </div>

    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-500 mb-1">Séries populaires</h2>
      <MovieOrTvSlider type="tv" theme="popular"/>
    </div>
  </div>
</template>