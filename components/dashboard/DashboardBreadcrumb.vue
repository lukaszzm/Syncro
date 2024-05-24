<script setup lang="ts">
const route = useRoute();

const links = computed(() => generateLinks(route.path));
</script>

<template>
  <UBreadcrumb divider="/" :links="links">
    <template #default="{ link, isActive }">
      <UButton
        :to="link.to"
        class="p-1 text-lg capitalize text-gray"
        :class="{ 'text-primary': isActive }"
        variant="link"
        size="lg"
      >
        {{ link.label }}
      </UButton>
    </template>
  </UBreadcrumb>
</template>
