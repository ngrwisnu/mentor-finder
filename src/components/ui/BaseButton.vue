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
    },
    type: String
  },
  data() {
    return {
      primary: this.type === 'primary',
      outline: this.type === 'outline'
    }
  },
  computed: {
    classList() {
      return {
        primary: this.primary,
        outline: this.outline
      }
    }
  }
}
</script>

<template>
  <RouterLink v-if="asLink" :to="linkTo">{{ linkText }}</RouterLink>
  <button v-else @click="$emit('clickHandler')" class="button" :class="classList">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border: none;
  border-radius: 6px;
  font-weight: 500;
  height: 32px;
  padding: 6px 12px;
  transition: all 150ms ease-in;
}

.primary {
  background: linear-gradient(to right, #f13611, #f57119);
  color: white;
}

.outline {
  background: transparent;
  color: var(--black-700);
  border: 1px solid var(--black-700);
}

.outline:hover {
  background: var(--black-700);
  color: white;
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
