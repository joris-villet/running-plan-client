<script>
import Events from '@/components/Events.vue'
import Modal from '@/components/Modal.vue'

import { reactive } from 'vue'

export default {
  name: 'Table',
  components: { Events, Modal },
  setup() {

    const locals = reactive({
      events: [
        { 
          id: 1,
          date: "22/05/2022",
          time: "1h",
          trainingType: "footing",
          weight: 75
        },
        { 
          id: 2,
          date: "22/05/2022",
          time: "1h",
          trainingType: "footing",
          weight: 75
        },
        { 
          id: 3,
          date: "22/05/2022",
          time: "1h",
          trainingType: "footing",
          weight: 75
        },
      ],
      modalActive: false
    })

    const editEvent = (event) => {
      locals.modalActive = true;
      console.log(event.id)
      console.log(event.date)
      console.log(event.time)
      console.log(event.trainingType)
      console.log(event.weight)
    }

    return {
      locals,
      editEvent
    }
  }
}
</script>

<template>
  <table class="table">
    <thead class="table__thead">

      <tr class="table__row">
        <td class="table__thead__td">Date</td>
        <td class="table__thead__td">Temps</td>
        <td class="table__thead__td">Type d'entrainements</td>
        <td class="table__thead__td">Poids</td>
      </tr>

    </thead>
    <tbody class="table__tbody">

      <tr class="table__row" v-for="event in locals.events" :key="event.id">
        <Events
          classTd="table__tbody__td"
          :date="event.date"
          :time="event.time"
          :trainingType="event.trainingType"
          :weight="event.weight == null ? '/' : event.weight + ' kg'"
        >
          <i @click="editEvent(event)" class="table__tbody__icon fas fa-edit"></i>
        </Events>
      </tr>

      <Transition name="slideDown">
        <tr v-if="locals.modalActive" class="table__modal">
          <Modal
          >
            <i class="modal__icon far fa-check-square"></i>
          </Modal>
        </tr>
      </Transition>

    </tbody>
  </table>
</template>

<style>
@import '@/assets/scss/Table/table.css'; 
</style>


