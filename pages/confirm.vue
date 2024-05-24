<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

const user = useSupabaseUser();

const cookieName = useRuntimeConfig().public.supabase.cookieName;
const redirectPath = useCookie(`${cookieName}-redirect-path`).value;

watch(
  user,
  () => {
    if (user.value) {
      useCookie(`${cookieName}-redirect-path`).value = null;
      return navigateTo(redirectPath || RoutePaths.dashboard);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="text-primary font-medium">Waiting for login...</div>
</template>
