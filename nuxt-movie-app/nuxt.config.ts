// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {    
    head: {      
      charset: 'utf-16',      
      viewport: 'width=device-width, initial-scale=1',      
      title: 'Movie Website',      
      meta: [             
      { name: 'description', content: 'Movie Website with Nuxt 3 and Themoviedb' } ,
      { property: "og:title",  content:'Movie Website with Nuxt 3'}],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ],
      bodyAttrs: {    class: 'min-h-screen'  },
    },
    // pageTransition: { name: 'page', mode: 'out-in' },  
  },  
  runtimeConfig: {
    public: {
      baseUrl: "https://api.themoviedb.org/3/",
      currencyKey: process.env.CURRENCY_API_KEY,
    },
    
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
})
