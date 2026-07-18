import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from India Club at Georgia Tech events and celebrations.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <p>Photos from past events will go here.</p>
      </div>
    );
  }