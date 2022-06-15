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

    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>

    <router-link v-if="$route.name == 'LoginView'" to="/signup" class="switch-form">S'inscrire</router-link>
    <router-link v-else-if="$route.name == 'SignupView'" to="/login" class="switch-form">Se connecter</router-link>

  </Overlay>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/scss/main.css';
</style>
