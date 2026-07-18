import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with India Club at Georgia Tech — email us or connect on Instagram and TikTok.",
  alternates: { canonical: "/contact-info" },
};

export default function ContactInfo() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>Our contact information will go here.</p>
      </div>
    );
  }