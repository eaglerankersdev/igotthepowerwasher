// Route /the-clean-team: page component unbundled from webpack module 6408.
import type { Metadata } from "next";
import Page from "@/components/m/M6408";

export const metadata: Metadata = {
  title: "The Clean Team",
  description: "The Clean Team by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/the-clean-team" },
};


export default function RoutePage() {
  return <Page />;
}
