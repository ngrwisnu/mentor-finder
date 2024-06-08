<script>
import LoginForm from '../../components/auth/LoginForm.vue'
import AuthLayout from '../../components/auth/AuthLayout.vue'

export default {
  components: {
    LoginForm,
    AuthLayout
  }
}
</script>

<template>
  <AuthLayout>
    <h1>Login</h1>
    <template #form-card>
      <LoginForm />
    </template>
  </AuthLayout>
</template>
