<script>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

export default {
  components: { Button, Input },

  setup() {

    const handleForm = () => {
      console.log('click')
    }

    return {
      handleForm
    }

  }

}
</script>

<template>
  <form class="login__form">
    <Input classLabel="login__form__label" classInput="login__form__input" type="text" placeholder="Email" />
    <Input classLabel="login__form__label" classInput="login__form__input" type="password" placeholder="Mot de passe" />
    <Button class="login__form__btn" @click.prevent="handleForm" value="Se connecter" />
  </form>
</template>

<style>
@import '@/assets/scss/Login/login.css';
</style>
