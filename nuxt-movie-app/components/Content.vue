<script setup>
  const { data } = await useMoviesApi().getMovies('movie/popular', 1);
</script>
<template>
   <div class="home my-8 container max-w-screen-lg max-w-screen-xl mx-auto px-4 py-8 lg:max-w-7xl">
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