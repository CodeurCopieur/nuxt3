<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">CodeurCopieur</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/movie">Movies</NuxtLink></li>
        <li><NuxtLink to="/tv">TV Series</NuxtLink></li>
        <li><NuxtLink to="/search">Search</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>