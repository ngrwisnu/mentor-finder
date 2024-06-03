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
    <div class="container">
      <RouterView />
    </div>
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
  font-weight: 400;
}

main {
  width: 100%;
  background-color: #f1f5f9;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 100vh;
}

a {
  color: black;
  text-decoration: none;
}
</style>
