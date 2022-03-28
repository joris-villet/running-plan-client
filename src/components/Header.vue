<script>
import Title from '@/components/Title.vue'

export default {
  components: { Title }
}

</script>

<template>
  <header>
    <Title h1 class="title" title="Running Plan" />
  </header>
</template>

<style scoped>
.title {
  font-size: 2.3rem;
  color: #ffa84c;
  font-family: 'Stick No Bills', sans-serif;
  text-shadow: 1px 1px 2px rgb(105, 58, 14);
}

</style>