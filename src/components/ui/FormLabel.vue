<script>
export default {
  props: ['labelFor']
}
</script>

<template>
  <label :for="labelFor">
    <slot></slot>
  </label>
</template>

<style scoped>
label {
  font-weight: 500;
}

label.checkbox {
  font-weight: 400;
}
</style>
