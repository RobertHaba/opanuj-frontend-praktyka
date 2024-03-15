import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Comment } from '../types/Comment';

export const useComments = defineStore('comments', () => {
  const comments = ref<Comment[]>([]);

  function setComments(payload: Comment[]) {
    comments.value.length = 0;
    comments.value.push(...payload);
  }

  function addComment(comment: Comment) {
    comments.value.unshift(comment);
  }

  function removeComment(id: Comment['id']) {
    const index = comments.value.findIndex((comment) => (comment.id === id));
    if (index > -1) comments.value.splice(index, 1);
  }

  return { comments, setComments, addComment, removeComment };
});
