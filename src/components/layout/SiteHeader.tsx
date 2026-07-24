import Link from "next/link";
import { siteConfig } from "@/content/site";
import { PageContainer } from "@/components/ui/PageContainer";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  return (
    <header className="site-chrome relative z-50 border-b border-chrome-border bg-chrome-background text-chrome-text">
      <PageContainer className="flex min-h-18 items-center justify-between gap-4 py-3 sm:gap-6">
        <Link
          href="/"
          className="max-w-[13rem] rounded-sm text-base font-bold leading-tight tracking-[-0.025em] text-chrome-text sm:max-w-[17rem] sm:text-lg lg:max-w-none lg:text-xl"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
