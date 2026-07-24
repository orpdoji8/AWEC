type TemporaryContentNoticeProps = {
  children: React.ReactNode;
};

export function TemporaryContentNotice({
  children,
}: TemporaryContentNoticeProps) {
  return (
    <p className="rounded-md border border-border bg-surface-subtle px-4 py-3 text-sm leading-6 text-muted">
      {children}
    </p>
  );
}
