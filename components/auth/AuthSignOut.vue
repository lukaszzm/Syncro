<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

type Props = {
  isOpen: boolean;
};

defineProps<Props>();

const supabase = useSupabaseClient();

async function signOut() {
  // TODO: add better error handling
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  } else {
    navigateTo(RoutePaths.home);
  }
}

const emit = defineEmits(["toggleModal"]);
</script>

<template>
  <UModal
    :modelValue="isOpen"
    @update:modelValue="$emit('toggleModal', $event)"
  >
    <div class="flex flex-col gap-2 p-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Sign Out
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-lucide-x"
          class="-my-1"
          @click="$emit('toggleModal', false)"
        />
      </div>

      <p class="text-gray-600 text-sm">
        Are you sure that you want to sign out?
      </p>

      <div class="self-end flex gap-2">
        <UButton
          variant="ghost"
          color="gray"
          size="lg"
          @click="$emit('toggleModal', false)"
        >
          Cancel
        </UButton>
        <UButton color="red" @click="signOut"> Sign out </UButton>
      </div>
    </div>
  </UModal>
</template>
