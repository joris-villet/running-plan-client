import { defineStore } from 'pinia'

export const useEventStore = defineStore({
  id: 'event',
  state: () => ({
    date: '',
    time: '',
    trainingType: '',
    weight: '',
    events: [
      { 
        id: 1,
        date: "22/05/2022",
        time: "1h",
        trainingType: "vélo",
        weight: 75
      },
      { 
        id: 2,
        date: "27/05/2022",
        time: "4h",
        trainingType: "footing",
        weight: 70
      },
      { 
        id: 3,
        date: "30/05/2022",
        time: "2h",
        trainingType: "compétition",
        weight: 75
      },
    ],
  }),
})