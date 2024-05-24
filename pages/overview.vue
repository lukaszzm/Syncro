<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <Head>
    <Title>Syncro - Overview</Title>
  </Head>

  <h1>Hello From Overview Page</h1>
</template>
