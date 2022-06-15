<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { useUserStore } from '@/stores/user.js';
import { reactive } from 'vue';

export default {
  components: { Button, Input },

  setup() {

    const userStore = useUserStore();

    const locals = reactive({
      email: '',
      password: ''
    })

    const handleForm = () => {
      console.log('click')
      console.log(locals.email)
      console.log(locals.password)
    }

    return {
      handleForm,
      userStore,
      locals
    }

  }

}
</script>

<template>
  <form class="login__form">
    <Input
      @update="(value) => locals.email = value"
      classLabel="login__form__label" 
      classInput="login__form__input" 
      type="text" 
      placeholder="Email" 
    />
    <Input 
      @update="(value) => locals.password = value"
      classLabel="login__form__label" 
      classInput="login__form__input" 
      type="password" 
      placeholder="Mot de passe" 
    />
    <Button 
      @click.prevent="userStore.login(locals)" 
      class="login__form__btn" 
      value="Se connecter" 
    />
  </form>
</template>

<style>
@import '@/assets/scss/Login/login.css';
</style>
