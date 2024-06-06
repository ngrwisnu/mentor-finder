<script>
import RegistrationForm from '@/components/mentors/RegistrationForm.vue'

export default {
  components: {
    RegistrationForm
  }
}
</script>

<template>
  <section>
    <h2>Register as Mentor</h2>
    <div class="content">
      <RegistrationForm />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
