// Route /gum-removal: page component unbundled from webpack module 6487.
import type { Metadata } from "next";
import Page from "@/components/m/M6487";

export const metadata: Metadata = {
  title: "Gum Removal",
  description: "Gum Removal by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/gum-removal" },
};


export default function RoutePage() {
  return <Page />;
}
