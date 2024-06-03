<script>
export default {
  props: {
    asLink: Boolean,
    linkTo: {
      type: String,
      required: false
    },
    linkText: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <RouterLink v-if="asLink" :to="linkTo">{{ linkText }}</RouterLink>
  <button v-else @click="$emit('clickHandler')" class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border: none;
  border-radius: 6px;
  height: 32px;
  background-color: #d66851;
  color: white;
  padding: 6px 12px;
}

.button:hover {
  cursor: pointer;
  background-color: #c74b32;
}

a {
  color: #d66851;
}

button,
a {
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
