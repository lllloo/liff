import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithCredential, OAuthProvider } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig()
  const firebaseConfig = runtimeConfig.public.firebaseConfig;

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  // 透過 idToken 登入
  nuxtApp.provide('signInWithCredential', (token) => {
    const provider = new OAuthProvider('oidc.line');
    const credential = provider.credential({
      idToken: token,
    });
    return signInWithCredential(auth, credential)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        console.log('result', result)
      })
      .catch((error) => {
        console.log('error', error)
      });
  });

  // 快速登入彈跳視窗
  nuxtApp.provide('signInWithPopup', () => {
    const provider = new OAuthProvider('oidc.line');
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        console.log('result', result)
      })
      .catch((error) => {
        console.log('error', error)
      });
  });
})