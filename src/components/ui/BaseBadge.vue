<script>
export default {
  props: {
    text: String
  }
}
</script>

<template>
  <div class="badge">{{ text }}</div>
</template>

<style scoped>
.badge {
  background-color: #334155;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  padding: 2px 8px;
  width: fit-content;
}
</style>
