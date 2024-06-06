<script>
export default {
  props: {
    submitHandler: {
      type: Function,
      required: false
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <slot></slot>
  </form>
</template>

<style scoped>
form {
  padding: 1rem;
  border-radius: 12px;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  form {
    width: 50%;
  }
}
</style>
