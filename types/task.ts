import type { TaskStatus } from "~/config/status";

export type Task = {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  description: string | null;
  projectId: string;
  status: TaskStatus;
};
