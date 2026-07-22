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
      { name: "Anaya Desai", position: "President", thumbnail: "/images/anaya.jpg" },
      { name: "Shreya Chakraborty", position: "President", thumbnail: "/images/IClogo.png" },
    ],
  },
  {
    name: "Operations",
    officers: [
      { name: "Nehal Harapanahalli", position: "VP Operations", thumbnail: "/images/IClogo.png" },
      { name: "Sidhaant Kadam", position: "VP Operations", thumbnail: "/images/IClogo.png" },
    ],
  },
  {
    name: "Finance",
    officers: [
      { name: "Aditya Gupta", position: "VP Finance", thumbnail: "/images/IClogo.png" },
      { name: "Param Desai", position: "VP Finance", thumbnail: "/images/param.jpg" },
    ],
  },
  {
    name: "Logistics",
    officers: [
      { name: "Aditi Rajvanshi", position: "VP Logistics", thumbnail: "/images/IClogo.png" },
      { name: "Vaikunth Ananthanarayanan", position: "VP Logistics", thumbnail: "/images/IClogo.png" },
    ],
  },
  {
    name: "IT",
    officers: [
      { name: "Aadi Dash", position: "VP IT", thumbnail: "/images/IClogo.png" },
      { name: "Anuj Naik", position: "VP IT", thumbnail: "/images/IClogo.png" },
      { name: "Aryan Patel", position: "VP IT", thumbnail: "/images/IClogo.png" },
    ],
  },
  {
    name: "Marketing",
    officers: [
      { name: "Abhinav Nimmagadda", position: "VP Marketing", thumbnail: "/images/IClogo.png" },
      { name: "Tanushri Kemisetti", position: "VP Marketing", thumbnail: "/images/tanushri.png" },
    ],
  },
  {
    name: "Media, Arts, & Design",
    officers: [
      { name: "Megha Yeddula", position: "VP MAD", thumbnail: "/images/IClogo.png" },
      { name: "Prisha Solanki", position: "VP MAD", thumbnail: "/images/IClogo.png" },
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
                    <div
                      className={`relative aspect-[3/4] ${
                        officer.thumbnail.includes("IClogo") ? "bg-[#2D2D2D]" : ""
                      }`}
                    >
                      <Image
                        src={
                          officer.thumbnail.includes("IClogo")
                            ? "/images/IClogowhite.png"
                            : officer.thumbnail
                        }
                        alt={`${officer.name} headshot`}
                        fill
                        className={`${
                          officer.thumbnail.includes("IClogo")
                            ? "object-contain p-4"
                            : "object-cover object-top"
                        } group-hover:scale-[1.02] transition-transform duration-300`}
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
