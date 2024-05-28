export const RoutePaths = {
  home: "/",
  confirm: "/confirm",
  overview: "/overview",
  projects: "/projects",
  project: "/projects/[:id]",
  newProject: "/projects/new",
  settings: "/settings",
} as const satisfies Record<string, string>;
