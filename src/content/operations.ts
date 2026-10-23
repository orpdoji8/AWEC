import type { ContentImage, ContentSection } from "@/types/content";

export type Operation = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sourceStatus: "client-named-placeholder";
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
    title: "Business",
    description: "Build International Connect and International Exhibition at American West Educational Center. Content is coming soon.",
  },
  intro: {
    eyebrow: "Business",
    title: "Business",
    description: "Explore our two business sections below.",
    notice: "These sections are currently empty. Content will be added later.",
  },
  emptyState: {
    title: "No business sections are available",
    description: "Business sections will appear here when available.",
  },
} as const;

export const operations: readonly Operation[] = [
  {
    id: "BUS-001",
    slug: "build-international-connect",
    title: "Build International Connect",
    summary: "This section is currently empty. Content will be added later.",
    sourceStatus: "client-named-placeholder",
    verificationNotes: "Section name supplied by the client through the project owner. No service content has been provided.",
  },
  {
    id: "BUS-002",
    slug: "international-exhibition",
    title: "International Exhibition",
    summary: "This section is currently empty. Content will be added later.",
    sourceStatus: "client-named-placeholder",
    verificationNotes: "Section name supplied by the client through the project owner. No service content has been provided.",
  },
];

export function findOperationBySlug(slug: string) {
  return operations.find((operation) => operation.slug === slug);
}

export function getOperationStaticParams() {
  return operations.map(({ slug }) => ({ slug }));
}
