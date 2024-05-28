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
    <Title>Syncro - {{ project ? project.name : "Not Found" }}</Title>
  </Head>

  <div v-if="pending">Loading...</div>
  <div v-else-if="error || !project">
    Something went wrong, could not load the project
  </div>
  <div v-else>
    <div class="flex justify-between mb-6">
      <h1 class="font-medium text-2xl">New Project</h1>
      <div class="space-x-4">
        <UButton icon="i-lucide-bolt" size="lg" variant="ghost" color="gray">
          Edit
        </UButton>
        <ProjectDeleteButton :id="projectId" />
      </div>
    </div>
  </div>
</template>
