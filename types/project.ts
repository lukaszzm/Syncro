import type { ProjectStatus } from "~/config/status";

export type Project = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  languages: string[];
  status: ProjectStatus;
};
