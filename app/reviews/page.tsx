// Route /reviews: page component unbundled from webpack module 8614.
import type { Metadata } from "next";
import Page from "@/components/m/M8614";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Reviews by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/reviews" },
};


export default function RoutePage() {
  return <Page />;
}
