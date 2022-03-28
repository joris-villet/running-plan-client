
<script>

export default {

  props: {
    h1: { 
      type: Boolean,
      required: false
    },
    h2: { 
      type: Boolean,
      required: false
    },
    h3: { 
      type: Boolean,
      required: false
    },
    h4: { 
      type: Boolean,
      required: false
    },
    h5: { 
      type: Boolean,
      required: false
    },
    title: { 
      type: String,
      required: true
    }
  },

  setup() {

  }

}
</script>


<template>
  <h1 v-if="h1">{{ title }}</h1>
  <h2 v-else-if="h2">{{ title }}</h2>
  <h3 v-else-if="h3">{{ title }}</h3>
  <h4 v-else-if="h4">{{ title }}</h4>
  <h5 v-else-if="h5">{{ title }}</h5>
  <h6 v-else>{{ title }}</h6>
</template>





<style>
  
</style>