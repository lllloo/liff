<script setup>
const profile = reactive({
  userId: '',
  name: ''
})
const route = useRoute()

console.log('client', import.meta.client)
console.log('server', import.meta.server)

const search = ref(import.meta.client ? window.location.search : '')
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
