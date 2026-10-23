import type { Metadata } from "next";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = { title: "China - US" };

export default function EducationDirectionPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/education">Back to Education</BackLink>
      <h1 className="page-title mt-8">China - US</h1>
      <p className="mt-6 text-lg leading-8 text-muted">This section is currently empty. Content will be added later.</p>
    </PageContainer>
  );
}
