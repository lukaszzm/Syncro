<script setup lang="ts">
type Props = {
  members: { name: string; src: string }[];
};

defineProps<Props>();
</script>

<template>
  <div class="flex items-center gap-3">
    <p class="font-medium text-xl text-gray-600">Team Members:</p>
    <div class="flex">
      <UAvatar
        v-for="member in members"
        v-key="member.name"
        :alt="member.name"
        :src="member.src"
      />
    </div>
  </div>
</template>
