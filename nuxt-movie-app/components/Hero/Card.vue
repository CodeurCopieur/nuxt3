
<script setup>
const props = defineProps(["title", "id", "bp", "overview"]);

const lol = () => {
 return 'lol'
};
</script>

<template>
  <div>
    <!--  backdropPath `https://image.tmdb.org/t/p/original${img}`; -->

    <!--  posterPath  `https://image.tmdb.org/t/p/w500${img}`; -->
    <a :href="`movie/${id}`">
      <img
        class="max-w-full w-full mx-auto h-auto"
        :src="`https://image.tmdb.org/t/p/original/${bp}`"
        alt="Image description"
      />
      <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
        <a :href="`movie/${id}`">
          <h2 class="text-3xl font-bold capitalize text-white mb-3">
            {{ title }} {{ lol() }}
          </h2>
        </a>
        <p class="text-gray-100 hidden sm:inline-block styleCustom">
          {{ overview }}
        </p>
        <div class="pt-2">
          <div class="text-gray-100">
            <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
            Europe
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style>
.styleCustom {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>