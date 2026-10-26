import Link from "next/link";
import { pastYesPrograms } from "@/content/past-yes";

export function PastYesList() {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {pastYesPrograms.map((program) => (
        <li key={program.href}>
          <Link href={program.href} className="flex min-h-16 items-center justify-between gap-5 py-6 text-xl font-semibold text-accent underline decoration-accent/30 underline-offset-8 hover:decoration-accent sm:text-2xl lg:text-3xl">
            <span>{program.title}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
