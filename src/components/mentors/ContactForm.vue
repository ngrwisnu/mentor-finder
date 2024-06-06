<script>
import { mapActions, mapState } from 'pinia'
import BaseButton from '../ui/BaseButton.vue'
import { useMentorStore } from '@/stores/mentor'
import { useRequestStore } from '@/stores/request'
import BaseForm from '../ui/BaseForm.vue'
import FormItem from '../ui/FormItem.vue'
import FormLabel from '../ui/FormLabel.vue'

export default {
  props: ['id'],
  components: {
    BaseButton,
    BaseForm,
    FormItem,
    FormLabel
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
        message: this.msg,
        created_at: new Date().getTime()
      }
      console.log(formData)

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
  <BaseForm :submit-handler="submitHandler">
    <FormItem>
      <FormLabel label-for="mentor_id">Mentor's name</FormLabel>
      <input type="text" id="mentor_id" :value="mentorName" disabled readonly />
    </FormItem>
    <FormItem>
      <FormLabel label-for="email">Your email</FormLabel>
      <input
        type="email"
        id="email"
        placeholder="ex: john@example.com"
        v-model.trim="email"
        required
      />
    </FormItem>
    <FormItem>
      <FormLabel label-for="msg">Message</FormLabel>
      <textarea
        type="text"
        rows="5"
        id="msg"
        placeholder="Your message for the mentor"
        v-model.trim="msg"
        required
      ></textarea>
    </FormItem>
    <div class="actions">
      <BaseButton type="primary">Send request</BaseButton>
    </div>
  </BaseForm>
</template>

<style scoped>
.actions {
  display: flex;
  justify-content: end;
}
</style>
