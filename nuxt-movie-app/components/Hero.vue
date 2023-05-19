<script setup>
    const { movies, type } = defineProps(['movies', 'type']);
    const resMovies = ref(movies);

  const getGenres = await useMoviesApi().getGenres(`${type}`);
  const genres = getGenres.data.genres;
   
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
    
  const getTitle = (arrayId) => {
    const filteredObjects = computed(() => genres.filter(obj => arrayId.includes(obj.id)));
    return filteredObjects.value
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
                <div class="w-full md:min-w-3xl md:max-w-3xl  xl:pl-40 p-0 h-full flex items-center md:mr-auto md:ml-0 mx-auto">
                    <div class="px-8">
                        <h3 class="text-xs text-lg text-4xl font-extrabold mb-5">{{ movie.original_title}}</h3>
                        
                        <ul class="flex flex-nowrap mb-6">
                            <li 
                                v-for="(title, i) in getTitle(movie.genre_ids)" :key="i"
                                class="bg-[#111827] border-b-4 border-blue-800 px-1 py-0"
                                :class="{ 'mr-1' : i != getTitle(movie.genre_ids).length -1  }"> 
                                <NuxtLink 
                                    :to="{query: {type: type , name: title.name.toLowerCase(), page: 1}, path:`/genres/${title.id}`}"
                                    class="text-base">{{ title.name }}</NuxtLink>
                            </li>
                        </ul>
                        
                        <div class="precent-bar mb-6">
                            <span class="precent-per inline-block"
                                :class="useMoviesApi().getColor(`${parseInt(movie.vote_average)}`)" 
                                :style="{'width':useMoviesApi().percent(`${parseInt(movie.vote_average)}`)+'%'}">
                                <span class="percent-tooltip inline-block" :class="useMoviesApi().getColor(`${parseInt(movie.vote_average)}`)">{{ useMoviesApi().percent(`${parseInt(movie.vote_average)}`) }}</span>
                            </span>
                        </div>

                        <p class="text-xs text-lg leading-normal mb-6">{{ movie.overview.substring(0,200)+".." }}</p>
                        <a :href="`movie/${movie.id}`" class="inline-block py-1 px-6 bg-[#111827] border-b-4 border-blue-800">
                            <span>PLUS</span>
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