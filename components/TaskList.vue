<script setup lang="ts">
import type { Task } from "~/types/task";

const props = defineProps<{
  tasks: Task[];
}>();
</script>

<template>
  <ul class="space-y-3">
    <TaskItem v-for="task in props.tasks" :key="task.id" v-bind="task" />
  </ul>
</template>
