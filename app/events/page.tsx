import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events from India Club at Georgia Tech, including Holi, Diwali Night, Garba, socials, and cultural showcases.",
  alternates: { canonical: "/events" },
};

const upcomingEvents = [
  {
    name: "Garba Day 1",
    link: null, // TODO: registration/event link
    thumbnail: "/images/IClogo.png", // TODO: event thumbnail
    subtitle: "Date TBD",
  },
];

type PastEvent = {
  name: string;
  link: string;
  thumbnail: string;
  subtitle: string;
  // Optional CSS object-position for the thumbnail crop (defaults to center).
  objectPosition?: string;
};

const pastEventGalleries: PastEvent[] = [
  {
    name: "Garba Day 1",
    link: "https://gallery.pierrethepearphotography.com/gtindiaclubgarbanight/",
    thumbnail: "/images/garba1.jpg",
    objectPosition: "50% 33%",
    subtitle: "September 13, 2025",
  },
  {
    name: "Garba Day 2",
    link: "https://lightroom.adobe.com/shares/fd1552b70f92405183cf48e1927e99ff",
    thumbnail: "/images/garba2.jpg",
    subtitle: "September 20, 2025",
  },
  {
    name: "Diwali",
    link: "https://anaveragephoto.pixieset.com/icgtdiwali/",
    thumbnail: "/images/diwalicard.jpg",
    subtitle: "November 8, 2025",
  },
  {
    name: "Mock Shaadi",
    link: "https://anaveragephoto.pixieset.com/icgt-mock-shaadi/",
    thumbnail: "/images/mockshaadi.jpg",
    subtitle: "February 21, 2026",
  },
  {
    name: "Holi Show 2026",
    link: "https://sp7media.pixieset.com/gtholishow/",
    thumbnail: "/images/holishow.jpg",
    subtitle: "April 4, 2026",
  },
];

// Show most recent first. `subtitle` is used as the date, so keep it a
// parseable date string (e.g. "April 4, 2026") for correct ordering.
const pastEventsNewestFirst = [...pastEventGalleries].sort(
  (a, b) => new Date(b.subtitle).getTime() - new Date(a.subtitle).getTime()
);

export default function Events() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-3">Events</h1>
      <p className="text-lg text-gray-700 mb-8">
        Browse upcoming and past India Club events.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Upcoming Events</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <a
              key={event.name}
              href={event.link ?? "#"}
              target={event.link ? "_blank" : undefined}
              rel={event.link ? "noopener noreferrer" : undefined}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`relative aspect-[16/9] ${
                  event.thumbnail.includes("IClogo") ? "bg-[#2D2D2D]" : ""
                }`}
              >
                <Image
                  src={
                    event.thumbnail.includes("IClogo")
                      ? "/images/IClogowhite.png"
                      : event.thumbnail
                  }
                  alt={`${event.name} thumbnail`}
                  fill
                  className={`${
                    event.thumbnail.includes("IClogo")
                      ? "object-contain p-5"
                      : "object-cover"
                  } group-hover:scale-[1.02] transition-transform duration-300`}
                />
              </div>
              <div className="p-4 bg-white group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-orange-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-800 group-hover:text-white transition-colors duration-300">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
                  {event.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6">Past Events</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pastEventsNewestFirst.map((event) => (
            <a
              key={event.name}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`relative aspect-[16/9] ${
                  event.thumbnail.includes("IClogo") ? "bg-[#2D2D2D]" : ""
                }`}
              >
                <Image
                  src={
                    event.thumbnail.includes("IClogo")
                      ? "/images/IClogowhite.png"
                      : event.thumbnail
                  }
                  alt={`${event.name} gallery thumbnail`}
                  fill
                  style={
                    event.objectPosition && !event.thumbnail.includes("IClogo")
                      ? { objectPosition: event.objectPosition }
                      : undefined
                  }
                  className={`${
                    event.thumbnail.includes("IClogo")
                      ? "object-contain p-5"
                      : "object-cover"
                  } group-hover:scale-[1.02] transition-transform duration-300`}
                />
              </div>
              <div className="p-4 bg-white group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-orange-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-800 group-hover:text-white transition-colors duration-300">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
                  {event.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
