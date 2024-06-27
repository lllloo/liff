<script setup>
import liff from '@line/liff'
const config = useRuntimeConfig()
const LIFF_ID = config.public.LIFF_ID

const profile = reactive({
  userId: '',
  name: ''
})
const route = useRoute()

liff
  .init({
    liffId: LIFF_ID
  })
  .then(() => {
    console.log('line - init')
    if (liff.isLoggedIn()) {
      liff.getProfile().then((data) => {
        console.log('line - profile', data)
      })
    } else {
      console.log('未登入')
    }
  })
  .catch((error) => {
    if (!LIFF_ID) {
      console.info(
        'LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.'
      )
    }
    return Promise.reject(error)
  })
</script>
<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex-1 overflow-auto">
      <div>Liff - {{ profile.userId }} - {{ profile.name }}</div>
      <div class="mb-2">
        {{ route.query }}
      </div>
      <NuxtLink to="/" class="mr-2"> index </NuxtLink>
      <NuxtLink to="/list"> list </NuxtLink>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <div class="flex justify-between p-2 bg-gray-100">
      <div></div>
      <button class="rounded bg-primary px-2 py-1 font-semibold text-white">
        上車
      </button>
    </div>
  </div>
</template>
<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
