<script setup lang="ts">
import { RoutePaths } from "~/config/routes";
import type { Database } from "~/types/supabase";

defineProps<{
  id: string;
}>();

const isOpen = ref(false);
const pending = ref(false);
const deleteError = ref(false);

const client = useSupabaseClient<Database>();

async function deleteProject(projectId: string) {
  pending.value = true;
  deleteError.value = false;

  const { error } = await client.from("projects").delete().eq("id", projectId);

  pending.value = false;

  if (error) {
    deleteError.value = true;
    return;
  }

  navigateTo(RoutePaths.projects);
}
</script>

<template>
  <UButton
    icon="i-lucide-trash"
    size="lg"
    variant="soft"
    color="red"
    @click="isOpen = true"
  >
    Remove
  </UButton>

  <UModal v-model="isOpen">
    <div class="flex flex-col gap-2 p-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Delete Project
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-lucide-x"
          class="-my-1"
          @click="isOpen = false"
        />
      </div>

      <p class="text-gray-600 text-sm">
        Are you sure that you want to delete this project?
      </p>

      <UAlert
        v-if="deleteError"
        color="red"
        variant="subtle"
        description="Could not delete this project, try again later."
      />

      <div class="self-end flex gap-2">
        <UButton variant="ghost" color="gray" size="lg" @click="isOpen = false">
          Cancel
        </UButton>
        <UButton color="red" @click="deleteProject(id)" :disabled="pending">
          Delete
        </UButton>
      </div>
    </div>
  </UModal>
</template>
