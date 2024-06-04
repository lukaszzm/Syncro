<script setup lang="ts">
import type { Task } from "~/types/task";

type Props = {
  tasks: Task[];
};

defineProps<Props>();
</script>

<template>
  <div class="space-y-2">
    <h2 class="text-lg font-medium text-gray-600">Tasks:</h2>
    <p v-if="tasks.length === 0" class="p-4 text-gray-400 font-medium">
      No tasks...
    </p>
    <ul v-else class="space-y-2">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="bg-gray-50 max-w-xs rounded-lg p-2 flex justify-between"
      >
        {{ task.name }}
        <UBadge variant="subtle" class="w-20 justify-center"
          >{{ task.status }}
        </UBadge>
      </li>
    </ul>
  </div>
</template>
