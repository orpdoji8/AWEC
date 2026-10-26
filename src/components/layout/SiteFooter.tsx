import Link from "next/link";
import { footerNavigation, siteConfig } from "@/content/site";
import { PageContainer } from "@/components/ui/PageContainer";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-chrome border-t border-chrome-border bg-chrome-background text-chrome-text">
      <PageContainer className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="max-w-xl">
            <p className="text-xl lg:text-2xl font-bold tracking-[-0.02em]">
              {siteConfig.name}
            </p>
            <p className="mt-3 leading-7 text-chrome-text">
              {siteConfig.footerDescription}
            </p>
            <p className="mt-3 text-sm text-chrome-text-muted">
              {siteConfig.contentNotice}
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:justify-end">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-sm font-medium text-chrome-text-muted transition-colors hover:text-chrome-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-chrome-border pt-6 text-sm text-chrome-text-muted">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </PageContainer>
    </footer>
  );
}
