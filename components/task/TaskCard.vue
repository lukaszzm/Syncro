<script setup lang="ts">
type Props = {
  label: string;
  icon: string;
  value: number;
};

defineProps<Props>();
</script>

<template>
  <div
    class="rounded-xl bg-gray-50 px-6 py-4 flex items-center gap-4 w-full max-w-xs"
  >
    <div class="p-4 rounded-full bg-gray-200 flex justify-center items-center">
      <UIcon :name="icon" class="size-8" />
    </div>
    <div>
      <h2 class="text-xl font-medium text-gray-700">{{ label }}</h2>
      <p class="font-bold text-3xl p-2 text-gray-900">{{ value }}</p>
    </div>
  </div>
</template>
