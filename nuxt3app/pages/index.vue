<script setup>
  // useHead({
  //   title: 'Home - Nuxt 3 Demo',
  //   meta: [
  //     {name: "description", content: "Ceci est la démo de l'application Nuxt 3"},
  //     {property: "og:title", content: "C'est un titre og"}],
  //   link: [{rel: "stylesheet", link: "./app.css"}]
  // });

  const title = ref('Home - Nuxt 3 Demo');
</script>
<template>
  <div>
    <!-- <Head>
      <Title>{{ title }}</Title>      
      <Meta name="description" :content="title" />
      <Meta property="og:title" content="C'est un titre og" />
      <Style type="text/css" children="body { background-color: green; }" />    
    </Head> -->
    <h1>HomePage</h1>
    <Todo/>
  </div>
</template>