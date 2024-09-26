<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import DashboardSection from './DashboardSection.vue';
import ASkeleton from '../ui/ASkeleton.vue';
import AuthorService from '../../services/AuthorService';

const { isPending, data: authors } = useQuery({
  queryKey: ['authors'],
  queryFn: AuthorService.fetch,
});
</script>

<template>
  <DashboardSection title="All authors">
    <ul class="flex gap-2 flex-col">
      <ASkeleton v-if="isPending" :repeat="5" random />

      <template v-else>
        <li
          class="flex flex-row items-center gap-1 border-b border-zinc-700 pb-2 last:border-0"
          v-for="author in authors"
          :key="author.id"
        >
          <img
            :src="`https://randomuser.me/api/portraits/men/${author.id}.jpg`"
            class="size-10 mr-1 rounded-full"
            :alt="`User: ${author.name}`"
          />
          <div class="flex flex-col justify-between h-full">
            <p>{{ author.name }}</p>
            <span class="text-sm text-zinc-400">
              comments: {{ author.comments }} - articles:
              {{ author.articles }}
            </span>
          </div>
        </li>
      </template>
    </ul>
  </DashboardSection>
</template>
