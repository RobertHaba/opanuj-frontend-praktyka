<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
}

withDefaults(defineProps<Props>(), { type: 'button' });
</script>

<template>
  <button class="h-10 bg-blue-700 px-4 rounded-lg text-white" :type="type">
    {{ label }}
  </button>
</template>
