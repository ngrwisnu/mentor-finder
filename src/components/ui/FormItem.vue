<template>
  <div class="form-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.form-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.form-item.checkbox {
  flex-direction: row;
}
</style>
