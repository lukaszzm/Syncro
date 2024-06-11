<script setup lang="ts">
import type { Database } from "~/types/supabase";
import type { Task } from "~/types/task";

const props = defineProps<Task>();

const isOpen = ref(false);
const pending = ref(false);
const insertError = ref(false);

const client = useSupabaseClient<Database>();

async function removeTask() {
  pending.value = true;
  insertError.value = false;

  const { error } = await client.from("tasks").delete().eq("id", props.id);

  if (error) {
    insertError.value = true;
  } else {
    await refreshNuxtData(`project-${props.projectId}`);
    isOpen.value = false;
  }

  pending.value = false;
}
</script>

<template>
  <UButton
    variant="soft"
    color="gray"
    class="max-w-xs w-full rounded-lg p-2 flex justify-between text-gray"
    @click="isOpen = true"
  >
    {{ name }}
    <UBadge variant="subtle" class="w-20 justify-center">{{ status }} </UBadge>
  </UButton>

  <UModal v-model="isOpen">
    <div class="flex flex-col gap-2 p-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Task Details
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-lucide-x"
          class="-my-1"
          @click="isOpen = false"
        />
      </div>

      <div class="space-y-4 py-2">
        <div class="p-2 bg-gray-50 rounded-xl flex flex-col font-medium">
          <ULabel class="font-medium text-xs text-gray-600">Name</ULabel>
          <p>{{ name }}</p>
        </div>

        <div class="p-2 bg-gray-50 rounded-xl flex flex-col font-medium">
          <ULabel class="font-medium text-xs text-gray-600">Description</ULabel>
          <p>{{ description ?? "-" }}</p>
        </div>

        <div class="p-2 bg-gray-50 rounded-xl flex flex-col font-medium">
          <ULabel class="font-medium text-xs text-gray-600">Status</ULabel>
          <p>{{ status }}</p>
        </div>
      </div>

      <UAlert
        v-if="insertError"
        variant="subtle"
        color="red"
        description="Could not delete task"
      />

      <div class="self-end flex gap-2">
        <UButton color="red" @click="removeTask" :disabled="pending">
          Remove
        </UButton>
      </div>
    </div>
  </UModal>
</template>
