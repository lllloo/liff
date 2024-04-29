<script setup>
import liff from '@line/liff'
const config = useRuntimeConfig()
const LIFF_ID = config.public.LIFF_ID

const decodedIDToken = reactive({
  name: ''
})
const route = useRoute()

const pid = useCookie('pid')
if (route.query?.pid) {
  pid.value = route.query?.pid
}

liff
  .init({
    liffId: LIFF_ID
  })
  .then(() => {
    console.log('liff.init() done')

    const idToken = liff.getDecodedIDToken()
    decodedIDToken.name = idToken?.name || undefined
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

const sendMessage = () => {
  liff
    .sendMessages([
      {
        type: 'text',
        text: `${decodedIDToken.name}! 上車`
      }
    ])
    .then(() => {
      if (liff.isInClient()) {
        liff.closeWindow()
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>
<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex-1 overflow-auto">
      <div>Liff - {{ decodedIDToken.name }}</div>
      <div class="mb-2">
        {{ route.query }}
      </div>
      <div>
        cookie - {{ pid }}
      </div>
      <NuxtLink to="/" class="mr-2"> index </NuxtLink>
      <NuxtLink to="/list"> list </NuxtLink>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <div class="flex justify-between p-2 bg-gray-100">
      <div></div>
      <button
        class="rounded bg-primary px-2 py-1 font-semibold text-white"
        @click="sendMessage"
      >
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
