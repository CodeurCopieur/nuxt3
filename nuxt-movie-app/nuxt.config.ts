// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrlMovie: "https://api.themoviedb.org/3/movie/",
      currencyKey: process.env.CURRENCY_API_KEY,
    },
    
  },
})
