<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { Comment } from '../../types/Comment';
import { useComments } from '../../stores/comment';
import { inject, ref } from 'vue';
import { userNameKey } from '../../pages/ListPage.vue';
import CommentService from '../../services/CommentService';

defineProps<{ loading?: boolean }>();

const { addComment, removeComment } = useComments();

const { isPending, mutate } = useMutation({
  mutationFn: CommentService.add,
  onMutate: (data) => {
    addComment(data);
  },
  onError: (_, data) => removeComment(data.id),
  retry: 2,
});

const userName = inject(userNameKey);

const initialComment: Partial<Comment> = {
  id: +new Date(),
  author: userName,
  text: '',
  rating: undefined as number | undefined,
};

const comment = ref({ ...initialComment } as Comment);

function handleSubmit() {
  mutate({ ...comment.value });
  resetForm();
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
