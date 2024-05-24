<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

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
</script>

<template>
  <UButton size="lg" @click="signOut">Sign out</UButton>
</template>
