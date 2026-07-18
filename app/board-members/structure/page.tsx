import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Structure",
  description:
    "How India Club at Georgia Tech is organized — our executive board structure.",
  alternates: { canonical: "/board-members/structure" },
};

export default function Structure() {
  return (
    <section className="w-full bg-white -mb-12 pb-12">
      <h1 className="sr-only">India Club at Georgia Tech Board Structure</h1>
      <Image
        src="/images/BoardStructure.png"
        alt="India Club board structure"
        width={2000}
        height={1200}
        priority
        className="block w-full h-auto"
      />
    </section>
  );
}
