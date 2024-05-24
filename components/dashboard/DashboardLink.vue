<script setup lang="ts">
const props = defineProps<{
  to: string;
  iconName: string;
  label: string;
}>();

const route = useRoute();

const isActive = computed(() => route.path.includes(props.to));
</script>

<template>
  <UButton
    :to="to"
    variant="ghost"
    class="text-gray min-w-44 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-xl"
    :class="{ 'text-gray bg-gray-200 hover:bg-gray-200': isActive }"
  >
    <UIcon :name="iconName" class="size-6" />
    <span class="font-semibold">{{ label }}</span>
  </UButton>
</template>
