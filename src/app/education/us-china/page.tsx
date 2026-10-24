import type { Metadata } from "next";
import Link from "next/link";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = { title: "US - China" };

export default function EducationDirectionPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/education">Back to Education</BackLink>
      <h1 className="page-title mt-8">US - China</h1>
      <h2 className="mt-12 text-3xl font-semibold">YES</h2>
      <Link href="/education/us-china/yes-2026-june" className="text-link mt-6 inline-block text-xl">
        YES 2026 June <span aria-hidden="true">&rarr;</span>
      </Link>
    </PageContainer>
  );
}
