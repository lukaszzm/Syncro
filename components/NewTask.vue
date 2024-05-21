<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const open = ref(false);

const { addTask, pending } = useAddTask();

const schema = z.object({
  title: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
  label: z.string().min(1, "Required"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  title: undefined,
  description: undefined,
  label: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await addTask({
    ...event.data,
    id: "7",
    createdAt: "",
    completed: false,
  });

  state.title = undefined;
  state.description = undefined;
  state.label = undefined;

  open.value = false;
}
</script>

<template>
  <UButton size="lg" @click="open = true">Add Task</UButton>

  <UModal v-model="open">
    <UCard :ui="{ divide: '' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            New Task
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="open = false"
          />
        </div>
      </template>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        id="new-task-form"
        @submit="onSubmit"
      >
        <UFormGroup label="Title" name="title">
          <UInput v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Description" name="description">
          <UInput v-model="state.description" />
        </UFormGroup>

        <UFormGroup label="Label" name="label">
          <UInput v-model="state.label" />
        </UFormGroup>
      </UForm>

      <template #footer>
        <div class="justify-end flex gap-3">
          <UButton variant="ghost" color="gray" size="lg" @click="open = false"
            >Cancel</UButton
          >
          <UButton
            size="lg"
            type="submit"
            form="new-task-form"
            :loading="pending"
            >Add</UButton
          >
        </div>
      </template>
    </UCard>
  </UModal>
</template>
