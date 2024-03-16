<script setup lang="ts">
import { useMutationState, useQuery } from '@tanstack/vue-query';
import DashboardCommentForm from './DashboardCommentForm.vue';
import DashboardComment from './DashboardComment.vue';
import DashboardSection from './DashboardSection.vue';
import ASkeleton from '../ui/ASkeleton.vue';
import CommentService from '../../services/CommentService';
import { Comment } from '../../types/Comment';

const { isPending, data: comments } = useQuery({
  queryKey: ['comments'],
  queryFn: CommentService.fetch,
});

const optimisticComments = useMutationState<Comment>({
  filters: { mutationKey: ['addComment'], status: 'pending' },
  select: (mutation) => mutation.state.variables as Comment,
});
</script>

<template>
  <DashboardSection title="All comments">
    <ul class="flex gap-2 flex-col overflow-y-auto h-72">
      <ASkeleton v-if="isPending" :repeat="5" />

      <template v-else-if="comments?.length">
        <li
          class="opacity-40 animate-pulse"
          v-for="comment in optimisticComments"
          :key="comment.id"
        >
          <DashboardComment v-bind="comment" />
        </li>
        <li v-for="comment in comments" :key="comment.id">
          <DashboardComment v-bind="comment" />
        </li>
      </template>
    </ul>

    <DashboardCommentForm :loading="isPending" />
  </DashboardSection>
</template>
