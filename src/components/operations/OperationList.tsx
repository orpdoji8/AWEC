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
    <ul className="divide-y divide-border border-y border-border">
      {operations.map((operation, index) => (
        <li key={operation.slug}>
          <OperationCard operation={operation} index={index} />
        </li>
      ))}
    </ul>
  );
}
