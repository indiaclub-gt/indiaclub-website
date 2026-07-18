import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "India Club @ Georgia Tech",
    short_name: "India Club",
    description:
      "India Club at Georgia Tech (ICGT) — celebrating Indian culture on campus through Holi, Diwali, Garba, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#001f3f",
    icons: [
      {
        src: "/images/IClogo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
