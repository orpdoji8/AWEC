import Link from "next/link";
import { primaryNavigation } from "@/content/site";

export function DesktopNavigation() {
  return (
    <nav className="hidden lg:block" aria-label="Primary navigation">
      <ul className="flex items-center gap-1 lg:gap-2">
        {primaryNavigation.map((item) => {
          const isContact = item.href === "/contact";

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  isContact
                    ? "ml-2 inline-flex min-h-11 items-center rounded-md bg-chrome-action px-4 py-2 font-semibold text-chrome-action-text transition-colors hover:bg-chrome-action-hover"
                    : "inline-flex min-h-11 items-center rounded-md px-4 py-2 font-medium text-chrome-text transition-colors hover:bg-chrome-background-hover"
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
