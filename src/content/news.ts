import type { ContentImage, ContentSection } from "@/types/content";

export type NewsArticleContent = {
  id: string;
  slug: string;
  title: string;
  participant: string;
  hostOrDestination: string;
  publishedAt?: string;
  summary: string;
  operationCategories: readonly string[];
  sourceStatus: "legacy-confirmed";
  verificationNotes: string;
  featuredImage?: ContentImage;
  body: readonly ContentSection[];
  gallery?: readonly ContentImage[];
  relatedArticleSlugs?: readonly string[];
};

export const newsPageContent = {
  metadata: {
    title: "News & Activities",
    description:
      "Legacy-derived historical activities and future updates from American West Educational Center.",
  },
  intro: {
    eyebrow: "News & Activities",
    title: "News & Activities",
    description:
      "This section brings together recovered historical activities and future dated updates.",
    notice:
      "Historical entries are derived from the legacy website and remain subject to client verification. Unknown dates and missing details have been omitted.",
  },
  emptyState: {
    title: "No news or activities are available",
    description: "Source-backed historical activities and future updates will appear here.",
  },
  supporting: {
    eyebrow: "Organization information",
    title: "Learn more about the organization",
    description:
      "The About Us page provides the current structural overview while organization details remain under review.",
  },
} as const;

export const newsArticles: readonly NewsArticleContent[] = [
  {
    id: "HIST-001",
    slug: "water-resources-management-delegation-walnut-water-district",
    title: "Water Resources Management Delegation Visit",
    participant: "Water Resources Management Delegation",
    hostOrDestination: "Walnut Water District",
    summary: "A historical visit by the Water Resources Management Delegation to Walnut Water District.",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Do not imply partnership, sponsorship, or a broader institutional relationship.",
    body: [{ heading: "Activity", paragraphs: ["Visiting Walnut Water District."] }],
  },
  {
    id: "HIST-002",
    slug: "hainan-higher-peoples-court-san-bernardino-superior-court",
    title: "Hainan Higher People's Court Delegation Visit",
    participant: "Hainan Higher People's Court Delegation",
    hostOrDestination: "San Bernardino Superior Court",
    summary: "A historical visit by the Hainan Higher People's Court Delegation to San Bernardino Superior Court.",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Do not imply a formal court partnership or continuing relationship.",
    body: [{ heading: "Activity", paragraphs: ["Visiting San Bernardino Superior Court."] }],
  },
  {
    id: "HIST-003",
    slug: "chongqing-business-delegation-la-chamber-of-commerce",
    title: "Chongqing Business Delegation Visit",
    participant: "Chongqing Business Delegation",
    hostOrDestination: "LA Chamber of Commerce",
    summary: "A historical visit by the Chongqing Business Delegation to LA Chamber of Commerce.",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Do not convert the visit into a partnership claim.",
    body: [{ heading: "Activity", paragraphs: ["Visiting LA Chamber of Commerce."] }],
  },
  {
    id: "HIST-004",
    slug: "shanghai-water-authority-wrd-southern-california",
    title: "Shanghai Water Authority Delegation Visit",
    participant: "Shanghai Water Authority Delegation",
    hostOrDestination: "WRD, Southern California",
    summary: "A historical visit by the Shanghai Water Authority Delegation to WRD, Southern California.",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Preserve the source name unless the organization's full name is separately verified.",
    body: [{ heading: "Activity", paragraphs: ["Visiting WRD, Southern California."] }],
  },
  {
    id: "HIST-005",
    slug: "national-radio-television-administration-2018-nab-las-vegas",
    title: "National Radio and Television Administration at NAB 2018",
    participant: "National Radio and Television Administration Delegation",
    hostOrDestination: "2018 NAB Exhibition, Las Vegas, USA",
    publishedAt: "2018",
    summary: "The National Radio and Television Administration Delegation at the 2018 NAB Exhibition in Las Vegas, USA.",
    operationCategories: ["International Exhibitions"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "The year and exhibition are source-backed; American West Educational Center's exact role is not stated.",
    body: [{ heading: "Activity", paragraphs: ["2018 NAB Exhibition, Las Vegas, USA."] }],
  },
  {
    id: "HIST-006",
    slug: "pingan-bank-delegation-coinbase",
    title: "PingAn Bank Delegation Visit",
    participant: "PingAn Bank Delegation",
    hostOrDestination: "Coinbase",
    summary: "A historical visit by the PingAn Bank Delegation to Coinbase.",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Do not imply a commercial partnership.",
    body: [{ heading: "Activity", paragraphs: ["Visiting Coinbase."] }],
  },
  {
    id: "HIST-007",
    slug: "shanghai-municipal-administration-ladwp",
    title: "Shanghai Municipal Administration Delegation Visit",
    participant: "Shanghai Municipal Administration Delegation",
    hostOrDestination: "Los Angeles Department of Water and Power (LADWP)",
    summary: "A historical visit by the Shanghai Municipal Administration Delegation to the Los Angeles Department of Water and Power (LADWP).",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "The destination is explicitly named by the legacy source.",
    body: [{ heading: "Activity", paragraphs: ["Visiting Los Angeles Department of Water and Power (LADWP)."] }],
  },
  {
    id: "HIST-008",
    slug: "ccb-trust-rockefeller-foundation-meeting",
    title: "CCB Trust Delegation Meeting",
    participant: "CCB Trust Delegation",
    hostOrDestination: "Rockefeller Foundation",
    summary: "A historical meeting involving the CCB Trust Delegation and Rockefeller Foundation.",
    operationCategories: ["Business Visits", "Round-table Seminars"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "The category assignments and American West Educational Center's role are not stated by the source.",
    body: [{ heading: "Activity", paragraphs: ["Meeting with Rockefeller Foundation."] }],
  },
  {
    id: "HIST-009",
    slug: "china-tobacco-administration-wcct-global",
    title: "China Tobacco Administration Delegation Visit",
    participant: "China Tobacco Administration Delegation",
    hostOrDestination: "WCCT Global",
    summary: "A historical visit by the China Tobacco Administration Delegation to WCCT Global.",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Do not infer a continuing relationship.",
    body: [{ heading: "Activity", paragraphs: ["Visiting WCCT Global."] }],
  },
  {
    id: "HIST-010",
    slug: "kaifeng-childrens-hospital-city-of-hope",
    title: "Kaifeng Children's Hospital Delegation Visit",
    participant: "Kaifeng Children's Hospital Delegation",
    hostOrDestination: "City of Hope Cancer Center",
    summary: "A historical visit by the Kaifeng Children's Hospital Delegation to City of Hope Cancer Center.",
    operationCategories: ["Business Visits"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Do not describe the visit as medical training unless separately verified.",
    body: [{ heading: "Activity", paragraphs: ["Visiting City of Hope Cancer Center."] }],
  },
  {
    id: "HIST-011",
    slug: "nanhai-experimental-middle-school-shadow-study-anaheim",
    title: "Nanhai Experimental Middle School Shadow Study",
    participant: "Students from Nanhai Experimental Middle School",
    hostOrDestination: "Anaheim Unified School District",
    summary: "Students from Nanhai Experimental Middle School took part in a historical shadow study at Anaheim Unified School District.",
    operationCategories: ["Professional Training"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Professional Training is an inferred category assignment.",
    body: [{ heading: "Activity", paragraphs: ["Shadow Study at Anaheim Unified School District."] }],
  },
  {
    id: "HIST-012",
    slug: "everbright-bank-delegation-training-ucla",
    title: "Everbright Bank Delegation Training at UCLA",
    participant: "Everbright Bank Delegation",
    hostOrDestination: "UCLA",
    summary: "A historical training activity for the Everbright Bank Delegation at UCLA.",
    operationCategories: ["Professional Training"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Training at UCLA is source-backed; American West Educational Center's exact role is not stated.",
    body: [{ heading: "Activity", paragraphs: ["Training at UCLA."] }],
  },
  {
    id: "HIST-013",
    slug: "mark-chandler-san-francisco-city-hall",
    title: "San Francisco City Hall Activity",
    participant: "Mark Chandler",
    hostOrDestination: "San Francisco City Hall",
    summary: "A historical activity at San Francisco City Hall with Mark Chandler.",
    operationCategories: ["Business Visits", "Round-table Seminars"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "The activity and category assignments are not stated. Reverify the person's legacy-listed title before public reuse.",
    body: [{ heading: "Legacy source context", paragraphs: ["With Mark Chandler at San Francisco City Hall."] }],
  },
  {
    id: "HIST-014",
    slug: "techtextil-north-america-promotion-meeting",
    title: "Techtextil North America Promotion Meeting",
    participant: "Manufacturers; Messe Frankfurt Inc.",
    hostOrDestination: "Meeting to promote the Techtextil North America Show",
    summary: "American West Educational Center organized a historical meeting between manufacturers and Messe Frankfurt Inc. to promote the Techtextil North America Show.",
    operationCategories: ["Global Branding", "International Exhibitions"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "Do not describe the relationship as a partnership, sponsorship, or official affiliation.",
    body: [{ heading: "Activity", paragraphs: ["American West Educational Center organized a meeting between manufacturers and Messe Frankfurt Inc. to promote the Techtextil North America Show."] }],
  },
  {
    id: "HIST-015",
    slug: "winning-with-leasing-sudhir-amembal-beijing",
    title: "\"Winning with Leasing\" Lecture Series",
    participant: "Sudhir Amembal",
    hostOrDestination: "Cheung Kong Graduate School of Business, Beijing",
    summary: "The historical \"Winning with Leasing\" lecture series with Sudhir Amembal at Cheung Kong Graduate School of Business in Beijing.",
    operationCategories: ["Professional Training", "Round-table Seminars"],
    sourceStatus: "legacy-confirmed",
    verificationNotes: "The category assignments and American West Educational Center's exact role are not stated by the source.",
    body: [{ heading: "Activity", paragraphs: ["The \"Winning with Leasing\" lecture series at Cheung Kong Graduate School of Business, Beijing."] }],
  },
];

export function findNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getNewsStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export function getRelatedNewsArticles(article: NewsArticleContent) {
  if (!article.relatedArticleSlugs?.length) return [];

  return article.relatedArticleSlugs.flatMap((slug) => {
    const relatedArticle = findNewsArticleBySlug(slug);
    return relatedArticle ? [relatedArticle] : [];
  });
}
