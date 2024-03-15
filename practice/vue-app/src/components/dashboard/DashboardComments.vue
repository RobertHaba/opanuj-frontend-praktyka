<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { useComments } from '../../stores/comment';
import DashboardCommentForm from './DashboardCommentForm.vue';
import DashboardComment from './DashboardComment.vue';
import DashboardSection from './DashboardSection.vue';
import ASkeleton from '../ui/ASkeleton.vue';
import CommentService from '../../services/CommentService';

const { setComments, comments } = useComments();

const { isPending } = useQuery({
  queryKey: ['comments'],
  queryFn: async () => {
    const res = await CommentService.fetch();

    setComments(res);
    return res;
  },
});
</script>

<template>
  <DashboardSection title="All comments">
    <ul class="flex gap-2 flex-col overflow-y-auto h-72">
      <ASkeleton v-if="isPending" :repeat="5" />

      <template v-else-if="comments.length">
        <li v-for="comment in comments" :key="comment.id">
          <DashboardComment v-bind="comment" />
        </li>
      </template>
    </ul>

    <DashboardCommentForm :loading="isPending" />
  </DashboardSection>
</template>
