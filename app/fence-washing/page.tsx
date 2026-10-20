// Route /fence-washing: page component unbundled from webpack module 2881.
import type { Metadata } from "next";
import Page from "@/components/m/M2881";

export const metadata: Metadata = {
  title: "Fence Washing",
  description: "Fence Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/fence-washing" },
};


export default function RoutePage() {
  return <Page />;
}
