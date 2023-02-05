<script setup>
const { movies } = defineProps(['movies']);

</script>
<template>
<div class="bg-white py-6">
    <!-- <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2"> -->
    <div class="px-3 sm:px-4 xl:px-2">
        <!-- big grid 1 -->
        <div class="flex flex-row flex-wrap">
            <!--Start left cover-->
            <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                <div class="relative hover-img max-h-98 overflow-hidden">
                        <HeroCard 
                            :title="movies.results[0].original_title" 
                            :id="movies.results[0].id"
                            :bp="movies.results[0].backdrop_path"
                            :overview="movies.results[0].overview" />
                </div>
            </div>
            <!--Start box news-->
            <div class="flex-shrink max-w-full w-full lg:w-1/2">
                <div class="box-one flex flex-row flex-wrap">
                    <template  v-for="(movie, i) in movies.results" :key="i">
                        <article  v-if="i > 0 && i < 5"  class="flex-shrink max-w-full w-full sm:w-1/2">
                            <div class="relative hover-img max-h-48 overflow-hidden">
                                <a :href="`movie/${movie.id}`">
                                    <img class="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img2.jpg" alt="Image description">
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
                    <!-- <article class="flex-shrink max-w-full w-full sm:w-1/2">
                        <div class="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img3.jpg" alt="Image description">
                            </a>
                            <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Minimalist designs are starting to be popular with the next generation</h2>
                                </a>
                                <div class="pt-1">
                                    <div class="text-gray-100">
                                        <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Architecture
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="flex-shrink max-w-full w-full sm:w-1/2">
                        <div class="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img4.jpg" alt="Image description">
                            </a>
                            <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Tips for decorating the interior of the living room</h2>
                                </a>
                                <div class="pt-1">
                                    <div class="text-gray-100">
                                        <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Interior
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="flex-shrink max-w-full w-full sm:w-1/2">
                        <div class="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="https://tailnews.tailwindtemplate.net/src/img/dummy/img5.jpg" alt="Image description">
                            </a>
                            <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
                                </a>
                                <div class="pt-1">
                                    <div class="text-gray-100">
                                        <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Lifestyle
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article> -->
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style>


.bg-gradient-cover {
	background-color: transparent;
    background-image: linear-gradient(transparent,rgba(0,0,0,0.92));
    background-position-y: -1px;
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
</style>