<script setup>
const route = useRoute()
</script>
<template>
  <div>
    page: {{ route.params.id }}
  </div>
</template>
