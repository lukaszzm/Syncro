<script setup lang="ts">
type Props = {
  open: number;
  inProgress: number;
  closed: number;
};

defineProps<Props>();
</script>

<template>
  <div class="flex gap-4 w-full max-w-5xl justify-between">
    <TaskCard label="Open tasks" icon="i-lucide-align-justify" :value="open" />
    <TaskCard
      label="In progress tasks"
      icon="i-lucide-circle-dot-dashed"
      :value="inProgress"
    />
    <TaskCard
      label="Closed tasks"
      icon="i-lucide-check-check"
      :value="closed"
    />
  </div>
</template>
