import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";

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
  nuxtApp.provide('signInWithCustomToken', (token) => {
    return signInWithCustomToken(auth, token)
  });

})