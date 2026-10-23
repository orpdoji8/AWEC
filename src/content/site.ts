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
    "Information about the company and its work in international education and overseas opportunities.",
  contentNotice: "Website content is being prepared for review.",
} as const;
