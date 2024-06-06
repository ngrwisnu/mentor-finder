<template>
  <section>
    <slot></slot>
    <div class="content">
      <slot name="form-card"></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
