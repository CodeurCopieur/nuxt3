<script setup>
    const { movies } = defineProps(['movies']);
    const resMovies = ref(movies.data.results);

    const thumbnailSwiperParams = {
      spaceBetween: 10,
      loop: true,                         
      autoplay: {                         
        delay: 8000,  
      },
      touchRatio: 0.2,
      slidesPerView: 4,
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
    
    const gallerySwiperParams = {
      spaceBetween: 10,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,                         
      autoplay: {                         
        delay: 8000,  
      }
    };

</script>
<template>
<div class="component-app__wrap-sliderHero relative">
    <swiper ref="gallerySwiperParams" 
    grab-cursor lazy 
    :loop="gallerySwiperParams.loop"
    :slide-to-clicked-slide="gallerySwiperParams.slideToClickedSlide" class="h-max w-full component-app__wrap-slider">
        <SwiperSlide v-for="(movie, i) in resMovies" :key="i" class="component-app__wrap-slideHero relative">

            <div class="absolute z-10 h-full">
                <div class="w-full xl:w-6/12 md:w-8/12 xl:pl-40 p-0 h-full flex items-center">
                    <div class="px-8">
                        
                        <h3 class="text-xs text-lg text-4xl">{{ movie.original_title}}</h3>
                        <div class="mt-8">
                            <span>{{ movie.vote_average }}</span>
                        </div>
                        
                        <p class="mt-8 text-xs text-lg">{{ movie.overview }}</p>
                        <a :href="`movie/${movie.id}`" class="inline-block mt-8 py-2 px-6 bg-[#111827] rounded border-slate-300">
                            <span>Voir</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="component-app__aspect-ratio"></div>
            <div class="component-app__linear-black"></div>
            <picture>
                <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" class="swiper-lazy" :alt="movie.original_title">
            </picture>
            
        </SwiperSlide>
    </swiper>
</div>
      <!-- <swiper 
      class="mySwiper cursor-grab flex items-center"
      :breakpoints="thumbnailSwiperParams.breakpoints"
      :slides-per-view="thumbnailSwiperParams.slidesPerView"
      :space-between="thumbnailSwiperParams.spaceBetween"
      :loop="thumbnailSwiperParams.loop" 
      lazy
      grab-cursor
      watch-slides-progress
      ref="thumbnailSwiperParams" 
>
        <SwiperSlide 
            v-for="(movie, i) in resMovies" :key="i"
            class="relative w-1/5 ">
            <div></div>
            <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" class="swiper-lazy" :alt="movie.original_title">
            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{movie.original_title}}</h2>
        </SwiperSlide>
      </swiper>

    <div class="flex flex-row flex-wrap">
        <div class="flex-shrink max-w-full w-full">
            <div class="mx-10  grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4">
                <template  v-for="(movie, i) in resMovies" :key="i">
                    <article  class="flex-shrink">
                        <div class="relative hover-img max-h-48 overflow-hidden">
                            <a :href="`movie/${movie.id}`">
                                <img class="max-w-full w-full mx-auto h-auto" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="Image description">
                            </a>
                            <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a :href="`movie/${movie.id}`">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{movie.original_title}}</h2>
                                </a>
                                <div class="pt-1">
                                    <div class="text-gray-100">
                                        <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </template>

            </div>
        </div>
    </div> -->

</template>

<style>


.bg-gradient-cover {
	background-color: transparent;
    background-image: linear-gradient(transparent,rgba(0,0,0,0.92));
}
.max-h-98 {
    max-height: 24.3rem;
}
.box-one > article:nth-child(1) { 
	padding-top: 0;
	padding-bottom: 0.125rem;
	padding-right: 0.125rem;
}
.box-one > article:nth-child(2) {
	padding-top: 0;
	padding-bottom: 0.125rem;
	padding-left: 0.125rem;
}
.box-one > article:nth-child(3) {
	padding-top: 0.125rem;
	padding-bottom: 0.125rem;
	padding-right: 0.125rem;
}
.box-one > article:nth-child(4) {
	padding-top: 0.125rem;
	padding-bottom: 0.125rem;
	padding-left: 0.125rem;
}
.swiper-slide-visible.swiper-slide-active {
    opacity: 1;
}
.swiper-slide-visible {
    opacity: .5;
}
</style>