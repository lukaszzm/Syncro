<script setup lang="ts">
import { RoutePaths } from "~/config/routes";

type SidebarLink = {
  to: string;
  iconName: string;
  label: string;
};

const links = [
  {
    to: RoutePaths.overview,
    iconName: "i-lucide-grid-2x2",
    label: "Overview",
  },
  {
    to: RoutePaths.projects,
    iconName: "i-lucide-files",
    label: "Projects",
  },
  {
    to: RoutePaths.settings,
    iconName: "i-lucide-settings",
    label: "Settings",
  },
] satisfies SidebarLink[];
</script>

<template>
  <sidebar
    class="p-3 space-y-5 bg-gray-100 border-r border-r-gray-200 shadow-inner"
  >
    <DashboardLogo />
    <nav class="space-y-2 flex flex-col">
      <span class="text-gray-400 font-medium text-xs capitalize"
        >Main menu</span
      >
      <DashboardLink v-for="link of links" :key="link.label" v-bind="link" />
    </nav>
  </sidebar>
</template>
