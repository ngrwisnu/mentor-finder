<script>
import RegistrationForm from '@/components/mentors/RegistrationForm.vue'
import AuthLayout from '@/components/auth/AuthLayout.vue'

export default {
  components: {
    RegistrationForm,
    AuthLayout
  }
}
</script>

<template>
  <AuthLayout>
    <h1>Register as Mentor</h1>
    <template #form-card>
      <RegistrationForm />
    </template>
  </AuthLayout>
</template>
