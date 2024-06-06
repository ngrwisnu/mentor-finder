<script>
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '../ui/BaseButton.vue'

export default {
  components: {
    BaseBadge,
    BaseButton
  },
  props: {
    id: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: String,
    rate: Number,
    desc: String,
    expertise: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    getFullname() {
      return `${this.firstName} ${this.lastName || ''}`
    }
  },
  methods: {
    requestLink(id) {
      return this.$router.push(`/mentors/${id}/contact`)
    },
    detailsLink(id) {
      return `/mentors/${id}`
    }
  }
}
</script>

<template>
  <div class="mentor-card">
    <div class="mentor-card__name">{{ getFullname }}</div>
    <div class="mentor-card__rate">${{ rate }}/hr</div>
    <div v-if="expertise.length > 0" class="mentor-card__expertise">
      <BaseBadge v-for="skill in expertise" :key="skill" :text="skill" />
    </div>
    <div class="mentor-card__desc">{{ desc }}</div>
    <div class="actions">
      <BaseButton :linkTo="detailsLink(id)" linkText="Details" asLink />
      <BaseButton @click-handler="requestLink(id)" type="primary">Send Request</BaseButton>
    </div>
  </div>
</template>

<style lang="css" scoped>
.mentor-card,
.mentor-card__expertise {
  display: flex;
}

.mentor-card {
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border-radius: 12px;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #cbd5e1;
  background-color: #f8fafc;
}

.mentor-card__name {
  font-size: 1.25rem;
  font-weight: 600;
}

.mentor-card__rate {
  font-size: 1.125rem;
}

.mentor-card__expertise {
  gap: 4px;
  flex-wrap: wrap;
}

.mentor-card__desc {
  font-size: 1rem;
  color: var(--text-body);
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
}
</style>
