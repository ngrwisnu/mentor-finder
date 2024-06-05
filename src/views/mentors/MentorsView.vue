<script>
import MentorCard from '@/components/mentors/MentorCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useMentorStore } from '@/stores/mentor'
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useMentorStore, ['getMentors'])
  },
  components: {
    MentorCard,
    BaseButton
  },
  methods: {
    clickHandler() {
      return this.$router.push('/register/mentors')
    }
  }
}
</script>

<template>
  <h1>Mentors</h1>
  <div class="actions">
    <BaseButton @click-handler="clickHandler" type="outline">Register as Mentor</BaseButton>
  </div>
  <p v-if="!getMentors.length">No mentors found!</p>
  <div v-else class="mentors-list">
    <MentorCard
      v-for="mentor in getMentors"
      :key="mentor.id"
      :id="mentor.id"
      :first-name="mentor.firstName"
      :last-name="mentor.lastName"
      :rate="mentor.rate"
      :desc="mentor.desc"
      :expertise="mentor.expertise"
    />
  </div>
</template>

<style scoped>
.mentors-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

h1,
.actions {
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 768px) {
  .mentors-list {
    align-items: start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
