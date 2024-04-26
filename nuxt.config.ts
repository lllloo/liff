// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/liff/' : '/',
    buildAssetsDir: '/static/'
  },

  runtimeConfig: {
    public: {
      LIFF_ID: process.env.LIFF_ID
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})
