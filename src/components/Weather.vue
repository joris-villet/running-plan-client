<script>

import { useWeatherStore} from '@/stores/weather.js'

export default {
  name: 'Weather',
  setup() {

    const weatherStore = useWeatherStore();

    // setInterval(() => {
    //   store.dispatch('getWeather')
    //   console.log("REQUEST WEATHER")
    // }, 5 * 60 * 1000);

    return {
      weatherStore
    }


  }
}
</script>


<template>
  <div v-if="weatherStore.active" class="weather">
    <h2 class="weather__name">{{ weatherStore.cityName }}</h2>
    <p class="weather__icon" v-if="weatherStore.description === 'couvert'">&#x2601;</p> 
    <p class="weather__temp">{{ weatherStore.temperature }} °</p>
    <p class="weather__description">{{ weatherStore.description }}</p>
    <p class="weather__windspeed">Vent: {{ weatherStore.windSpeed }} km/h</p>
  </div>
  <p v-else>Aucune météo trouvée</p>
</template>


<style scoped>
@import '@/assets/scss/Weather/weather.css';
</style>