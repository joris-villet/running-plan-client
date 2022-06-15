<script>

export default {
  // emits: ['update-merde'],
  name: 'Input',
  props: {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    classLabel: {
      type: String,
      required: false,
    },
    classInput: {
      type: String,
      required: false,
    }
  }
}
</script>


<template>
  <label :class="classLabel">
    <input @input="$emit('update', $event.target.value)" :class="classInput" :type="type" :value="value" :placeholder="placeholder">
  </label>
</template>