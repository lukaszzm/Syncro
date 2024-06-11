<script setup lang="ts">
import type { Task } from "~/types/task";

type Props = {
  tasks: Task[];
  projectId: string;
};

defineProps<Props>();
</script>

<template>
  <div class="space-y-2">
    <div class="flex w-full justify-between items-center max-w-5xl">
      <h2 class="text-lg font-medium text-gray-600">Tasks:</h2>
      <TaskNew :project-id="projectId" />
    </div>
    <TaskNotFound v-if="tasks.length === 0" />
    <div v-else class="space-y-2">
      <TaskItem v-for="task in tasks" :key="task.id" v-bind="task" />
    </div>
  </div>
</template>
