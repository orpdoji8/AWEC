import Link from "next/link";
import type { Operation } from "@/content/operations";
type OperationCardProps = { operation: Operation };
export function OperationCard({ operation }: OperationCardProps) {
  return (
    <article>
      <Link
        href={`/operations/${operation.slug}`}
        className="group grid grid-cols-[1fr_auto] items-center gap-4 py-7 transition-colors hover:bg-surface-subtle sm:gap-6 sm:py-9"
      >
        <div>
          <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent sm:text-3xl lg:text-4xl">
            {operation.title}
          </h2>
        </div>
        <span aria-hidden="true" className="text-2xl text-accent">
          →
        </span>
      </Link>
    </article>
  );
}
