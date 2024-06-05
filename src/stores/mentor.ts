import { defineStore } from 'pinia'

interface State {
  mentors: MentorInfo[]
}

export const useMentorStore = defineStore('mentor', {
  state: (): State => {
    return {
      mentors: [
        {
          id: 'mentor-1',
          firstName: 'John',
          lastName: 'Doe',
          rate: 30,
          expertise: ['Front-End', 'UI/UX'],
          desc: 'short description'
        },
        {
          id: 'mentor-2',
          firstName: 'Denise',
          lastName: 'Doe',
          rate: 25,
          expertise: ['Back-End'],
          desc: 'short description'
        }
      ]
    }
  },
  actions: {
    addMentor(payload: MentorInfo) {
      this.mentors.push(payload)
    }
  },
  getters: {
    getMentors: (state) => {
      return state.mentors
    }
  }
})

export interface MentorInfo {
  id: string
  firstName: string
  lastName: string
  rate: number
  expertise: string[]
  desc: string
}
