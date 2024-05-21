<script setup lang="ts">
import { type Task } from "~/types/task";

const props = defineProps<Task>();

const { deleteTask, pending } = useDeleteTask();
</script>

<template>
  <li
    class="w-full py-4 px-6 rounded-lg bg-gray-800 border border-gray-900 flex justify-between items-center"
    :class="{ 'opacity-60 line-through': props.completed }"
  >
    <div class="flex flex-col">
      <h2 class="text-lg">{{ props.title }}</h2>
      <span class="text-gray-300">{{ props.description }}</span>
    </div>

    <div>
      <UButton
        icon="i-heroicons-trash"
        size="md"
        color="red"
        variant="ghost"
        square
        :loading="pending"
        @click="deleteTask(props.id)"
      />
    </div>
  </li>
</template>
