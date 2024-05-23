<script setup lang="ts">
const route = useRoute();

const isHome = computed(() => route.path === "/");
</script>

<template>
  <header class="w-full p-6 flex justify-between h-22 fixed">
    <div class="flex items-center gap-1">
      <UIcon name="i-lucide-gantt-chart" class="size-10" />
      <span class="font-semibold text-2xl">Syncro</span>
    </div>

    <SignIn v-if="isHome" />
    <NewProject v-else />
  </header>
</template>
