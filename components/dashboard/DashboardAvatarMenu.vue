<script setup lang="ts">
const isModalOpen = ref(false);

const items = [
  [
    {
      label: "Sign out",
      icon: "i-lucide-log-out",
      click: () => (isModalOpen.value = true),
    },
  ],
];
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UAvatar alt="XYZ" size="lg" />
  </UDropdown>

  <AuthSignOut
    :is-open="isModalOpen"
    @toggle-modal="(value) => (isModalOpen = value)"
  />
</template>
