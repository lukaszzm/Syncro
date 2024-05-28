<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <Head>
    <Title>Syncro - New Project</Title>
  </Head>

  <div class="flex justify-between mb-6">
    <h1 class="font-medium text-2xl">New Project</h1>
    <UButton
      :to="RoutePaths.projects"
      icon="i-lucide-arrow-left"
      size="lg"
      variant="ghost"
    >
      Back to projects
    </UButton>
  </div>
  <ProjectNew />
</template>
