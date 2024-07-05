import liff from '@line/liff'
export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig()
  const liffId = runtimeConfig.public.liffId;
  const { $signInWithPopup, $signInWithCredential } = useNuxtApp()

  if (liff.isInClient()) {
    liff
      .init({
        liffId,
        // withLoginOnExternalBrowser: true
      })
      .then(() => {
        console.log('line - init')
        if (liff.isLoggedIn()) {
          // liff.getProfile().then((data) => {
          //   console.log('line - profile', data)
          // })

          const idToken = liff.getIDToken()
          $signInWithCredential(idToken)
            .then((res) => {
              console.log('line in', res)
            })
            .catch((err) => {
              console.log('line not in', err)
            })
        } else {
          console.log('未登入')
        }
      })
  } else {
    $signInWithPopup()
  }

})