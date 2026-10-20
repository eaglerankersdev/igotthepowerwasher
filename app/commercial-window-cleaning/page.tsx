// Route /commercial-window-cleaning: page component unbundled from webpack module 6945.
import type { Metadata } from "next";
import Page from "@/components/m/M6945";

export const metadata: Metadata = {
  title: "Commercial Window Cleaning",
  description: "Commercial Window Cleaning by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/commercial-window-cleaning" },
};


export default function RoutePage() {
  return <Page />;
}
