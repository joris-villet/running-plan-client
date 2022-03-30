import { defineStore } from 'pinia'
import axios from 'axios'

export const useEventStore = defineStore({
  id: 'event',
  state: () => ({
    date: '',
    time: '',
    trainingType: '',
    weight: '',
    events: []
  }),
  actions: { 
    async getEvents() {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/events`)
        console.log(data);
        this.events = data;
      } catch(err) {
        console.log(err)
      }
    }
  }
})