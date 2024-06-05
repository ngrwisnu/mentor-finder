<script>
import BaseButton from '../ui/BaseButton.vue'
import { useMentorStore } from '@/stores/mentor'
import { mapActions } from 'pinia'

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      rate: null,
      expertise: [],
      desc: ''
    }
  },
  methods: {
    ...mapActions(useMentorStore, ['addMentor']),
    submitHandler() {
      const formData = {
        id: `mentor-${+new Date()}`,
        firstName: this.firstName,
        lastName: this.lastName,
        rate: this.rate,
        expertise: this.expertise,
        desc: this.desc
      }

      this.addMentor(formData)

      this.clearForm()
      this.$router.push('/mentors')
    },
    clearForm() {
      this.firstName = ''
      this.lastName = ''
      this.rate = null
      this.expertise = []
      this.desc = ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <div class="form-input">
      <label class="label" for="firstName">First name</label>
      <input type="text" id="firstName" placeholder="ex: John" v-model.trim="firstName" />
    </div>
    <div class="form-input">
      <label class="label" for="lastName">Last name</label>
      <input type="text" id="lastName" placeholder="ex: Doe" v-model.trim="lastName" />
    </div>
    <div class="form-input">
      <label class="label" for="rate">Hourly rate</label>
      <input type="number" id="rate" placeholder="ex: 30" v-model.number="rate" />
    </div>
    <div>
      <div class="label">Select the expertise</div>
      <div class="form-input checkbox">
        <input type="checkbox" id="frontend" value="frontend" v-model="expertise" />
        <label for="frontend">Front-End</label>
      </div>
      <div class="form-input checkbox">
        <input type="checkbox" id="backend" value="backend" v-model="expertise" />
        <label for="backend">Back-End</label>
      </div>
      <div class="form-input checkbox">
        <input type="checkbox" id="uiux" value="uiux" v-model="expertise" />
        <label for="uiux">UI/UX</label>
      </div>
    </div>
    <div class="form-input">
      <label class="label" for="desc">About me</label>
      <textarea
        type="text"
        rows="5"
        id="desc"
        placeholder="Tell us about yourself"
        v-model.trim="desc"
      ></textarea>
    </div>
    <div class="actions">
      <BaseButton type="primary">Submit</BaseButton>
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
  max-width: 400px;
  margin: 0 auto;
  flex-direction: column;
  gap: 1rem;
}

.form-input.checkbox {
  flex-direction: row;
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

input[type='checkbox'] {
  margin-right: 4px;
}

input:active {
  border: 1px solid purple;
  outline: none;
}

.actions {
  justify-content: end;
}
</style>
