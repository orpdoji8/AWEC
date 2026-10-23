import Image from "next/image";
import { CallToAction } from "@/components/sections/CallToAction";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";
import type { Operation } from "@/content/operations";

type OperationDetailProps = {
  operation: Operation;
};

export function OperationDetail({ operation }: OperationDetailProps) {
  return (
    <>
      <article>
        <PageContainer className="py-12 sm:py-16">
          <BackLink href="/business">Back to Business</BackLink>
          <header className="mt-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Content coming soon
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
              {operation.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {operation.summary}
            </p>
          </header>

          {operation.heroImage ? (
            <Image
              {...operation.heroImage}
              alt={operation.heroImage.alt}
              priority
              className="mt-10 aspect-[16/9] w-full rounded-lg object-cover"
            />
          ) : null}

          {operation.overview?.length ? (
            <section className="mt-14 max-w-3xl" aria-labelledby="operation-overview">
              <h2 id="operation-overview" className="text-3xl font-semibold tracking-[-0.025em] text-foreground">
                Overview
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-muted">
                {operation.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : null}

          {operation.intendedAudience?.length ? (
            <section className="mt-14" aria-labelledby="operation-audience">
              <h2 id="operation-audience" className="text-3xl font-semibold tracking-[-0.025em] text-foreground">
                Intended audience
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {operation.intendedAudience.map((item) => (
                  <li key={item} className="rounded-md border border-border bg-surface px-5 py-4 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {operation.details?.map((section) => (
            <section key={section.heading} className="mt-14 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-foreground">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {operation.gallery?.length ? (
            <section className="mt-14" aria-labelledby="operation-gallery">
              <h2 id="operation-gallery" className="text-3xl font-semibold tracking-[-0.025em] text-foreground">
                Gallery
              </h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {operation.gallery.map((image) => (
                  <li key={image.src}>
                    <Image
                      {...image}
                      alt={image.alt}
                      className="w-full rounded-lg object-cover"
                    />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </PageContainer>
      </article>

      {operation.contactCallToAction ? (
        <CallToAction
          eyebrow="Contact"
          {...operation.contactCallToAction}
          href="/contact"
        />
      ) : null}
    </>
  );
}
