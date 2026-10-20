// Route /annual-maintenance-program: page component unbundled from webpack module 7459.
import type { Metadata } from "next";
import Page from "@/components/m/M7459";

export const metadata: Metadata = {
  title: "Annual Maintenance Program",
  description: "Annual Maintenance Program by I Got The Power Washer in Cincinnati, Ohio. 5-star rated quality. Call (513) 570-0355 for a free estimate.",
  alternates: { canonical: "/annual-maintenance-program" },
};


export default function RoutePage() {
  return <Page />;
}
