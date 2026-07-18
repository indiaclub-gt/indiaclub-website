import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description:
    "Follow India Club at Georgia Tech on Instagram and TikTok for the latest updates and event announcements.",
  alternates: { canonical: "/social-media" },
};

export default function SocialMedia() {
    return (
      <div>
        <h1>Social Media</h1>
        <p>Our social media links will go here.</p>
      </div>
    );
  }