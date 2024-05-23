<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <UButton size="lg" @click="open = true">Sign In</UButton>

  <UModal v-model="open">
    <UCard :ui="{ divide: '' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Sign in to your account
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

      <template #footer>
        <div class="justify-end flex gap-3">
          <UButton variant="ghost" color="gray" size="lg" @click="open = false"
            >Cancel</UButton
          >
          <UButton size="lg" type="submit" form="sign-in-form">Sign In</UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>
