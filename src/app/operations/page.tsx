import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Business Operations" };

export default function OperationsPage() {
  return (
    <PageIntro
      title="Business Operations"
      message="Approved information about business operations will be added here later."
    />
  );
}
