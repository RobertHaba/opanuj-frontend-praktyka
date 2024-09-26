<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { Article } from '../../types/Article';
import DashboardComment from './DashboardComment.vue';
import { computed } from 'vue';
import ASkeleton from '../ui/ASkeleton.vue';
import CommentService from '../../services/CommentService';

defineProps<Article>();

// This use is only for test tanstack
const { isPending, data } = useQuery({
  queryKey: ['comments'],
  queryFn: CommentService.fetch,
});

const comments = computed(() => {
  // Random comments simulation
  const maxLength = data.value?.length ?? 0;

  const randomStart = Math.floor(Math.random() * maxLength);
  const randomEnd =
    Math.floor(Math.random() * (maxLength - randomStart)) + randomStart;

  const start =
    randomStart === randomEnd && randomStart > 0
      ? randomStart - 1
      : randomStart;

  const end = randomEnd === 0 ? 1 : randomEnd;

  return data.value?.slice(start, end);
});
</script>

<template>
  <div class="p-4 border rounded-lg flex gap-1 flex-col border-zinc-700">
    <div>
      <h4 class="font-semibold">{{ title }}</h4>
      <div class="flex gap-1 text-xs">
        <span class="">Author:</span>
        <p>{{ author }}</p>
      </div>
    </div>

    <p class="text-sm text-zinc-400">{{ content }}</p>

    <div class="flex flex-col gap-1">
      <span class="text-xs">Comments</span>

      <div class="relative w-full flex overflow-x-auto gap-2">
        <ASkeleton v-if="isPending" class="w-60" :repeat="3" random />

        <template v-else-if="comments?.length">
          <DashboardComment
            class="shrink-0"
            v-for="comment in comments"
            :key="comment.id"
            v-bind="comment"
          />
        </template>
      </div>
    </div>
  </div>
</template>
