<script>
import TableRow from '@/components/TableRow.vue'
import { reactive } from 'vue'

export default {
  name: 'Table',
  components: { TableRow },
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
      ]
    })

    return {
      locals
    }
  }
}
</script>

<template>
  <table class="table">
    <thead>
      <TableRow
        class="table__row table__row__thead"
        classTd="table__row__td"
        date="Date"
        time="Temps"
        training-type="Type d'entrainements"
        weight="Poids"
      />
    </thead>
    <tbody>
      <TableRow
        class="table__row"
        classTd="table__row__td"
        v-for="event in locals.events" 
        :key="event.id"
        :date="event.date"
        :time="event.time"
        :trainingType="event.trainingType"
        :weight="event.weight == null ? '/' : event.weight + ' kg'"
      >
        <i class="table__row__icon fas fa-edit"></i>
      </TableRow>
    </tbody>
  </table>
</template>

<style>
@import '@/assets/scss/Table/table.css'; 
</style>