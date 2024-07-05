// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/liff/' : '/',
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
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      liffId: '2005759309-ABpxXY7J',
      firebaseConfig: {
        apiKey: "AIzaSyAENKWqthl7gaH77ZLZvornlbl7MW-7E94",
        authDomain: "base-300-78d54.firebaseapp.com",
        projectId: "base-300-78d54",
        storageBucket: "base-300-78d54.appspot.com",
        messagingSenderId: "234726660768",
        appId: "1:234726660768:web:acb35674412372b31607c5"
      }
    }
  }
})
