"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/content/site";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block" aria-label="Primary navigation">
      <ul className="flex items-center gap-1">
        {primaryNavigation.map((item) => {
          const isContact = item.href === "/contact";

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={
                  isContact
                    ? "ml-2 inline-flex min-h-11 items-center rounded-sm bg-chrome-action px-4 py-2 text-sm font-semibold text-chrome-action-text transition-colors hover:bg-chrome-action-hover"
                    : "inline-flex min-h-11 items-center rounded-sm px-3 py-2 text-sm font-medium text-chrome-text transition-colors hover:bg-chrome-background-hover"
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
