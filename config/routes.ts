export const RoutePaths = {
  home: "/",
  confirm: "/confirm",
  overview: "/overview",
  projects: "/projects",
  project: "/projects/[:id]",
  settings: "/settings",
} as const satisfies Record<string, string>;
