import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { educationDirections, focusAreas } from "@/content/areas";

export const metadata: Metadata = {
  title: "Education",
  description: focusAreas[1].description,
};

export default function EducationPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <header className="grid gap-8 border-b border-border pb-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="page-title">Education</h1>
        </div>
        <p className="text-lg leading-8 text-muted lg:pt-8">{focusAreas[1].description}</p>
      </header>
      <section className="mt-12" aria-label="Education directions">
        <ul className="grid gap-10 md:grid-cols-2 md:gap-16">
          {educationDirections.map((direction) => (
            <li key={direction.href}>
              <Link href={direction.href} className="group block border-b border-border py-6">
                <h2 className="flex items-center justify-between gap-4 text-3xl lg:text-4xl font-semibold group-hover:text-accent">
                  {direction.title}<span aria-hidden="true">&rarr;</span>
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
}
