<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <Head>
    <Title>Syncro - Dashboard</Title>
  </Head>

  <AuthSignOut />
</template>
