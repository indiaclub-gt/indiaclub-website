import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Officers",
  description: "Meet the officers leading India Club at Georgia Tech.",
  alternates: { canonical: "/board-members/officers" },
};

type Officer = {
  name: string;
  position: string;
  thumbnail: string;
};

type Branch = {
  name: string;
  officers: Officer[];
};

const boardBranches: Branch[] = [
  {
    name: "Presidents",
    officers: [
      { name: "Srujan Gubbi", position: "President", thumbnail: "/images/srujan.jpg" },
      { name: "Rida Merani", position: "President", thumbnail: "/images/rida.jpg" },
    ],
  },
  {
    name: "Operations",
    officers: [
      { name: "Anaya Desai", position: "VP Operations", thumbnail: "/images/anaya.jpg" },
      { name: "Apoorva Mahendranath", position: "VP Operations", thumbnail: "/images/apoorva.jpg" },
    ],
  },
  {
    name: "Finance",
    officers: [
      { name: "Param Desai", position: "VP Finance", thumbnail: "/images/param.jpg" },
      { name: "Shreya Chakraborty", position: "VP Finance", thumbnail: "/images/IClogo.png" },
    ],
  },
  {
    name: "Logistics",
    officers: [
      { name: "Hari Uthaman", position: "VP Logistics", thumbnail: "/images/IClogo.png" },
      { name: "Veda Vundela", position: "VP Logistics", thumbnail: "/images/IClogo.png" },
    ],
  },
  {
    name: "IT",
    officers: [
      { name: "Rahul Balusu", position: "VP IT", thumbnail: "/images/rahul.jpg" },
      { name: "Aarav Sharma", position: "VP IT", thumbnail: "/images/aarav.jpg" },
    ],
  },
  {
    name: "Marketing",
    officers: [
      { name: "Gargi Gupta", position: "VP Marketing", thumbnail: "/images/gargi.jpg" },
      { name: "Tanushri Kemisetti", position: "VP Marketing", thumbnail: "/images/tanushri.png" },
    ],
  },
  {
    name: "Media, Arts, & Design",
    officers: [
      { name: "Rhea Iyer", position: "VP MAD", thumbnail: "/images/rhea.jpg" },
      { name: "Arpita Gupta", position: "VP MAD", thumbnail: "/images/arpita.jpg" },
    ],
  },
];

export default function Officers() {
  return (
    <main className="px-6 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-10">Officers</h1>

        <div className="space-y-12">
          {boardBranches.map((branch) => (
            <section key={branch.name}>
              <h2 className="text-3xl font-bold text-green-800 mb-6">{branch.name}</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {branch.officers.map((officer) => (
                  <article
                    key={`${branch.name}-${officer.name}`}
                    className="group rounded-xl overflow-hidden bg-white shadow-md w-full max-w-[280px] hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={officer.thumbnail}
                        alt={`${officer.name} headshot`}
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 bg-white group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-orange-500 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-green-800 group-hover:text-white transition-colors duration-300">{officer.name}</h3>
                      <p className="text-sm text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">{officer.position}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
