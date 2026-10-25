export type NavigationItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Business", href: "/business" },
  { label: "Education", href: "/education" },
  { label: "News & Activities", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = primaryNavigation;

export const siteConfig = {
  projectName: "meixiedu",
  name: "American West Educational Center",
  description:
    "Information about American West Educational Center and its work in international education and overseas opportunities.",
  footerDescription:
    "Connecting China and the United States through education, cultural exchange, and international business activities.",
  contentNotice: "Education without borders, growing together through culture.",
} as const;
