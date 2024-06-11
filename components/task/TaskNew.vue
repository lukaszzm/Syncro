<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import type { Database } from "~/types/supabase";
import { TaskStatus } from "~/config/status";

type Props = {
  projectId: string;
};

const props = defineProps<Props>();
const isOpen = ref(false);

const client = useSupabaseClient<Database>();

const schema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  status: z.nativeEnum(TaskStatus),
  projectId: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: undefined,
  description: undefined,
  projectId: props.projectId,
  status: TaskStatus.Open,
});

const pending = ref(false);
const insertError = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  pending.value = true;
  insertError.value = false;

  const { error } = await client.from("tasks").insert(event.data);

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
  <UButton icon="i-lucide-plus" size="lg" variant="soft" @click="isOpen = true">
    New Task
  </UButton>

  <UModal v-model="isOpen">
    <div class="flex flex-col gap-2 p-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Create New Task
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-lucide-x"
          class="-my-1"
          @click="isOpen = false"
        />
      </div>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 max-w-xl"
        @submit="onSubmit"
        id="new-task-form"
      >
        <UFormGroup label="Project name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Description (optional)" name="description">
          <UTextarea v-model="state.description" />
        </UFormGroup>

        <UFormGroup label="Status" name="status">
          <USelect
            v-model="state.status"
            :options="Object.values(TaskStatus)"
          />
        </UFormGroup>
      </UForm>

      <UAlert
        v-if="insertError"
        variant="subtle"
        color="red"
        description="Could not create new task"
      />

      <div class="self-end flex gap-2">
        <UButton variant="ghost" color="gray" size="lg" @click="isOpen = false">
          Cancel
        </UButton>
        <UButton
          type="submit"
          size="lg"
          class="px-8"
          :disabled="pending"
          form="new-task-form"
          >Create</UButton
        >
      </div>
    </div>
  </UModal>
</template>
