import { CollectionEmptyState } from "@/components/sections/CollectionEmptyState";
import type { Operation } from "@/content/operations";
import { OperationCard } from "./OperationCard";

type OperationListProps = {
  operations: readonly Operation[];
  emptyState: {
    title: string;
    description: string;
  };
};

export function OperationList({ operations, emptyState }: OperationListProps) {
  if (operations.length === 0) {
    return <CollectionEmptyState {...emptyState} />;
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {operations.map((operation) => (
        <li key={operation.slug}>
          <OperationCard operation={operation} />
        </li>
      ))}
    </ul>
  );
}
