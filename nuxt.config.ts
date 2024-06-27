// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/liff-nuxt/' : '/',
    buildAssetsDir: '/static/',
    head: {
      title: 'LIFF App',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        { name: 'description', content: 'This is LIFF App' }
      ],
      script: [
        {
          src: '//unpkg.com/vconsole@latest/dist/vconsole.min.js',
          type: 'text/javascript',
        },
        { innerHTML: 'new VConsole()' },
      ],
    }
  },
  runtimeConfig: {
    public: {
      LIFF_ID: process.env.LIFF_ID
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'remove'
      }
    }
  }
})
