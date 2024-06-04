<script lang="ts">
export default {
  methods: {
    menuHandler() {
      console.log(this.$route)
    }
  },
  updated() {
    this.menuHandler()
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo"><RouterLink to="/">Mentors Finder</RouterLink></div>
      <nav>
        <ul>
          <li><RouterLink to="/mentors">Mentors</RouterLink></li>
          <li><RouterLink to="/requests">Requests</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: white;
}

header .wrapper {
  width: 100%;
  max-width: 1440px;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
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

.active {
  color: #d66851;
}
</style>
