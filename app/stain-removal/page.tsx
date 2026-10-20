// Route /stain-removal: page component unbundled from webpack module 4161.
import type { Metadata } from "next";
import Page from "@/components/m/M4161";

export const metadata: Metadata = {
  title: "Stain Removal",
  description: "Stain Removal by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/stain-removal" },
};


export default function RoutePage() {
  return <Page />;
}
