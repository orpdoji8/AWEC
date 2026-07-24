import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <PageIntro
      title="About Us"
      message="Approved company information will be added here as it becomes available."
    />
  );
}
