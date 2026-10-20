// Route /gas-station: page component unbundled from webpack module 9357.
import type { Metadata } from "next";
import Page from "@/components/m/M9357";

export const metadata: Metadata = {
  title: "Gas Station Pressure Washing",
  description: "Gas Station Pressure Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/gas-station" },
};


export default function RoutePage() {
  return <Page />;
}
