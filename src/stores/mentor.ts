import { getDataFromStorage, setDataToStorage } from '@/helpers'
import { defineStore } from 'pinia'

interface State {
  mentors: MentorInfo[]
}

export const useMentorStore = defineStore('mentor', {
  state: (): State => {
    return {
      mentors: []
    }
  },
  actions: {
    addMentor(payload: MentorInfo) {
      const mentors = getDataFromStorage('mentors')

      if (mentors) {
        mentors.push(payload)
        setDataToStorage('mentors', JSON.stringify(mentors))
      } else {
        const newMentor = []

        newMentor.push(payload)
        setDataToStorage('mentors', JSON.stringify(newMentor))
      }
    },
    setMentors() {
      const mentors = getDataFromStorage('mentors')

      if (!mentors) {
        this.mentors = []
      } else {
        this.mentors = mentors
      }
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
