<script setup>
    const { movies } = defineProps(['movies']);
    const resMovies = ref(movies);
   
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
          disableOnInteraction: false  
      },
      pagination:{ clickable: true, dynamicBullets: true },
    };

</script>
<template>
    <div class="component-app__wrap-sliderHero relative">
        <swiper 
            ref="gallerySwiperParams" 
            grab-cursor lazy 
            :modules="[SwiperAutoplay, SwiperPagination]"
            :autoplay="gallerySwiperParams.autoplay"
            :preload-images="true"
            :loop="gallerySwiperParams.loop"
            :slide-to-clicked-slide="gallerySwiperParams.slideToClickedSlide" class="h-max w-full component-app__wrap-slider">
        <SwiperSlide v-for="(movie, i) in movies" :key="i" class="component-app__wrap-slideHero relative">

            <div class="absolute z-10 h-full">
                <div class="w-full xl:w-6/12 md:w-8/12 xl:pl-40 p-0 h-full flex items-center">
                    <div class="px-8">
                        <h3 class="text-xs text-lg text-4xl">{{ movie.original_title}}</h3>
                        <div class="mt-8">
                            <span>{{ movie.vote_average }}</span>
                        </div>
                        <p class="mt-8 text-xs text-lg">{{ movie.overview.substring(0,200)+".." }}</p>
                        <a :href="`movie/${movie.id}`" class="inline-block mt-8 py-2 px-6 bg-[#111827]" style="box-shadow: 1px 1px 4px 0px #fff;">
                            <span>Voir</span>
                        </a>
                    </div>
                </div>
            </div>
                
            <div class="component-app__aspect-ratio"></div>
            <div class="component-app__linear-black"></div>
            <picture>
                <img :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" class="swiper-lazy" :alt="movie.original_title">
            </picture>

        </SwiperSlide>
        </swiper>
    </div>

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