export const Language = {
  Typescript: "Typescript",
  Java: "Java",
  Python: "Python",
  CPP: "C++",
} as const satisfies Record<string, string>;

export type Language = (typeof Language)[keyof typeof Language];
