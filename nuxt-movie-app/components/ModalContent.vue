<script setup>
  const { items } = defineProps(['items']);
  defineEmits(['close']);
</script>

<template>
  <div class="modal-wrapper relative w-screen h-screen  flex justify-center items-center">
    <div class="container_story relative h-full w-full md:w-2/3 md:h-4/5 bg-white">
            <button 
        class="block mx-auto md:mr-0 md:ml-auto text-center text-white bg-blue-800 text-teal-900 hover:bg-blue-500 p-3 mb-4"
      @click.self="$emit('close')"></button>

      <MovieOrTvSlider :type="'videos'" :items="items"/> 
    </div>
  </div>
</template>