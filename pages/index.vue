<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

const user = useSupabaseUser();

if (user.value) {
  navigateTo(RoutePaths.dashboard);
}
</script>

<template>
  <Head>
    <Title>Syncro - your personal projects tracker</Title>
  </Head>

  <HomeHeader />
  <main class="h-full flex justify-center items-center flex-1 py-4">
    <section
      class="flex justify-center items-center gap-6 max-w-6xl p-6 text-center flex-col"
    >
      <h1 class="text-5xl sm:text-6xl text-primary">
        Syncro - Your Personal Projects Tracker
      </h1>
      <h2 class="text-3xl">Stay Organized, Stay Productive</h2>
      <p class="text-lg md:text-xl leading-relaxed max-w-4xl">
        Elevate your productivity with
        <span
          class="underline decoration-primary p-1 rounded-md font-semibold underline-offset-2"
          >Syncro</span
        >, the ultimate personal projects tracker. Seamlessly manage your tasks,
        set priorities, and achieve your goals with ease. Whether you're
        planning your day, week, or month, Syncro is here to help you stay on
        top of everything.
      </p>
      <UButton size="xl" class="px-12" variant="soft">
        <UIcon name="i-heroicons-arrow-right-start-on-rectangle-16-solid" />
        Get Started
      </UButton>
    </section>
  </main>
</template>
