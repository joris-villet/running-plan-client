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
  <form class="signup__form">
    <Input classLabel="signup__form__label" classInput="signup__form__input" type="text" placeholder="Email" />
    <Input classLabel="signup__form__label" classInput="signup__form__input" type="password" placeholder="Mot de passe" />
    <Input classLabel="signup__form__label" classInput="signup__form__input" type="password" placeholder="Confirmez le mot de passe" />
    <Button class="signup__form__btn" @click.prevent="handleForm" value="Se connecter" />
  </form>
</template>

<style>
@import '@/assets/scss/Signup/signup.css';
</style>
