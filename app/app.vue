<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return `ikhwan | ${title}`
  },
  meta: [
    { name: "keywords", content: 'portofolio,portofolio ikhwan,portofolio ikhwan satrio,ikhwan,ikhwan satrio,young dev portofolio' }
  ]
})
</script>

<template>
  <NuxtLoadingIndicator />
  <Header />
  <NuxtPage />
  <Footer />
  <RespectTooltip />
</template>
