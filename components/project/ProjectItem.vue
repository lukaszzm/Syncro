<script setup lang="ts">
import { RoutePaths } from "~/config/routes";
import type { Project } from "~/types/project";

defineProps<Project>();
</script>

<template>
  <NuxtLink
    :to="
      slugRoute(RoutePaths.project, {
        id: id,
      })
    "
    class="rounded-xl border border-border bg-gray-50 py-6 px-4 max-w-xs w-full space-y-1 hover:border-primary flex flex-col"
  >
    <UBadge variant="subtle" class="text-xs self-start" size="xs">
      {{ status }}
    </UBadge>
    <h2 class="font-semibold text-gray-800">
      {{ name }}
    </h2>
    <p class="truncate text-sm text-gray-600">
      {{ description }}
    </p>
    <div class="space-x-2">
      <UBadge
        v-for="language in languages"
        :key="language"
        :color="matchColorToLanguage(language)"
        variant="subtle"
      >
        {{ language }}
      </UBadge>
    </div>
  </NuxtLink>
</template>
