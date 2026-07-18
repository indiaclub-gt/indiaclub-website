import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Get involved with India Club at Georgia Tech — join our community, project teams, and events. Everyone's welcome, no experience required.",
  alternates: { canonical: "/join" },
};

export default function Join() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-3 text-center">Get Involved</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Stay updated on the latest India Club news and events through Engage and our Instagram.
      </p>

      <section className="flex justify-center">
        <a
          href="https://gatech.campuslabs.com/engage/organization/india-club"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/IClogo.png"
              alt="India Club Engage"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="p-4 text-center bg-white group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-orange-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-green-800 group-hover:text-white transition-colors duration-300">
              India Club on Engage
            </h2>
            <p className="text-sm text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
              Click to join on CampusLabs Engage
            </p>
          </div>
        </a>
      </section>
    </main>
  );
}
