import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OperationDetail } from "@/components/operations/OperationDetail";
import {
  findOperationBySlug,
  getOperationStaticParams,
} from "@/content/operations";

type OperationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getOperationStaticParams();
}

export async function generateMetadata({
  params,
}: OperationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const operation = findOperationBySlug(slug);

  if (!operation) notFound();

  return {
    title: operation.title,
    description: operation.summary,
  };
}

export default async function OperationPage({ params }: OperationPageProps) {
  const { slug } = await params;
  const operation = findOperationBySlug(slug);

  if (!operation) notFound();

  return <OperationDetail operation={operation} />;
}
