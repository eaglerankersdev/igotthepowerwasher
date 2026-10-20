// Route /contact-us: page component unbundled from webpack module 8334.
import type { Metadata } from "next";
import Page from "@/components/m/M8334";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/contact-us" },
};


export default function RoutePage() {
  return <Page />;
}
