import { FeatureLight } from "@/components/ui/FeatureLight";
import Link from "next/link";
import { footerNavigation, siteConfig } from "@/content/site";
import { PageContainer } from "@/components/ui/PageContainer";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer light-surface site-chrome border-t border-chrome-border bg-chrome-background text-chrome-text">
      <FeatureLight />
      <PageContainer className="footer-inner">
        <div className="footer-composition">
          <div>
            <p className="footer-name">
              {siteConfig.name}
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="footer-navigation">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="footer-navigation-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </PageContainer>
    </footer>
  );
}
