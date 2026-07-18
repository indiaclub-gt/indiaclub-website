import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Get involved with India Club at Georgia Tech — students can join our community on Engage, and sponsors can explore our sponsorship packet to partner with us.",
  alternates: { canonical: "/join" },
};

// Google Drive file ID for the sponsorship packet.
const SPONSORSHIP_PACKET_ID = "1c9u9mYHMBjfBUqMJISILKmUG7sH7prOT";
const SPONSORSHIP_PACKET_URL = `https://drive.google.com/file/d/${SPONSORSHIP_PACKET_ID}/view`;
const SPONSORSHIP_PACKET_EMBED = `https://drive.google.com/file/d/${SPONSORSHIP_PACKET_ID}/preview`;

export default function Join() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-3 text-center">Get Involved</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Students can join the India Club community on Engage, and sponsors can explore
        our sponsorship packet to partner with us.
      </p>

      <section className="grid gap-8 md:grid-cols-2">
        {/* --- Students side: join on Engage --- */}
        <div className="flex flex-col items-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            For Students
          </h2>
          <a
            href="https://gatech.campuslabs.com/engage/organization/india-club"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
          >
            <div className="relative aspect-[16/9] bg-[#2D2D2D]">
              <Image
                src="/images/IClogowhite.png"
                alt="India Club Engage"
                fill
                className="object-contain p-5 group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center bg-white group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-orange-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-green-800 group-hover:text-white transition-colors duration-300">
                India Club on Engage
              </h3>
              <p className="text-sm text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
                Click to join on CampusLabs Engage
              </p>
            </div>
          </a>
        </div>

        {/* --- Sponsors side: embedded preview + link to the sponsorship packet --- */}
        <div className="flex flex-col items-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            For Sponsors
          </h2>
          <div className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
            <div className="relative aspect-[16/9]">
              {/* Embedded Google Drive preview of the sponsorship packet */}
              <iframe
                src={SPONSORSHIP_PACKET_EMBED}
                title="India Club sponsorship packet preview"
                className="absolute inset-0 h-full w-full"
              />
              {/* Transparent overlay: clicking the preview opens the full packet */}
              <a
                href={SPONSORSHIP_PACKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our sponsorship packet"
                className="absolute inset-0 z-10"
              />
            </div>
            <a
              href={SPONSORSHIP_PACKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 text-center bg-white group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-orange-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-green-800 group-hover:text-white transition-colors duration-300">
                Sponsorship Packet
              </h3>
              <p className="text-sm text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
                Click to view our sponsorship packet
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
