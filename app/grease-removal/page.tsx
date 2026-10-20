// Route /grease-removal: page component unbundled from webpack module 9164.
import type { Metadata } from "next";
import Page from "@/components/m/M9164";

export const metadata: Metadata = {
  title: "Grease Removal",
  description: "Grease Removal by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/grease-removal" },
};


export default function RoutePage() {
  return <Page />;
}
