<script>
export default {
  props: { 
    value: {
      type: String,
      required: true
    }
  }
}
</script>


<template>
  <button>{{ value }}</button>
</template>