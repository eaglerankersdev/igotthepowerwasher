// Route /restaurant: page component unbundled from webpack module 5526.
import type { Metadata } from "next";
import Page from "@/components/m/M5526";

export const metadata: Metadata = {
  title: "Restaurant Cleaning",
  description: "Restaurant Cleaning by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/restaurant" },
};


export default function RoutePage() {
  return <Page />;
}
