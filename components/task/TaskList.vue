<script setup lang="ts">
type Props = {
  tasks: { name: string; status: string }[];
};

defineProps<Props>();
</script>

<template>
  <div class="space-y-2">
    <h2 class="text-lg font-medium text-gray-600">Tasks:</h2>
    <ul class="space-y-2">
      <li
        v-for="task in tasks"
        v-key="task.name"
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
