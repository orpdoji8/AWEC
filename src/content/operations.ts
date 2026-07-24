import type { ContentImage, ContentSection } from "@/types/content";

export type Operation = {
  slug: string;
  title: string;
  summary: string;
  heroImage?: ContentImage;
  overview?: readonly string[];
  intendedAudience?: readonly string[];
  details?: readonly ContentSection[];
  gallery?: readonly ContentImage[];
  contactCallToAction?: {
    title: string;
    description: string;
    linkLabel: string;
  };
};

export const operationsPageContent = {
  metadata: {
    title: "Business Operations",
    description:
      "A structural Business Operations area prepared for approved American West Educational Center content.",
  },
  intro: {
    eyebrow: "Business Operations",
    title: "Business Operations",
    description:
      "Confirmed operation and activity information will be published here after client review and approval.",
    notice:
      "No operations are currently published. This collection will remain empty until approved material is available.",
  },
  emptyState: {
    title: "Approved operations will be added here",
    description:
      "Future entries may include a reviewed summary and supporting details, with each approved operation receiving its own page.",
  },
  supporting: {
    eyebrow: "Prepared for future information",
    title: "A flexible structure for confirmed activities",
    description:
      "This area is ready for approved educational, exchange, or related activity information without implying that any particular program currently exists.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Questions can be organized through the Contact page",
    description:
      "Official contact channels are still under review, but the inquiry structure is available for preview.",
  },
} as const;

export const operations: readonly Operation[] = [];

export function findOperationBySlug(slug: string) {
  return operations.find((operation) => operation.slug === slug);
}

export function getOperationStaticParams() {
  return operations.map(({ slug }) => ({ slug }));
}
