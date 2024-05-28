<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <Head>
    <Title>Syncro - Projects</Title>
  </Head>

  <h1 class="font-medium text-2xl mb-6">Your Projects:</h1>
  <ProjectList />
</template>
