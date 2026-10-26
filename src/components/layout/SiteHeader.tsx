import Link from "next/link";
import Image from "next/image";
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
          className="shrink-0 overflow-hidden rounded-md bg-white"
          aria-label={`${siteConfig.name} home`}
        >
          <Image src="/images/brand/awec-logo-white.png" width={1254} height={1254} alt={siteConfig.name} priority className="h-auto w-16 sm:w-20" />
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
