<template>
   <div class="home my-8 container max-w-screen-lg max-w-screen-xl mx-auto px-4 py-8 lg:max-w-7xl">
    
    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-500 mb-1">Films populaires</h2>
      <MovieOrTvSlider type="movie" theme="popular"/>
    </div>

    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-500 mb-1">Séries populaires</h2>
      <MovieOrTvSlider type="tv" theme="popular"/>
    </div>

    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-500 mb-1">Films les mieux notés</h2>
      <MovieOrTvSlider type="movie" theme="top_rated"/>
    </div>

    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-500 mb-1">Séries les mieux notés</h2>
      <MovieOrTvSlider type="tv" theme="top_rated"/>
    </div>
  </div>
</template>