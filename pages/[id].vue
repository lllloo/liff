<script setup>
const route = useRoute()
console.log(route)

</script>
<template>
  <div>
    <h1 class="text-[20px]">
      商品 {{ route.path.replace('/','') }}
    </h1>
  </div>
</template>
