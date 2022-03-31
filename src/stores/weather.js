import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore({
  id: 'weather',
  state: () => ({
    active: false,
    cityName: 'Saint-Dizier',
    temperature: '',
    description: '',
    windSpeed: '',
  }),
  actions: { 
    async getWeather() {
      try {
        console.log(import.meta.env.VITE_API_KEY_OPENWEATHER)
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${import.meta.env.VITE_API_KEY_OPENWEATHER}&lang=fr`)
        console.log(data)
        console.log("description => ", data.weather[0].description)
        if (data) {
          this.active = true;
          this.temperature = Math.round(data.main.temp);
          this.description = data.weather[0].description;
          this.windSpeed = data.wind.speed;
        }
      } catch(err) {
        console.log(err)
      }
        
    },
    
  }
})