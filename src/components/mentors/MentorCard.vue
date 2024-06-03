<script>
export default {
  methods: {
    requestLink() {
      return this.$router.push('/mentors/c1/contact')
    }
  }
}
</script>

<template>
  <div class="mentor-card">
    <div class="mentor-card__name">John Doe</div>
    <div class="mentor-card__rate">$30/hr</div>
    <div class="mentor-card__desc">description content</div>
    <div class="actions">
      <RouterLink to="/mentors/mentor-1">Details</RouterLink>
      <button @click="requestLink">Send Request</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.mentor-card {
  width: 400px;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #cbd5e1;
  background-color: #f8fafc;
}

.mentor-card__name {
  font-size: 1.25rem;
  font-weight: 600;
}

.mentor-card__rate {
  font-size: 1.125rem;
}

.mentor-card__desc {
  font-size: 1rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: end;
}
</style>
