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
@import './assets/variables.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: #f1f5f9;
}

main {
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 3rem auto 0;
  padding: 0 1rem;
  min-height: 100vh;
}

a {
  color: black;
  text-decoration: none;
}

input:not(input[type='checkbox']),
textarea {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  width: 100%;
  border-radius: 4px;
  padding: 6px 12px;
  border: 1px solid var(--border-200);
}

input[type='checkbox'] {
  margin-right: 4px;
}
</style>
