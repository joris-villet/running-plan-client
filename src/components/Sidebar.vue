<script>
import Title from '@/components/Title.vue'
import { reactive } from 'vue'
import { useEventStore } from '@/stores/event.js'
import Health from '@/components/Health.vue'
import Weather from '@/components/Weather.vue'

export default {
  name: 'Sidebar',
  components: { Title, Health, Weather },

  setup() {

    const eventStore = useEventStore();

    const locals = reactive({
      date: '',
      time: '',
      trainingType: '',
      weight: '',
    })

    const handleForm = () => {
      locals.weight = parseInt(locals.weight, 10)

      locals.date === '' ||
      locals.trainingType === '' ||
      locals.time === '' ||
      locals.weight === ''; return
      //eventStore.createEvent(locals);
      // locals.date = "";
      // locals.time = "";
      // locals.trainingType = "";
      // locals.weight = "";
    }

    return {
      handleForm,
      locals,
      eventStore
    }

  },

}
</script>


<template>
  <aside class="sidebar">
    <Health />
    <Weather />
    <form class="sidebar__form">
      <Title h2 class="sidebar__form__title" title="Ajouter un évenement" />
      <label class="sidebar__form__label">
        <input 
          v-model="locals.date"
          class="sidebar__form__input" 
          type="date"
          placeholder="Date"
        >
      </label>
      <label class="sidebar__form__label">
        <input 
          v-model="locals.time"
          class="sidebar__form__input" 
          type="text"
          placeholder="Temps" 
        >
      </label>
      <label class="sidebar__form__label">
        <input 
          v-model="locals.trainingType"
          class="sidebar__form__input" 
          type="text"
          placeholder="Type d'entrainement"
        >
      </label>
      <label class="sidebar__form__label">
        <input 
          v-model="locals.weight"
          class="sidebar__form__input" 
          type="text"
          placeholder="Poids" 
        >
      </label>
      <button class="sidebar__form__btn" @click.prevent="handleForm">Valider</button>
    </form>
  </aside>
</template>

<style>
@import '@/assets/scss/Sidebar/sidebar.css'; 
</style>