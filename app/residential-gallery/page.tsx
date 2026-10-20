// Route /residential-gallery: page component unbundled from webpack module 1814.
import type { Metadata } from "next";
import Page from "@/components/m/M1814";

export const metadata: Metadata = {
  title: "Residential Gallery",
  description: "Residential Gallery by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/residential-gallery" },
};


export default function RoutePage() {
  return <Page />;
}
