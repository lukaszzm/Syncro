<script setup lang="ts">
import { TaskStatus } from "~/config/status";
import type { Project } from "~/types/project";
import type { Task } from "~/types/task";
import type { User } from "~/types/user";

type Props = {
  tasks: Task[];
  users: User[];
} & Project;

const props = defineProps<Props>();
</script>

<template>
  <div class="space-y-6">
    <ProjectHeader v-bind="props" />

    <ProjectTeamMembers :members="users" />

    <TaskOverview
      :open="tasks.filter((el) => el.status === TaskStatus.Open).length"
      :inProgress="
        tasks.filter((el) => el.status === TaskStatus.InProgress).length
      "
      :closed="tasks.filter((el) => el.status === TaskStatus.Closed).length"
    />

    <TaskList :tasks="tasks" :project-id="id" />
  </div>
</template>
