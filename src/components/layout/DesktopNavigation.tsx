"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/content/site";

export function DesktopNavigation() {
  const pathname = usePathname().replace(/\/+$/, "") || "/";

  return (
    <nav className="hidden lg:block" aria-label="Primary navigation">
      <ul className="desktop-nav-list">
        {primaryNavigation.map((item) => {
          const isContact = item.href === "/contact";

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={
                  isContact
                    ? "desktop-nav-link desktop-nav-contact"
                    : "desktop-nav-link"
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
