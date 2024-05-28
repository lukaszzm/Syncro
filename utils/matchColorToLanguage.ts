import { Language } from "~/config/language";

const colors = {
  Typescript: "blue",
  Java: "orange",
  Python: "red",
  "C++": "green",
} as const satisfies Record<Language, string>;

export function matchColorToLanguage(language: string) {
  for (const [key, value] of Object.entries(colors)) {
    if (key === language) {
      return value;
    }
  }

  return "primary";
}
