import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about India Club at Georgia Tech — our mission, our history since 1974, and the community we've built celebrating Indian culture on campus.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
