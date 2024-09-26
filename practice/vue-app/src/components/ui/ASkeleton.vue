<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ repeat: number; random?: boolean }>();

const resolveRepeat = computed(() =>
  props.random ? Math.floor(Math.random() * props.repeat) + 1 : props.repeat
);
</script>

<template>
  <div
    v-for="n in resolveRepeat"
    :key="n"
    class="animate-pulse bg-zinc-700 size-14 w-full rounded-lg"
    v-bind="$attrs"
  />
</template>
