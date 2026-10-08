import Image from "next/image";

type Sponsor = {
  name: string;
  src: string;
  /** doorlist's mark is pure white artwork, so it needs inverting to read on a light tile. */
  invert?: boolean;
  /** Very wide wordmarks get reined in so they don't optically dwarf the square marks. */
  wide?: boolean;
  /**
   * Scale-up for marks with lots of whitespace baked into their own canvas —
   * object-contain fits the padded artwork, which leaves the logo looking small.
   */
  scale?: string;
};

const sponsors: Sponsor[] = [
  { name: "Consulate General of India, Atlanta", src: "/images/sponsors/consulategeneralindia.png" },
  { name: "Chick-fil-A", src: "/images/sponsors/chickfila.png" },
  { name: "Chipotle Mexican Grill", src: "/images/sponsors/chipotle.png" },
  { name: "Ghee Indian Kitchen", src: "/images/sponsors/ghee.png" },
  { name: "Patel Brothers", src: "/images/sponsors/patelbrothers.png" },
  { name: "Tin Drum Asian Kitchen", src: "/images/sponsors/tindrum.png", wide: true },
  { name: "Paloma West Midtown", src: "/images/sponsors/paloma.webp", scale: "scale-[1.3]" },
  { name: "Fetii", src: "/images/sponsors/fetii.png" },
  { name: "Gradly", src: "/images/sponsors/gradly.png", scale: "scale-[1.25]" },
  { name: "LMNT", src: "/images/sponsors/lmnt.png", scale: "scale-[1.5]" },
  { name: "Raas - The Global Naari", src: "/images/sponsors/raas.webp" },
  { name: "Doorlist", src: "/images/sponsors/doorlist.png", invert: true, wide: true },
];

export default function Sponsors() {
  return (
    <section className="bg-[#f2e9d8] border-t-2 border-[#001f3f]/10">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-16 md:py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f]">Our Sponsors</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-[#001f3f]/70">
            Thank you to the partners who help make our events possible!
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-5 md:gap-6">
          {sponsors.map((sponsor) => (
            <li
              key={sponsor.src}
              className="w-[calc((100%-1.25rem)/2)] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <div className="group flex h-32 items-center justify-center overflow-hidden rounded-xl border border-[#001f3f]/10 bg-[#faf6f0] px-5 py-5 shadow-[0_2px_10px_rgba(0,31,63,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,31,63,0.12)] md:h-40">
                <div
                  className={`relative h-full ${sponsor.wide ? "w-[78%]" : "w-full"} ${
                    sponsor.scale ?? ""
                  }`}
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                    className={`object-contain object-center ${sponsor.invert ? "invert" : ""}`}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
