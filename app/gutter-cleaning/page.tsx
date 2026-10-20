// Route /gutter-cleaning: page component unbundled from webpack module 3866.
import type { Metadata } from "next";
import Page from "@/components/m/M3866";

export const metadata: Metadata = {
  title: "Gutter Cleaning",
  description: "Gutter Cleaning by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/gutter-cleaning" },
};


export default function RoutePage() {
  return <Page />;
}
