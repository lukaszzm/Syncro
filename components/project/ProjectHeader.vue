<script setup lang="ts">
import { RoutePaths } from "~/config/routes";
import type { Project } from "~/types/project";

defineProps<Project>();
</script>

<template>
  <div class="flex justify-between items-start">
    <div class="">
      <h1 class="font-medium text-2xl">{{ name }}</h1>
      <UBadge variant="subtle" class="text-xs" size="xs">
        {{ status }}
      </UBadge>
    </div>

    <div class="flex gap-4">
      <UButton
        :to="RoutePaths.projects"
        variant="ghost"
        color="gray"
        size="lg"
        icon="i-lucide-arrow-left"
      >
        Back to projects
      </UButton>
      <ProjectDeleteButton :id="id" />
    </div>
  </div>
</template>
