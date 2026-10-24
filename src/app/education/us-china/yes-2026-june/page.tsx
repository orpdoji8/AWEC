import type { Metadata } from "next";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = { title: "YES 2026 June" };

export default function YesJunePage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/education/us-china">Back to YES</BackLink>
      <h1 className="page-title mt-8">YES 2026 June</h1>
    </PageContainer>
  );
}
