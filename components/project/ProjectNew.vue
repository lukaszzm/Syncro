<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { Language } from "~/config/language";
import { ProjectStatus } from "~/config/status";
import type { Database } from "~/types/supabase";
import { RoutePaths } from "~/config/routes";

const client = useSupabaseClient<Database>();

const schema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  languages: z
    .array(z.string())
    .min(1, "Must be selected at least one programming language"),
  status: z.nativeEnum(ProjectStatus),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: undefined,
  description: undefined,
  languages: [],
  status: "Idle",
});

const pending = ref(false);
const insertError = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  pending.value = true;
  insertError.value = false;

  const { data, error } = await client
    .from("projects")
    .insert(event.data)
    .select("id");

  pending.value = false;

  if (error) {
    insertError.value = true;
    return;
  }

  const redirectUrl = slugRoute(RoutePaths.project, {
    id: data[0].id,
  });
  navigateTo(redirectUrl);
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 max-w-xl"
    @submit="onSubmit"
  >
    <UFormGroup label="Project name" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UFormGroup label="Description" name="description">
      <UTextarea v-model="state.description" />
    </UFormGroup>

    <UFormGroup label="Programming languages" name="languages">
      <USelectMenu
        v-model="state.languages"
        :options="Object.values(Language)"
        multiple
        placeholder="Select one or more programming languages"
      />
    </UFormGroup>

    <UFormGroup label="Status" name="status">
      <USelect v-model="state.status" :options="Object.values(ProjectStatus)" />
    </UFormGroup>

    <UAlert
      v-if="insertError"
      variant="subtle"
      color="red"
      description="Could not add new project"
    />

    <UButton type="submit" size="lg" class="px-8" :disabled="pending">
      Save
    </UButton>
  </UForm>
</template>
