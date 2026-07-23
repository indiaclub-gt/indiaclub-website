"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="legacy-serif relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/holi.avif"
        alt="Holi celebration crowd"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.16),transparent_48%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 md:px-16 -translate-y-40">
        <h1 className="flex w-full flex-col">
          <span
            className={`self-start text-left text-white text-7xl md:text-[9rem] lg:text-[11rem] leading-[0.9] drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)] transition-all duration-900 ease-out ${
              entered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
            }`}
          >
            India Club
          </span>
          <span
            className={`mt-6 self-end text-right text-white/95 text-3xl md:text-5xl drop-shadow-[0_6px_14px_rgba(0,0,0,0.4)] transition-all duration-900 delay-100 ease-out ${
              entered ? "opacity-100 -translate-x-[50px]" : "opacity-0 translate-x-24"
            }`}
          >
            at Georgia Tech
          </span>
        </h1>
      </div>
    </section>
  );
}
