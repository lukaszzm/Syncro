<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

const supabase = useSupabaseClient();
const runtimeConfig = useRuntimeConfig();

async function signInWithGoogle() {
  // TODO: add better error handling
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: runtimeConfig.app.baseURL + RoutePaths.overview,
    },
  });

  if (error) {
    console.error(error);
  }
}
</script>

<template>
  <UButton size="lg" @click="signInWithGoogle">Sign in with Google</UButton>
</template>
