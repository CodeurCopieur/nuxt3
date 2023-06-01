<script setup>
  const { items, type } = defineProps(['items', 'type']);
  defineEmits(['close']);
</script>

<template>
  <div class="modal-wrapper relative w-screen h-screen  flex justify-center items-center">
    <div class="container_story relative w-full md:w-2/3 md:h-4/5 bg-white">
            <button 
        class="block mx-auto md:mr-0 md:ml-auto text-center text-white bg-blue-800 text-teal-900 hover:bg-blue-500 p-3"
      @click.self="$emit('close')"></button>

      <MovieOrTvSlider 
        :type="'videos'" 
        :items="items" 
        :secondType="type"/> 
    </div>
  </div>
</template>