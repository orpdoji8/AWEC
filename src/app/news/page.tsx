import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <PageIntro
      title="News"
      message="News and activity updates will be added when approved material is available."
    />
  );
}
