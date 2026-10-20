// Route /parking-lot-maintenance: page component unbundled from webpack module 3745.
import type { Metadata } from "next";
import Page from "@/components/m/M3745";

export const metadata: Metadata = {
  title: "Parking Lot Maintenance",
  description: "Parking Lot Maintenance by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/parking-lot-maintenance" },
};


export default function RoutePage() {
  return <Page />;
}
