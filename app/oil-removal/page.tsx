// Route /oil-removal: page component unbundled from webpack module 9045.
import type { Metadata } from "next";
import Page from "@/components/m/M9045";

export const metadata: Metadata = {
  title: "Oil Stain Removal",
  description: "Oil Stain Removal by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/oil-removal" },
};


export default function RoutePage() {
  return <Page />;
}
