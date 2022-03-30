<script>
import Sidebar from '@/components/Sidebar.vue'
import Table from '@/components/Table.vue'
import { useEventStore } from '@/stores/event.js'

export default {
  name: 'DashboardView',
  components: { Sidebar, Table },

  mounted() {
    const eventStore = useEventStore();
    eventStore.getEvents()
  },

  setup() {

  }

}
</script>

<template>
  <section class="dashboard">
    <Sidebar />
    <Table />
  </section>
</template>

<style>
@import '@/assets/scss/Dashboard/dashboard.css'; 
</style>