<script>
import Sidebar from '@/components/Sidebar.vue';
import Table from '@/components/Table.vue';
import { useEventStore } from '@/stores/event.js';
import { useWeatherStore } from '@/stores/weather.js';
import { useUserStore } from '@/stores/user.js';

export default {
  name: 'DashboardView',
  components: { Sidebar, Table },

  beforeMount() {
    console.log("beforeMount")
    const userStore = useUserStore();
    userStore.getAuth();
  },

  // mounted() {
  //   const eventStore = useEventStore();
  //   const weatherStore = useWeatherStore();
  //   eventStore.getEvents();
  //   weatherStore.getWeather();
  // },

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