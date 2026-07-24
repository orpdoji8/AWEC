import Image from "next/image";
import Link from "next/link";
import type { Operation } from "@/content/operations";

type OperationCardProps = {
  operation: Operation;
};

export function OperationCard({ operation }: OperationCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface">
      {operation.heroImage ? (
        <Image
          {...operation.heroImage}
          alt={operation.heroImage.alt}
          className="aspect-[16/9] w-full object-cover"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
          {operation.title}
        </h2>
        <p className="mt-3 flex-1 leading-7 text-muted">{operation.summary}</p>
        <Link
          href={`/operations/${operation.slug}`}
          className="mt-5 inline-flex min-h-11 items-center self-start rounded-md font-semibold text-accent hover:text-accent-hover"
        >
          View {operation.title}
        </Link>
      </div>
    </article>
  );
}
