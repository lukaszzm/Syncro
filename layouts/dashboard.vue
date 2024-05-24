<script setup lang="ts"></script>

<template>
  <div class="w-full min-h-dvh flex">
    <DashboardSidebar />
    <div class="flex-1 flex flex-col">
      <DashboardHeader />
      <main class="flex-1 py-6 px-8">
        <slot />
      </main>
    </div>
  </div>
</template>
