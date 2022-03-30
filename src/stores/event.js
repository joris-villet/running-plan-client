import { defineStore } from 'pinia'
import axios from 'axios'

export const useEventStore = defineStore({
  id: 'event',
  state: () => ({
    id: '',
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
    },
    async updateEvent() {
      try {
        const formData = {
          id: this.id,
          date: this.date,
          time: this.time,
          trainingType: this.trainingType,
          weight: this.weight
        }

        const { data } = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/events/${this.id}`, formData)
        console.log(data);
        if (data) {
          this.getEvents()
        }

      } catch(err) {
        console.log(err)
      }
    }
  }
})