<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <Head>
    <Title>Syncro - Projects</Title>
  </Head>

  <div class="flex justify-between mb-6">
    <h1 class="font-medium text-2xl">Your Projects:</h1>
    <UButton :to="RoutePaths.newProject" icon="i-lucide-plus" size="lg">
      New Project
    </UButton>
  </div>
  <ProjectList />
</template>
