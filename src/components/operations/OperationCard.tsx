import Link from "next/link";
import type { Operation } from "@/content/operations";
type OperationCardProps = { operation: Operation; index: number };
export function OperationCard({ operation, index }: OperationCardProps) {
  return (
    <article>
      <Link
        href={`/operations/${operation.slug}`}
        className="group grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-7 transition-colors hover:bg-surface-subtle sm:gap-6 sm:py-9"
      >
        <span
          aria-hidden="true"
          className="self-start pt-1 font-mono text-sm text-accent"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent sm:text-3xl lg:text-4xl">
            {operation.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            {operation.summary}
          </p>
        </div>
        <span aria-hidden="true" className="text-2xl text-accent">
          →
        </span>
      </Link>
    </article>
  );
}
