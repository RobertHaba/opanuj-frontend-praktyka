<script setup lang="ts">
import { userNameKey } from '../../pages/ListPage.vue';
import { inject } from 'vue';
import { Comment } from '../../types/Comment';

defineProps<Comment>();

const userName = inject(userNameKey);
</script>

<template>
  <div
    class="p-2 border border-zinc-700 rounded-lg"
    :class="{
      'border-zinc-800 bg-zinc-700': author === userName,
    }"
  >
    <p class="text italic">"{{ text }}"</p>

    <div class="flex gap-x-3 justify-between text-xs">
      <span class="text-zinc-400">{{ author }}</span>
      <div>
        <span v-for="n in rating" :key="n">⭐</span>
      </div>
    </div>
  </div>
</template>
