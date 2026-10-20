// Route /concrete-pressure-washing: page component unbundled from webpack module 462.
import type { Metadata } from "next";
import Page from "@/components/m/M462";

export const metadata: Metadata = {
  title: "Concrete Pressure Washing",
  description: "Concrete Pressure Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/concrete-pressure-washing" },
};


export default function RoutePage() {
  return <Page />;
}
