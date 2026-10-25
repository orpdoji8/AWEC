export const pastYesPlaceholders = [
  { slug: "yes-2025-december", title: "December, 2025 YES Program" },
  { slug: "yes-2025-june-i", title: "June, 2025 YES Program I" },
  { slug: "yes-2025-june-ii", title: "June, 2025 YES Program II" },
  { slug: "yes-2024-december", title: "December, 2024 YES Program" },
] as const;

export const pastYesPrograms = [
  { title: "June, 2026 YES Program", href: "/education/us-china/yes-2026-june" },
  ...pastYesPlaceholders.map((program) => ({
    title: program.title,
    href: `/news/past-yes/${program.slug}`,
  })),
];
