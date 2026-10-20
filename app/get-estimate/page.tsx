// Route /get-estimate: page component unbundled from webpack module 5872.
import type { Metadata } from "next";
import Page from "@/components/m/M5872";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description: "Get a Free Estimate by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/get-estimate" },
};


export default function RoutePage() {
  return <Page />;
}
