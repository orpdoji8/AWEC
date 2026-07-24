import Link from "next/link";

type BackLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center rounded-md font-semibold text-accent hover:text-accent-hover"
    >
      <span aria-hidden="true" className="mr-2">
        ←
      </span>
      {children}
    </Link>
  );
}
