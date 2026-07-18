import type { MetadataRoute } from "next";

const SITE_URL = "https://indiaclubgt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/join", changeFrequency: "monthly", priority: 0.8 },
    { path: "/events", changeFrequency: "weekly", priority: 0.8 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact-info", changeFrequency: "yearly", priority: 0.5 },
    { path: "/social-media", changeFrequency: "yearly", priority: 0.5 },
    { path: "/board-members", changeFrequency: "monthly", priority: 0.6 },
    { path: "/board-members/officers", changeFrequency: "monthly", priority: 0.6 },
    { path: "/board-members/structure", changeFrequency: "monthly", priority: 0.6 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
