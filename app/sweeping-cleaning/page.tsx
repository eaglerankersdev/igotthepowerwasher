// Route /sweeping-cleaning: page component unbundled from webpack module 3679.
import type { Metadata } from "next";
import Page from "@/components/m/M3679";

export const metadata: Metadata = {
  title: "Parking Lot Sweeping & Cleaning",
  description: "Parking Lot Sweeping & Cleaning by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/sweeping-cleaning" },
};


export default function RoutePage() {
  return <Page />;
}
