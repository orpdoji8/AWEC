import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <PageContainer className="flex flex-1 items-center py-20 sm:py-28">
      <section className="max-w-3xl" aria-labelledby="home-heading">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          International education
        </p>
        <h1
          id="home-heading"
          className="text-balance text-4xl font-semibold leading-tight tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
        >
          A foundation for learning across borders.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          This website is being prepared to share approved information about
          {` ${siteConfig.name}`} and its work in international education and
          overseas opportunities.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/about"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-accent bg-surface px-6 py-3 font-semibold text-accent transition-colors hover:bg-surface-subtle hover:text-accent-hover"
          >
            Contact
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
