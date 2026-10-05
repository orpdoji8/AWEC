import type { Metadata } from "next";
import { ContactFormShell } from "@/components/forms/ContactFormShell";
import { PageContainer } from "@/components/ui/PageContainer";
import { contactContent } from "@/content/pages";

export const metadata: Metadata = contactContent.metadata;
export default function ContactPage() {
  return (
    <PageContainer className="grid gap-12 py-12 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div>
        <header>
          <p className="eyebrow">American West Educational Center</p>
          <h1 className="page-title mt-4">Contact us</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Official contact details and inquiry procedures will be published
            after client approval.
          </p>
        </header>
        <section className="mt-10" aria-labelledby="contact-channels">
          <h2 id="contact-channels" className="eyebrow">
            Contact channels · awaiting confirmation
          </h2>
          <dl className="mt-4 divide-y divide-border">
            {contactContent.channels.items.map((item) => (
              <div key={item.label} className="py-5">
                <dt className="font-semibold">{item.label}</dt>
                <dd className="mt-2 leading-7 text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="mt-6 border-t border-border pt-6">
          <h2 className="text-lg font-semibold">
            {contactContent.response.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            {contactContent.response.description}
          </p>
        </section>
      </div>
      <div className="min-w-0 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
        <ContactFormShell {...contactContent.form} />
      </div>
    </PageContainer>
  );
}
