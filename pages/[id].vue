<script setup>
import { computed } from 'vue';

const route = useRoute()
console.log(route)

const product = computed(() => {
  return decodeURIComponent(route.path.replace('/',''))
})

</script>
<template>
  <div>
    <h1 class="text-[20px]">
      商品: {{ product }}
    </h1>
  </div>
</template>
