<script>
import BaseButton from '../ui/BaseButton.vue'
import BaseForm from '../ui/BaseForm.vue'
import FormItem from '../ui/FormItem.vue'
import FormLabel from '../ui/FormLabel.vue'
import { useMentorStore } from '@/stores/mentor'
import { mapActions } from 'pinia'

export default {
  components: {
    BaseButton,
    BaseForm,
    FormItem,
    FormLabel
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
  <BaseForm :submit-handler="submitHandler">
    <FormItem>
      <FormLabel label-for="firstName">First name</FormLabel>
      <input type="text" id="firstName" placeholder="ex: John" v-model.trim="firstName" required />
    </FormItem>
    <FormItem>
      <FormLabel label-for="lastName">Last name</FormLabel>
      <input type="text" id="lastName" placeholder="ex: Doe" v-model.trim="lastName" />
    </FormItem>
    <FormItem>
      <FormLabel label-for="rate">Hourly rate</FormLabel>
      <input type="number" id="rate" placeholder="ex: 30" v-model.number="rate" required />
    </FormItem>
    <FormItem>
      <FormLabel>Select the expertise</FormLabel>
      <FormItem :class="['checkbox']">
        <input type="checkbox" id="frontend" value="frontend" v-model="expertise" />
        <FormLabel :class="['checkbox']" label-for="frontend">Front-End</FormLabel>
      </FormItem>
      <FormItem :class="['checkbox']">
        <input type="checkbox" id="backend" value="backend" v-model="expertise" />
        <FormLabel :class="['checkbox']" label-for="backend">Back-End</FormLabel>
      </FormItem>
      <FormItem :class="['checkbox']">
        <input type="checkbox" id="uiux" value="uiux" v-model="expertise" />
        <FormLabel :class="['checkbox']" label-for="uiux">UI/UX</FormLabel>
      </FormItem>
    </FormItem>
    <FormItem>
      <FormLabel label-for="desc">About me</FormLabel>
      <textarea
        type="text"
        rows="5"
        id="desc"
        placeholder="Tell us about yourself"
        v-model.trim="desc"
      ></textarea>
    </FormItem>
    <div class="actions">
      <BaseButton type="primary">Submit</BaseButton>
    </div>
  </BaseForm>
</template>

<style scoped>
.actions {
  display: flex;
  justify-content: end;
}
</style>
