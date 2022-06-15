<script>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import { reactive } from 'vue';

export default {
  components: { Button, Input },

  setup() {

    const handleForm = () => {
      console.log('click')
      console.log(locals.email)
      console.log(locals.password)
    }

    const locals = reactive({
      email: '',
      password: ''
    })

    const eventMerde = (value) => {
      console.log(value)
      locals.email = value
    }

    const updatePassword = (value) => locals.password = value;

    return {
      handleForm,
      locals,
      eventMerde,
      updatePassword
    }

  }

}
</script>

<template>
  <form class="signup__form">
    <Input @update-merde="eventMerde" classLabel="signup__form__label" classInput="signup__form__input" type="text" placeholder="Email" />
    <Input @update-merde="updatePassword" classLabel="signup__form__label" classInput="signup__form__input" type="password" placeholder="Mot de passe" />
    <Input classLabel="signup__form__label" classInput="signup__form__input" type="password" placeholder="Confirmez le mot de passe" />
    <Button class="signup__form__btn" @click.prevent="handleForm" value="S'inscrire" />
    {{ locals.password }}
  </form>
</template>

<style>
@import '@/assets/scss/Signup/signup.css';
</style>
