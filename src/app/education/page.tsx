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
          <p className="eyebrow">Learning and exchange</p>
          <h1 className="page-title mt-5">Education</h1>
        </div>
        <p className="text-lg leading-8 text-muted lg:pt-8">{focusAreas[1].description}</p>
      </header>
      <section className="mt-12" aria-label="Education directions">
        <ul className="grid gap-10 md:grid-cols-2 md:gap-16">
          {educationDirections.map((direction, index) => (
            <li key={direction.href}>
              <Link href={direction.href} className="group block border-b border-border py-6">
                <p className="eyebrow" aria-hidden="true">0{index + 1}</p>
                <h2 className="mt-4 flex items-center justify-between gap-4 text-3xl font-semibold group-hover:text-accent">
                  {direction.title}<span aria-hidden="true">&rarr;</span>
                </h2>
                <p className="mt-4 leading-7 text-muted">{direction.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
}
