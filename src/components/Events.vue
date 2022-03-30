<script>

export default {
  name: 'Events',
  props: {
    date: String,
    time: String,
    trainingType: String,
    weight: [String, Number],
    classTd: {
      type: String,
      required: false
    }
  },
  setup() {

  }
}
</script>

<template>
  <slot></slot>
  <td :class="classTd">{{ date }}</td>
  <td :class="classTd">{{ time }}</td>
  <td :class="classTd">{{ trainingType }}</td>
  <td :class="classTd">{{ weight }}</td>
</template>

<style>
@import '@/assets/scss/TableRow/tablerow.css'; 
</style>



