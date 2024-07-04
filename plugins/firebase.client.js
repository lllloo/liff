import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithCredential, OAuthProvider } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: "AIzaSyAENKWqthl7gaH77ZLZvornlbl7MW-7E94",
    authDomain: "base-300-78d54.firebaseapp.com",
    projectId: "base-300-78d54",
    storageBucket: "base-300-78d54.appspot.com",
    messagingSenderId: "234726660768",
    appId: "1:234726660768:web:acb35674412372b31607c5"
  };

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