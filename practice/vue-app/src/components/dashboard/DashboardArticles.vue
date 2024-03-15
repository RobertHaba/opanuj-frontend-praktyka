<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import DashboardArticle from './DashboardArticle.vue';
import DashboardSection from './DashboardSection.vue';
import ArticleService from '../../services/ArticleService';

const { isPending, data: articles } = useQuery({
  queryKey: ['articles'],
  queryFn: ArticleService.fetch,
});
</script>

<template>
  <DashboardSection title="Articles">
    <template v-if="isPending">
      <div
        v-for="n in 10"
        :key="n"
        class="h-44 w-full animate-pulse bg-zinc-700 rounded-lg"
      ></div>
    </template>

    <template v-if="articles?.length">
      <DashboardArticle
        v-for="article in articles"
        :key="article.id"
        v-bind="article"
      />
    </template>
  </DashboardSection>
</template>
