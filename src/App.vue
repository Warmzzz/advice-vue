<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="container">
    <Header class="header" />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 4rem;
}
</style>
