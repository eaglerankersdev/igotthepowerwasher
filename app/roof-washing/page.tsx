// Route /roof-washing: page component unbundled from webpack module 2429.
import type { Metadata } from "next";
import Page from "@/components/m/M2429";

export const metadata: Metadata = {
  title: "Roof Washing",
  description: "Roof Washing by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/roof-washing" },
};


export default function RoutePage() {
  return <Page />;
}
