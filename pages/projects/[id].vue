<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
  validate: async (route) => {
    return typeof route.params.id === "string";
  },
});

const route = useRoute();
const projectId = route.params.id as string;

const { data: project, pending, error } = await useProject(projectId);
</script>

<template>
  <Head>
    <Title>Syncro - {{ project?.name ? project.name : "Not Found" }}</Title>
  </Head>

  <div v-if="pending">Loading...</div>

  <div v-else-if="error || !project">
    Something went wrong, could not load the project
  </div>

  <ProjectInfo v-else v-bind="project" />
</template>
