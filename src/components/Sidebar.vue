<script>
import Title from '@/components/Title.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

export default {
  name: 'Sidebar',
  components: { Title, Button, Input  },

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
  <aside class="sidebar">
    <div>ici Health</div>
    <div>ici weather</div>
    <form class="sidebar__form">
      <Title h2 class="sidebar__form__title" title="Ajouter un évenement" />
      <Input 
        classLabel="sidebar__form__label" 
        classInput="sidebar__form__input" 
        type="date" 
        placeholder="Date" 
      />
      <Input 
        classLabel="sidebar__form__label" 
        classInput="sidebar__form__input" 
        type="text" 
        placeholder="Temps" 
      />
      <Input 
        classLabel="sidebar__form__label" 
        classInput="sidebar__form__input" 
        type="text" 
        placeholder="Type d'entrainement" 
      />
      <Input 
        classLabel="sidebar__form__label" 
        classInput="sidebar__form__input" 
        type="text" 
        placeholder="Poids" 
      />
      <Button class="sidebar__form__btn" @click.prevent="handleForm" value="Valider" />
    </form>
  </aside>
</template>

<style>
@import '@/assets/scss/Sidebar/sidebar.css'; 
</style>