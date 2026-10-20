// Route /rust-removal: page component unbundled from webpack module 3920.
import type { Metadata } from "next";
import Page from "@/components/m/M3920";

export const metadata: Metadata = {
  title: "Rust Removal",
  description: "Rust Removal by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/rust-removal" },
};


export default function RoutePage() {
  return <Page />;
}
