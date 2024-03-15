<script setup lang="ts">
import { inject } from 'vue';
import { userNameKey } from '../pages/ListPage.vue';

const userName = inject(userNameKey);
</script>

<template>
  <header class="w-full border-b p-4 border-zinc-700 flex justify-between">
    <span>Vue Tanstack App</span>
    <span>Hi, {{ userName }}</span>
  </header>
</template>
