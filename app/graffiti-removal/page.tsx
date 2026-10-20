// Route /graffiti-removal: page component unbundled from webpack module 7124.
import type { Metadata } from "next";
import Page from "@/components/m/M7124";

export const metadata: Metadata = {
  title: "Graffiti Removal",
  description: "Graffiti Removal by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/graffiti-removal" },
};


export default function RoutePage() {
  return <Page />;
}
