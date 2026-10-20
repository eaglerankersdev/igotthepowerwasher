// Route /window-cleaning-cincinnati: page component unbundled from webpack module 5018.
import type { Metadata } from "next";
import Page from "@/components/m/M5018";

export const metadata: Metadata = {
  title: "Window Cleaning",
  description: "Window Cleaning by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/window-cleaning-cincinnati" },
};


export default function RoutePage() {
  return <Page />;
}
