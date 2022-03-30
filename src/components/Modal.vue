<script>
import { useEventStore } from '@/stores/event'
import { ref } from 'vue'

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

    const eventStore = useEventStore();
    const inputType = ref('text');
    console.log(inputType.value)
    const changeType = () => inputType.value = 'date';
   
    return { 
      eventStore,
      inputType,
      changeType
    }
  }
}
</script>

<template>
  <slot></slot>
  <td class="modal__td">
    <label>
      <input 
        class="modal__td__input" 
        :type="inputType"
        :value="date"
        @input="$emit('update:date', $event.target.value)"
        @focus="changeType"
      >
    </label>
  </td>
  <td class="modal__td">
    <label>
      <input
        class="modal__td__input" 
        type="text"
        :value="time"
        @input="$emit('update:time', $event.target.value)"
      >
    </label>
  </td>
  <td class="modal__td">
    <label>
      <input 
        class="modal__td__input" 
        type="text"
        :value="trainingType"
        @input="$emit('update:trainingType', $event.target.value)"
      >
    </label>
  </td>
  <td class="modal__td">
    <label>
      <input 
        class="modal__td__input" 
        type="text"
        :value="weight"
        @input="$emit('update:weight', $event.target.value)"
      >
    </label>
  </td>
</template>

<style>
@import '@/assets/scss/Modal/modal.css';  
</style>