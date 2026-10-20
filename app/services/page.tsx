// Route /services: page component unbundled from webpack module 9822.
import type { Metadata } from "next";
import Page from "@/components/m/M9822";

export const metadata: Metadata = {
  title: "Services",
  description: "Services by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/services" },
};


export default function RoutePage() {
  return <Page />;
}
