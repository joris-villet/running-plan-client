<script>

export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      required: true,
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
    <input :class="classInput" :type="type" :placeholder="placeholder">
  </label>
</template>