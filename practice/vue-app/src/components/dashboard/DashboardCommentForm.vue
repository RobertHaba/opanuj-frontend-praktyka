<script setup lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { Comment } from '../../types/Comment';
import { inject, ref } from 'vue';
import { userNameKey } from '../../pages/ListPage.vue';
import CommentService from '../../services/CommentService';

const queryClient = useQueryClient();

defineProps<{ loading?: boolean }>();

const { isPending, isError, mutate } = useMutation({
  mutationFn: CommentService.add,
  onSuccess: (_, variables) => {
    // queryClient.invalidateQueries({ queryKey: ['comments'] }); - disabled: CommentService work as simulation without store the added data
    queryClient.setQueryData(['comments'], (old: Comment[]) => [
      variables,
      ...old,
    ]);
    resetForm();
  },
  onError: (_, variables) => {
    queryClient.setQueryData(['comments'], (old: Comment[]) =>
      old.filter((todo) => todo.id !== variables.id)
    );
  },
  mutationKey: ['addComment'],
  retry: 2,
});

const userName = inject(userNameKey);

const initialComment: Partial<Comment> = {
  author: userName,
  text: '',
  rating: undefined as number | undefined,
};

const comment = ref({ ...initialComment } as Comment);

function handleSubmit() {
  mutate({
    ...comment.value,
    id: +new Date(),
  });
}

function resetForm() {
  comment.value = { ...comment.value, ...initialComment };
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col gap-4"
    :class="{ 'opacity-40 animate-pulse': isPending || loading }"
    :inert="isPending || loading"
  >
    <div v-if="isError" class="bg-red-700 p-4 text-sm rounded-lg" role="alert">
      An error occurred while adding a comment. Please try again.
    </div>

    <label>
      Your comment
      <textarea
        v-model="comment.text"
        required
        class="w-full rounded-lg border border-zinc-700 bg-transparent p-2"
      />
    </label>

    <label>
      Rating
      <input
        type="number"
        min="1"
        max="5"
        required
        v-model.number="comment.rating"
        class="w-full rounded-lg border border-zinc-700 bg-transparent p-2"
      />
    </label>

    <button class="p-2 w-full text-center bg-blue-500 rounded-lg">Add</button>
  </form>
</template>
