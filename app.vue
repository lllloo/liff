<script setup>
import liff from '@line/liff'
const config = useRuntimeConfig()

const profile = reactive({
  userId: '',
  name: ''
})
const route = useRoute()

const { $signInWithPopup, $signInWithCredential } = useNuxtApp()

liff
  .init({
    liffId: '2005759309-ABpxXY7J',
    withLoginOnExternalBrowser: true
  })
  .then(() => {
    console.log('line - init')
    if (liff.isLoggedIn()) {
      liff.getProfile().then((data) => {
        console.log('line - profile', data)
        $signInWithPopup()
        // $signInWithCredential(data.userId)
        //   .then((res) => {
        //     console.log('line in', res)
        //   })
        //   .catch((err) => {
        //     console.log('line not in', err)
        //   })
      })
    } else {
      console.log('未登入')
    }
  })

const search = ref(window.location.search)
const getParams = (url) => {
  return Object.fromEntries(new URLSearchParams(url).entries())
}
const searchParams = getParams(search.value)
</script>
<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex-1 overflow-auto">
      <div>Liff - {{ searchParams }}</div>
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
