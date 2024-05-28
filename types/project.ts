import type { Language } from "~/config/language";
import type { Status } from "~/config/status";

export type Project = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  languages: string[];
  status: string;
};
