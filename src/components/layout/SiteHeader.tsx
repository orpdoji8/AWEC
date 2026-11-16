import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { PageContainer } from "@/components/ui/PageContainer";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  return (
    <header className="site-header site-chrome relative z-50 border-b border-chrome-border bg-chrome-background text-chrome-text">
      <PageContainer className="site-header-inner">
        <Link
          href="/"
          className="site-brand"
          aria-label={`${siteConfig.name} home`}
        >
          <Image src="/images/brand/awec-logo-white.png" width={1254} height={1254} alt="" priority className="site-brand-logo" />
          <span className="site-brand-name" aria-hidden="true"><span>American West</span><span>Educational Center</span></span>
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </PageContainer>
    </header>
  );
}
