import { PageContainer } from "@/components/ui/PageContainer";
import { siteConfig } from "@/content/site";

type PageIntroProps = {
  title: string;
  message: string;
};

export function PageIntro({ title, message }: PageIntroProps) {
  return (
    <PageContainer className="flex flex-1 items-center py-16 sm:py-24">
      <section className="max-w-2xl" aria-labelledby="page-heading">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          {siteConfig.name}
        </p>
        <h1
          id="page-heading"
          className="text-4xl font-semibold tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
        >
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">{message}</p>
      </section>
    </PageContainer>
  );
}
