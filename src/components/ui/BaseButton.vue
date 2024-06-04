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
  background: linear-gradient(to right, #f13611, #f57119);
  color: white;
  padding: 6px 12px;
  transition: all 150ms ease-in;
}

.button:hover {
  cursor: pointer;
  transform: scale(1.1);
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
