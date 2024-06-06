<script>
import BaseForm from '../ui/BaseForm.vue'
import FormItem from '../ui/FormItem.vue'
import FormLabel from '../ui/FormLabel.vue'
import BaseButton from '../ui/BaseButton.vue'

export default {
  components: {
    BaseForm,
    FormLabel,
    FormItem,
    BaseButton
  },
  data() {
    return {
      status: '',
      firstName: ''
    }
  },
  methods: {
    submitHandler() {
      const formData = {
        status: this.status,
        firstName: this.firstName
      }

      console.log(formData)
    }
  }
}
</script>

<template>
  <BaseForm :submit-handler="submitHandler">
    <FormItem>
      <FormLabel>I'm a ...</FormLabel>
      <div class="options">
        <FormItem :class="['radio']">
          <input type="radio" id="mentor" value="mentor" v-model="status" />
          <FormLabel label-for="mentor">Mentor</FormLabel>
        </FormItem>
        <FormItem :class="['radio']">
          <input type="radio" id="student" value="student" v-model="status" />
          <FormLabel label-for="student">Student</FormLabel>
        </FormItem>
      </div>
    </FormItem>
    <FormItem>
      <FormLabel label-for="firstName">Your firstname</FormLabel>
      <input
        type="text"
        id="firstName"
        placeholder="Your firstname"
        v-model.trim="firstName"
        required
      />
    </FormItem>
    <div class="actions">
      <BaseButton type="primary">Login</BaseButton>
    </div>
  </BaseForm>
</template>

<style scoped>
.options {
  width: 100%;
  display: flex;
}
</style>
