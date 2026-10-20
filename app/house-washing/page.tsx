// Route /house-washing: page component unbundled from webpack module 5674.
import type { Metadata } from "next";
import Page from "@/components/m/M5674";

export const metadata: Metadata = {
  title: "House Washing",
  description: "House Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/house-washing" },
};


export default function RoutePage() {
  return <Page />;
}
