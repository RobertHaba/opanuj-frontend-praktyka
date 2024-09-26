<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import ListPage from './pages/ListPage.vue';
</script>

<template>
  <div>
    <ListPage />

    <VueQueryDevtools />
  </div>
</template>
