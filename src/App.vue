<script>
import Overlay from '@/components/Overlay.vue'
import Header from '@/components/Header.vue'

export default {
  components: { Overlay, Header }

}
</script>

<template>
  <Overlay>

    <Header />

    <RouterView />

  </Overlay>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/scss/main.css';
</style>
