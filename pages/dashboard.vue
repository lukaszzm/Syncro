<script setup lang="ts">
import type { Task } from "~/types/task";

const { data: tasks } = await useFetch<Task[]>(
  "https://664c613635bbda1098801ec7.mockapi.io/api/tasks",
  {
    key: "tasks",
  }
);
</script>

<template>
  <Head>
    <Title>Planner - Dashboard</Title>
  </Head>

  <section class="w-full max-w-5xl p-8 space-y-3">
    <h1 class="text-2xl font-semibold">Your tasks:</h1>
    <TaskNotFound v-if="!tasks || tasks.length === 0" />
    <TaskList v-else :tasks />
  </section>
</template>
