import { getDataFromStorage, setDataToStorage } from '@/helpers'
import { defineStore } from 'pinia'

interface State {
  requests: RequestInfo[]
}

export const useRequestStore = defineStore('request', {
  state: (): State => {
    return {
      requests: []
    }
  },
  getters: {
    getRequests: (state) => {
      return state.requests.sort((a, b) => b.created_at - a.created_at)
    }
  },
  actions: {
    addRequest(payload: RequestInfo) {
      const requests = getDataFromStorage('requests')

      if (requests) {
        requests.push(payload)
        setDataToStorage('requests', JSON.stringify(requests))
      } else {
        const newRequest = []

        newRequest.push(payload)
        setDataToStorage('requests', JSON.stringify(newRequest))
      }
    },
    setRequests() {
      const requests = getDataFromStorage('requests')

      if (!requests) {
        this.requests = []
      } else {
        this.requests = requests
      }
    }
  }
})

export interface RequestInfo {
  id: string
  mentor_id: string
  email: string
  message: string
  created_at: number
}
