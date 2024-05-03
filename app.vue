<script setup>
import liff from '@line/liff'
const config = useRuntimeConfig()
const LIFF_ID = config.public.LIFF_ID

const decodedIDToken = reactive({
  name: '',
  sub: ''
})
const route = useRoute()

// http://localhost:3000/?liff.state=%3Fpid%3Dwater
// http://localhost:3000/?liff.state=%3Fp_id%3D123
// http://localhost:3000/?liff.state=%3Fkey%3Dvalue

liff
  .init({
    liffId: LIFF_ID
  })
  .then(() => {
    console.log('liff.init() done')
    if (liff.isLoggedIn()) {
      const idToken = liff.getDecodedIDToken()
      decodedIDToken.name = idToken?.name || undefined
      decodedIDToken.sub = idToken?.sub || undefined
    }
  })
  .catch((error) => {
    console.log(`liff.init() failed: ${error}`)
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
      <div>Liff - {{ decodedIDToken.name }} - {{ decodedIDToken.sub }}</div>
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
