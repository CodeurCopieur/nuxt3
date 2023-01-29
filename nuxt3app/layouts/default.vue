<template>
  <div class="wrap-body">
    <Header/>
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <Footer/>
  </div>
</template>
<style>
 .wrap-body {
    display: flex;
    flex-direction: column;
 }

 main {
  flex-grow: 1;
 }
</style>