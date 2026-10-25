import type { Metadata } from "next";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";
import { PastYesList } from "@/components/news/PastYesList";

export const metadata: Metadata = { title: "Past YES" };

export default function PastYesPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/news">Back to News &amp; Activities</BackLink>
      <h1 className="page-title mt-8">Past YES</h1>
      <p className="mt-6 text-lg leading-8 text-muted">
        Explore previous YES programs and their highlights.
      </p>
      <div className="mt-10"><PastYesList /></div>
    </PageContainer>
  );
}
