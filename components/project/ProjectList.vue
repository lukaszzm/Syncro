<script setup lang="ts">
const { data: projects, error, pending } = await useProjects();
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Something went wrong</div>
  <div v-else-if="!projects || projects.length === 0">No projects</div>
  <div v-else class="flex gap-2 flex-wrap">
    <ProjectItem
      v-for="project in projects"
      v-key="project.id"
      v-bind="project"
    />
  </div>
</template>
