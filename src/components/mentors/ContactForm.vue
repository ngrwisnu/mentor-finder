<script>
import { mapActions, mapState } from 'pinia'
import BaseButton from '../ui/BaseButton.vue'
import { useMentorStore } from '@/stores/mentor'
import { useRequestStore } from '@/stores/request'

export default {
  props: ['id'],
  components: {
    BaseButton
  },
  data() {
    return {
      email: '',
      msg: ''
    }
  },
  methods: {
    ...mapActions(useRequestStore, ['addRequest']),
    submitHandler() {
      const formData = {
        id: `request-${+new Date()}`,
        mentor_id: this.id,
        email: this.email,
        message: this.msg
      }

      this.addRequest(formData)

      this.$router.push('/requests')
    }
  },
  computed: {
    ...mapState(useMentorStore, ['getMentors']),
    mentorName() {
      const mentor = this.getMentors.find((item) => item.id === this.id)

      return `${mentor.firstName} ${mentor.lastName || ''}`
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <div class="form-input">
      <label class="label" for="mentor_id">Mentor's name</label>
      <input type="text" id="mentor_id" :value="mentorName" disabled readonly />
    </div>
    <div class="form-input">
      <label class="label" for="email">Your email</label>
      <input
        type="email"
        id="email"
        placeholder="ex: john@example.com"
        v-model.trim="email"
        required
      />
    </div>
    <div class="form-input">
      <label class="label" for="msg">Message</label>
      <textarea
        type="text"
        rows="5"
        id="msg"
        placeholder="Your message for the mentor"
        v-model.trim="msg"
        required
      ></textarea>
    </div>
    <div class="actions">
      <BaseButton type="primary">Send request</BaseButton>
    </div>
  </form>
</template>

<style scoped>
form,
.form-input.checkbox,
.actions {
  display: flex;
}

form {
  padding: 1rem;
  border-radius: 12px;
  background-color: white;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
}

.form-input > :not(label, input[type='checkbox']) {
  width: 100%;
  border-radius: 4px;
  padding: 6px 12px;
  border: 1px solid var(--border-200);
}

.label {
  font-weight: 500;
}

.actions {
  justify-content: end;
}

@media screen and (min-width: 768px) {
  form {
    width: 50%;
  }
}
</style>
