<script lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/header/TheHeader.vue'

export default {
  components: {
    TheHeader,
    RouterView
  }
}
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
}

main {
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
