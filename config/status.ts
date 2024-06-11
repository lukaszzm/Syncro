export const TaskStatus = {
  InProgress: "In progress",
  Closed: "Closed",
  Open: "Open",
} as const satisfies Record<string, string>;

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const ProjectStatus = {
  InProgress: "In progress",
  Closed: "Closed",
  Idle: "Idle",
} as const satisfies Record<string, string>;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
