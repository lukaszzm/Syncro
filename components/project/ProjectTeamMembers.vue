<script setup lang="ts">
import type { User } from "~/types/user";

type Props = {
  members: User[];
};

defineProps<Props>();
</script>

<template>
  <div class="flex items-center gap-3">
    <p class="font-medium text-xl text-gray-600">Team Members:</p>
    <div class="flex">
      <UAvatar
        v-for="member in members"
        :key="member.id"
        :alt="member.firstName"
        :src="member.imageSrc"
      />
    </div>
  </div>
</template>
