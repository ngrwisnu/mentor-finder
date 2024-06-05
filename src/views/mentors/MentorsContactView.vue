<script>
import ContactForm from '@/components/mentors/ContactForm.vue'

export default {
  props: ['id'],
  components: {
    ContactForm
  }
}
</script>

<template>
  <section>
    <h2>Contact the Mentor</h2>
    <div class="content">
      <ContactForm :id="id" />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
}

.content {
  width: 100%;
}
</style>
