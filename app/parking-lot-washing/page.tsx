// Route /parking-lot-washing: page component unbundled from webpack module 6779.
import type { Metadata } from "next";
import Page from "@/components/m/M6779";

export const metadata: Metadata = {
  title: "Parking Lot Washing",
  description: "Parking Lot Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/parking-lot-washing" },
};


export default function RoutePage() {
  return <Page />;
}
