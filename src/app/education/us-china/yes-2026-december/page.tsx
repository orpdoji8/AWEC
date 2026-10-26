import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "YES December 2026",
  description: "Restart the December YES trip to China with AWEC.",
};

// Owner-supplied December form; owner confirmed the term and Google sign-in requirement.
const registrationUrl = "https://forms.gle/kR6SSRbzr779fTuS7";

export default function YesDecemberPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/education/us-china">Back to YES</BackLink>
      <section className="mt-10 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:pt-8">
          <p className="eyebrow">China / December 2026</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            YES <span className="block">December</span> <span className="block font-serif font-normal italic text-accent">2026</span>
          </h1>
          <p className="mt-7 max-w-md text-xl leading-8 text-muted">Restart the December YES trip to China with AWEC.</p>
          <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-6 rounded-md bg-accent px-7 py-4 font-semibold text-accent-foreground hover:bg-accent-hover">
            Register for YES December 2026 <span aria-hidden="true">&rarr;</span>
          </a>
          <p className="mt-3 text-sm leading-6 text-muted">Opens Google Forms in a new tab. Google sign-in is required.</p>
          <Image src="/images/yes-2026-december/registration-group.png" alt="Group in matching yellow shirts posing in front of a green display" width={461} height={345} sizes="(min-width: 1024px) 420px, 100vw" className="mt-8 h-auto w-full max-w-md" />
        </div>
        <div>
          <Image src="/images/yes-2026-december/welcome.webp" alt="Group holding an AWEC banner beneath a welcome sign on a previous trip" width={1800} height={1013} priority sizes="(min-width: 1024px) 650px, 100vw" className="h-auto w-full" />
          <div className="mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] items-end gap-6">
            <p className="border-t border-border pt-5 text-sm leading-6 text-muted">Photos from previous trips, shared as a glimpse of the experience.</p>
            <Image src="/images/yes-2026-december/tower.webp" alt="Group on the steps beneath a tower during a previous trip" width={750} height={1000} sizes="(min-width: 1024px) 260px, 45vw" className="h-auto w-full" />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
