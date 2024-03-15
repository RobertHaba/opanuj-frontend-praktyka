<script lang="ts">
export const userNameKey = Symbol() as InjectionKey<string>;
</script>

<script setup lang="ts">
import { InjectionKey, provide } from 'vue';
import TheHeader from '../components/TheHeader.vue';
import DashboardArticles from '../components/dashboard/DashboardArticles.vue';
import DashboardComments from '../components/dashboard/DashboardComments.vue';
import DashboardAuthors from '../components/dashboard/DashboardAuthors.vue';

provide(userNameKey, 'John');
</script>

<template>
  <div class="w-full h-full">
    <TheHeader />

    <div class="lg:grid lg:grid-cols-12 gap-8 p-8 max-w-7xl m-auto">
      <div class="col-span-4 flex flex-col gap-4">
        <DashboardComments />
        <DashboardAuthors />
      </div>

      <div class="col-span-8">
        <DashboardArticles />
      </div>
    </div>
  </div>
</template>
