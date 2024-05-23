import type { Language } from "~/config/language";
import type { Status } from "~/config/status";

export type Project = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  language: Language;
  status: Status;
};
