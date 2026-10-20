// Route /pressure-washing: page component unbundled from webpack module 6776.
import type { Metadata } from "next";
import Page from "@/components/m/M6776";

export const metadata: Metadata = {
  title: "Pressure Washing",
  description: "Pressure Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/pressure-washing" },
};


export default function RoutePage() {
  return <Page />;
}
