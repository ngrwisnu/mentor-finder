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
      this.requests.push(payload)
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
