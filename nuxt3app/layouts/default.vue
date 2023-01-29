<template>
  <div>
    <Header/>
    <main>
      <slot />
    </main>
    <footer>
      <ul>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/products">Products</NuxtLink>
      </ul>
    </footer>
  </div>
</template>
