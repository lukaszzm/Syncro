export const Status = {
  InProgress: "In progress",
  Closed: "Closed",
  Idle: "Idle",
} as const satisfies Record<string, string>;

export type Status = (typeof Status)[keyof typeof Status];
