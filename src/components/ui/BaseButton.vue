<template>
  <button @click="$emit('clickHandler')" class="button">
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
</style>
