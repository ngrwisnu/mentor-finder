<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<template>
  <header>
    <div class="logo"><RouterLink to="/">Mentors Finders</RouterLink></div>
    <nav>
      <ul>
        <li><RouterLink to="/mentors">Mentors</RouterLink></li>
        <li><RouterLink to="/requests">Requests</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

header a {
  color: black;
  text-decoration: none;
}

header .logo {
  font-size: 1.5rem;
  font-weight: 600;
}

header nav ul {
  display: flex;
  gap: 1rem;
}

header nav ul li {
  text-decoration: none;
  list-style: none;
  font-size: 1rem;
  font-weight: 400;
}
</style>
