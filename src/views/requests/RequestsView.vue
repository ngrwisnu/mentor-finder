<script>
import RequestCard from '@/components/requests/RequestCard.vue'
import { useMentorStore } from '@/stores/mentor'
import { useRequestStore } from '@/stores/request'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    RequestCard
  },
  computed: {
    ...mapState(useRequestStore, ['getRequests']),
    ...mapState(useMentorStore, ['getMentors'])
  },
  methods: {
    findMentorById(id) {
      const mentor = this.getMentors.find((item) => item.id === id)

      return `${mentor.firstName} ${mentor.lastName || ''}`
    },
    ...mapActions(useRequestStore, ['setRequests'])
  },
  created() {
    this.setRequests()
  }
}
</script>

<template>
  <h1>Requests List</h1>
  <p v-if="!getRequests.length">There is no request yet!</p>
  <div v-else class="requests-list">
    <RequestCard
      v-for="req in getRequests"
      :key="req.id"
      :to="findMentorById(req.mentor_id)"
      :from="req.email"
      :message="req.message"
    />
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}

.requests-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
}
</style>
