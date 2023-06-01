<script setup>
  const { type, secondType, theme, items } = defineProps(['type', 'secondType', 'theme', 'items']);
  const state = reactive({
    res: []
  })

  if (type === 'movie' && theme === 'popular' || type === 'movie' && theme === 'top_rated'  || type === 'tv' && theme === 'popular' || type === 'tv' && theme === 'top_rated') {
    state.res = await useMoviesApi().getMovies(`${type}/${theme}`, 1);
  } else if(type === 'movie' && theme === 'recommendations' || type === 'tv' && theme === 'recommendations') {
    state.res = items
  } else {
    state.res = items
  }

if (type === 'videos') {
  const filter = items.filter((item) => {
    if (item.site === 'YouTube' && item.type === 'Trailer'  ) {
      return item
    }
  })
  state.res = filter
}

  const thumbnailSwiperParams = {
      spaceBetween: 10,
      loop: false,                         
      autoplay: {                         
          delay: 8000,
          disableOnInteraction: false  
      },
      touchRatio: 0.2,
      slidesPerView: 5,
      pagination:{ clickable: true, dynamicBullets: true },
      breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          480: {
              slidesPerView: 3,
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

  const thumbnailSwiperParams2 ={
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    resistanceRatio : 0,
    pagination:{ clickable: true, dynamicBullets: true }
  };
</script>

<template>
  <template  v-if="type === 'movie' && state.res || type === 'tv' && state.res || type === 'person' && state.res ">

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
    <SwiperSlide v-for="(item, i) in state.res" :key="i" 
      class="h-full shadow-xl mr-0 sm:mr-4 border border-gray-700 hover:bg-gray-900 shadow-custom"
    :class="{'overflow-hidden': type === 'movie' || type === 'tv' }">
      <NuxtLink 
        :to="type === 'movie' || type === 'tv' || type === 'person' ? { path:`/${type}/${item.id}`} : {}" 
        class="relative">
        <div class="relative" style="padding-top: 130%;">
          <picture>
            <img 
              class="absolute inset-0 object-cover w-full h-full"
              :src="`https://image.tmdb.org/t/p/original/${item.poster_path || item.profile_path}`" :alt="`${item.original_title || item.original_name || item.name}`">
          </picture>
          <div 
            v-if="type === 'movie' && item.vote_average > 1 || type ==='tv' && item.vote_average > 1"
            class="precent-bar mt-8" >
                <span class="precent-per inline-block" 
                  :class="useMoviesApi().getColor(`${item.vote_average}`)"
                  :style="{'width':useMoviesApi().percent(`${parseInt(item.vote_average)}`)+'%'}">
                  <span class="percent-tooltip inline-block" :class="useMoviesApi().getColor(`${item.vote_average}`)">{{ useMoviesApi().percent(`${item.vote_average}`) }}</span>
                </span>
          </div>
          <div v-else-if="type === 'movie' && item.vote_average === 0 || type ==='tv' && item.vote_average === 0"  
            class="precent-bar mt-6">
              <span class="precent-per nr inline-block bg-red-600" style="width:0%;">
                <span class="percent-tooltip inline-block bg-red-600 nr" style="right: -25px; top: -12px;">NR</span>
              </span>
            </div>
        </div>
        <span class="text-center block">
          <span class="text-white text-xs">{{ item.original_name || item.original_title }}</span>
        </span>
      </NuxtLink>
    </SwiperSlide>
  </swiper>
  
  </template>


  <template v-else-if="type === 'videos' && state.res">
    <swiper 
      class="swiperList"
      ref="thumbnailSwiperParams2"
      :modules="[SwiperPagination]"
      :pagination="thumbnailSwiperParams2.pagination">
      <SwiperSlide 
        v-for="(item, i) in state.res" :key="i" 
        class="shadow-xl shadow-custom"
        :class="{'overflow-hidden': type === 'videos' }">
          <div class="videos-trailer">
            <iframe class="iframe-cont" width="560" height="315" :src="`https://www.youtube.com/embed/${item.key}`" :title="`${item.name}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </SwiperSlide>
    </swiper>
  </template>
</template>