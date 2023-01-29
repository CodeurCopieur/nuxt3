// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {    
    head: {      
      charset: 'utf-16',      
      viewport: 'width=500, initial-scale=1',      
      title: 'My App',      
      meta: [             
      { name: 'description', content: 'Ceci est la démo de l\'application Nuxt 3' } ,
      { property: "og:title",  content:'C\'est un titre og'}     ],
    }  
  },
  runtimeConfig: {
    public: {
      baseUrl: "https://fakestoreapi.com",
      appSecret: "",
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})

