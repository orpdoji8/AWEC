import type { Metadata } from "next";
import { ContactFormEmbed } from "@/components/forms/ContactFormEmbed";
import { FeatureLight } from "@/components/ui/FeatureLight";
import styles from "./ContactCards.module.css";
import { PageContainer } from "@/components/ui/PageContainer";
import { contactContent } from "@/content/pages";

export const metadata: Metadata = contactContent.metadata;
export default function ContactPage() {
  return (
    <PageContainer className="grid gap-12 py-12 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className={styles.contactColumn}>
        <header>
          <h1 className={`page-title ${styles.title}`}>Contact us</h1>
        </header>
        <section className={`mt-10 ${styles.channels}`} aria-labelledby="contact-channels">
          <h2 id="contact-channels" className="sr-only">
            Contact details
          </h2>
          <div className={styles.cards}>
            {contactContent.channels.items.map((item) => (
              <div key={item.label} className={styles.card}>
                <FeatureLight variant="heading" />
                <dl className={styles.details}>
                  <dt className={styles.label}>{item.label}</dt>
                  <dd className={styles.value}>
                    {item.href ? (
                      <a href={item.href} className={styles.link}>
                        {item.value}
                        <span className={styles.arrow} aria-hidden="true">{"\u2197"}</span>
                      </a>
                    ) : item.value}
                  </dd>
                </dl>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="min-w-0 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
        <ContactFormEmbed />
      </div>
    </PageContainer>
  );
}
