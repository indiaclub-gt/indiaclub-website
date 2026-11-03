import type { Metadata } from "next";
import GetInvolvedCards from "@/components/GetInvolvedCards";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Get involved with India Club at Georgia Tech — students can join on Engage, alumni can join our mailing list, sponsors can explore our sponsorship packet, and anyone can donate to support the club.",
  alternates: { canonical: "/join" },
};

export default function Join() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-3 text-center">Get Involved</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Students can join on Engage, alumni can stay in the loop, sponsors can partner with us,
        and anyone can donate to support the club.
      </p>

      <GetInvolvedCards />
    </main>
  );
}
