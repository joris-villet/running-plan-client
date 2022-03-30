<script>
import Sidebar from '@/components/Sidebar.vue'
import Table from '@/components/Table.vue'

export default {
  name: 'DashboardView',
  components: { Sidebar, Table },

  setup() {

    return {
    
    }

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