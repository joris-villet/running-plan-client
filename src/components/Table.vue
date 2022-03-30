<script>
import Events from '@/components/Events.vue'
import Modal from '@/components/Modal.vue'
import { useEventStore } from '@/stores/event'
import { reactive, ref } from 'vue'

export default {
  name: 'Table',
  components: { Events, Modal },
  setup() {

    const locals = reactive({
      modalActive: false,
    })

    const eventStore = useEventStore();

    const editEvent = (event) => {
      locals.modalActive = true;
      eventStore.date = event.date;
      eventStore.time = event.time;
      eventStore.trainingType = event.trainingType;
      eventStore.weight = event.weight;
    }

    const updateEvent = () => {
      locals.modalActive = false;

      console.log(new Date(eventStore.date))
      console.log(eventStore.time)
      console.log(eventStore.trainingType)
      console.log(eventStore.weight)

      // const formData = {
      //   date: new Date(eventStore.date),
      //   time: eventStore.time,
      //   trainingType: eventStore.trainingType,
      //   weight: eventStore.weight
      // }

      // axios.put(`${state.baseUrl}/event/${state.eventIdUpdated}`, formdata)
      //   .then(res => {
      //     console.log(res);
      //     this.dispatch('getEvents')
      //   })
      //   .catch(err => console.log(err))

    }

    return {
      locals,
      eventStore,
      editEvent,
      updateEvent,
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

      <tr class="table__row" v-for="event in eventStore.events" :key="event.id">
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

      <Transition>
        <tr v-if="locals.modalActive" class="table__modal">
          <Modal
            v-model:time="eventStore.time"
            v-model:date="eventStore.date"
            v-model:trainingType="eventStore.trainingType"
            v-model:weight="eventStore.weight"
            :date="eventStore.date"
            :time="eventStore.time"
            :trainingType="eventStore.trainingType"
            :weight="eventStore.weight == null ? '/' : eventStore.weight + ' kg'"
          >
            <i @click="updateEvent" class="modal__icon far fa-check-square"></i>
          </Modal>
        </tr>
      </Transition>
    </tbody>

  </table>
</template>

<style>
@import '@/assets/scss/Table/table.css'; 
</style>


