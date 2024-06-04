<script setup lang="ts">
import type { Project } from "~/types/project";
import type { Task } from "~/types/task";

type Props = {
  tasks: Task[];
} & Project;

const props = defineProps<Props>();

const teamMembers = [
  {
    name: "John Smith",
    src: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Joe Brown",
    src: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Anna White",
    src: "https://i.pravatar.cc/150?img=5",
  },
];
</script>

<template>
  <div class="space-y-6">
    <ProjectHeader v-bind="props" />

    <ProjectTeamMembers :members="teamMembers" />

    <TaskOverview
      :open="tasks.filter((el) => el.status === 'open').length"
      :inProgress="tasks.filter((el) => el.status === 'in progress').length"
      :closed="tasks.filter((el) => el.status === 'closed').length"
    />

    <TaskList :tasks="tasks" />
  </div>
</template>
