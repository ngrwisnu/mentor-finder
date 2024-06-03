<script>
import MentorCard from '@/components/mentors/MentorCard.vue'

export default {
  components: {
    MentorCard
  },
  data() {
    return {
      mentors: [1]
    }
  }
}
</script>

<template>
  <h1>Mentors</h1>
  <p v-if="!mentors.length">No mentors found!</p>
  <div v-else class="mentors-list">
    <MentorCard
      id="mentor-1"
      first-name="John"
      last-name="Doe"
      :rate="30"
      desc="description content"
      :expertise="['Web Dev', 'Vue']"
    />
    <MentorCard
      id="mentor-2"
      first-name="John"
      :rate="30"
      desc="description content"
      :expertise="['Web Dev', 'Vue']"
    />
  </div>
</template>

<style>
.mentors-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
