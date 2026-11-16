import Image from "next/image";
import Link from "next/link";
import { pastYesGalleries, pastYesPrograms } from "@/content/past-yes";
import pastYesPhotos from "@/content/past-yes-photos.json";
import { yesJunePhotos } from "@/content/yes-june";
import styles from "./NewsLanding.module.css";
import cardStyles from "./NewsHoverCard.module.css";

// Each preview comes from its own journal; the content collection controls order.
const covers = [yesJunePhotos[6], ...pastYesGalleries.map(({ slug }) => pastYesPhotos[slug][0])];

export function NewsProgramPreview() {
  return (
    <ol className={styles.programList}>
      {pastYesPrograms.map((program, index) => {
        const cover = covers[index];
        return (
          <li key={program.href} className={index === 0 ? styles.leadProgram : styles.supportingProgram}>
            <Link href={program.href} className={`${styles.programLink} ${cardStyles.card}`} aria-labelledby={`news-program-${index}`}>
              <div className={styles.programPhoto}>
                <Image {...cover} alt={cover.alt}
                  sizes={index === 0
                    ? "(min-width: 1344px) 620px, (min-width: 1024px) 48vw, 100vw"
                    : "(min-width: 1024px) 180px, (min-width: 640px) 220px, 100vw"} />
              </div>
              <div className={styles.programCaption}>
                <h3 id={`news-program-${index}`}><span className={styles.hoverTitle}>{program.title}</span></h3>
                <span className={styles.programArrow} aria-hidden="true">↗</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
