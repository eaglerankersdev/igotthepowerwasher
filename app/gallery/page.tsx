// Route /gallery: page component unbundled from webpack module 6983.
import type { Metadata } from "next";
import Page from "@/components/m/M6983";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/gallery" },
};


export default function RoutePage() {
  return <Page />;
}
