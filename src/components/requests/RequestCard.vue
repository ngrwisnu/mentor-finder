<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    message: String
  }
}
</script>

<template>
  <div class="request-card">
    <div class="request-card__info">
      <div class="request-card__from"><span class="label">To</span> : {{ to }}</div>
      <div class="request-card__to"><span class="label">From</span> : {{ from }}</div>
    </div>
    <div class="request-card__msg">
      <div class="label">Message</div>
      <div class="message">{{ message }}</div>
    </div>
  </div>
</template>

<style scoped>
.request-card {
  width: 100%;
  background-color: white;
  border: 1px solid var(--border-200);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.request-card__from,
.request-card__to {
  display: flex;
}

.request-card__from .label,
.request-card__to .label {
  width: 50px;
}

.label {
  font-weight: 500;
}

.message {
  color: var(--text-body);
}

@media screen and (min-width: 768px) {
  .request-card {
    width: 60%;
  }
}
</style>
