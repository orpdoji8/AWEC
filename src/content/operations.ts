import type { ContentImage, ContentSection } from "@/types/content";

export type Operation = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sourceStatus: "legacy-confirmed";
  verificationNotes: string;
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
      "Legacy-derived Business Operations categories for American West Educational Center, pending client confirmation.",
  },
  intro: {
    eyebrow: "Business Operations",
    title: "Business Operations",
    description:
      "The six categories below were recovered from the previous American West Educational Center website.",
    notice:
      "These legacy-confirmed labels are provisional and remain subject to client verification before they are treated as current operations.",
  },
  emptyState: {
    title: "No operation categories are available",
    description:
      "Recovered operation categories will appear here when source-backed material is available.",
  },
  supporting: {
    eyebrow: "Recovered structure",
    title: "Historical activities are organized separately",
    description:
      "Source-backed visits, training activities, exhibitions, seminars, and related records are available in News & Activities. Category assignments may be provisional where the legacy source did not state them explicitly.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Questions can be organized through the Contact page",
    description:
      "Official contact channels are still under review, but the inquiry structure is available for preview.",
  },
} as const;

const legacyOperationVerification =
  "The category label appears on the legacy website. Its current scope and status require client confirmation.";

export const operations: readonly Operation[] = [
  {
    id: "OP-001",
    slug: "professional-training",
    title: "Professional Training",
    summary: "A business-operation category recovered from the legacy website.",
    sourceStatus: "legacy-confirmed",
    verificationNotes: legacyOperationVerification,
  },
  {
    id: "OP-002",
    slug: "business-visits",
    title: "Business Visits",
    summary: "A business-operation category recovered from the legacy website.",
    sourceStatus: "legacy-confirmed",
    verificationNotes: legacyOperationVerification,
  },
  {
    id: "OP-003",
    slug: "international-exhibitions",
    title: "International Exhibitions",
    summary: "A business-operation category recovered from the legacy website.",
    sourceStatus: "legacy-confirmed",
    verificationNotes: legacyOperationVerification,
  },
  {
    id: "OP-004",
    slug: "round-table-seminars",
    title: "Round-table Seminars",
    summary: "A business-operation category recovered from the legacy website.",
    sourceStatus: "legacy-confirmed",
    verificationNotes: legacyOperationVerification,
  },
  {
    id: "OP-005",
    slug: "global-branding",
    title: "Global Branding",
    summary: "A business-operation category recovered from the legacy website.",
    sourceStatus: "legacy-confirmed",
    verificationNotes: legacyOperationVerification,
  },
  {
    id: "OP-006",
    slug: "marketing",
    title: "Marketing",
    summary: "A business-operation category recovered from the legacy website.",
    sourceStatus: "legacy-confirmed",
    verificationNotes:
      "The category label appears on the legacy website, but no recovered historical record can yet be confidently assigned to it. Its current scope and status require client confirmation.",
  },
];

export function findOperationBySlug(slug: string) {
  return operations.find((operation) => operation.slug === slug);
}

export function getOperationStaticParams() {
  return operations.map(({ slug }) => ({ slug }));
}
