// Route /seal-solutions: page component unbundled from webpack module 7066.
import type { Metadata } from "next";
import Page from "@/components/m/M7066";

export const metadata: Metadata = {
  title: "Seal Solutions",
  description: "Seal Solutions by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/seal-solutions" },
};


export default function RoutePage() {
  return <Page />;
}
