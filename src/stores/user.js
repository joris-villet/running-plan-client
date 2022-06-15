import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loggedIn: false,
    email: '',
    router: useRouter()
  }),
  actions: {
    login(payload) {
      
      console.log(payload.email)
      console.log(payload.password)

      axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`, payload)
      .then((res) => {
        console.log(res)
        this.loggedIn = true;
        setTimeout(() => {
          this.router.push({ path: "/dashboard" })
        }, 1000)
      })
      .catch((err) => {
        console.log(err);
      })
    },

    getAuth() {
      const router = useRouter();

      if (this.loggedIn) {
        return router.push({ path: "/dashboard" })
      }

      axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth`)
      .then(res => {
        console.log(res);
        this.loggedIn = true;
        return router.push({ path: "/dashboard" })
      })
      .catch((err) => {
        console.log(err);
        this.loggedIn = false;
        router.push({ path: "/login" })
      })
    }
  }

});