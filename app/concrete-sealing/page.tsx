// Route /concrete-sealing: page component unbundled from webpack module 5436.
import type { Metadata } from "next";
import Page from "@/components/m/M5436";

export const metadata: Metadata = {
  title: "Driveway Washing & Concrete Sealing",
  description: "Driveway Washing & Concrete Sealing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/concrete-sealing" },
};


export default function RoutePage() {
  return <Page />;
}
