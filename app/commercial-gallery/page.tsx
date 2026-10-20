// Route /commercial-gallery: page component unbundled from webpack module 6044.
import type { Metadata } from "next";
import Page from "@/components/m/M6044";

export const metadata: Metadata = {
  title: "Commercial Gallery",
  description: "Commercial Gallery by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/commercial-gallery" },
};


export default function RoutePage() {
  return <Page />;
}
