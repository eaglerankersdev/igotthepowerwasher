// Route /building-wash: page component unbundled from webpack module 2569.
import type { Metadata } from "next";
import Page from "@/components/m/M2569";

export const metadata: Metadata = {
  title: "Building Washing",
  description: "Building Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/building-wash" },
};


export default function RoutePage() {
  return <Page />;
}
