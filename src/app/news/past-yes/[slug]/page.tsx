import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";
import { pastYesPlaceholders } from "@/content/past-yes";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pastYesPlaceholders.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = pastYesPlaceholders.find((item) => item.slug === slug);
  if (!program) notFound();
  return { title: program.title };
}

export default async function PastYesProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = pastYesPlaceholders.find((item) => item.slug === slug);
  if (!program) notFound();

  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/news/past-yes">Back to Past YES</BackLink>
      <p className="eyebrow mt-10">Past YES</p>
      <h1 className="page-title mt-4">{program.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        Photos and highlights are being prepared. Please check back for updates.
      </p>
    </PageContainer>
  );
}
