<script setup>
import liff from '@line/liff'
const config = useRuntimeConfig()
const LIFF_ID = config.public.LIFF_ID

const decodedIDToken = reactive({
  name: ''
})

liff
  .init({
    liffId: LIFF_ID
  })
  .then(() => {
    console.log('liff.init() done')

    const idToken = liff.getDecodedIDToken()
    decodedIDToken.name = idToken.name
    console.log(idToken)
  })
  .catch((error) => {
    console.log(`liff.init() failed: ${error}`)
    if (!process.env.liffId) {
      console.info(
        'LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.'
      )
    }
    return Promise.reject(error)
  })
</script>
<template>
  <div>Liff</div>
  <div>
    {{ LIFF_ID }}
  </div>
  <div>
    {{ decodedIDToken.name }}
  </div>
</template>
