<script>
import { reactive } from 'vue'

export default {
  name: 'Modal',
  components: {  },
  props: {
    date: String,
    time: String,
    trainingType: String,
    weight: [String, Number]
  },
  setup() {

  }
}
</script>

<template>
  <slot></slot>
  <td class="modal__td">
    <label>
      <input 
        class="modal__td__input" 
        type="text" 
    
      >
    </label>
  </td>
  <td class="modal__td">
    <label>
      <input
        class="modal__td__input" 
        type="text"
      >
    </label>
  </td>
  <td class="modal__td">
    <label>
      <input 
        class="modal__td__input" 
        type="text"
      >
    </label>
  </td>
  <td class="modal__td">
    <label>
      <input 
        class="modal__td__input" 
        type="text"
      >
    </label>
  </td>
</template>

<style>
@import '@/assets/scss/Modal/modal.css';  
</style>