"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------------------
   Links and assets for the Get Involved cards.

   TODO: Replace the remaining PLACEHOLDER values below before going live.
--------------------------------------------------------------------------- */

// TODO: Replace with the real alumni mailing list Google Form link.
const ALUMNI_FORM_URL = "https://forms.gle/PLACEHOLDER";

// TODO: Swap to "/alumni-placeholder.png" (or a real alumni photo) once it's added to /public,
// and change the alumni card's imageClassName to "object-cover" if it's a photo.
const ALUMNI_IMAGE_SRC = "/images/IClogowhite.png";

// Donation flyer (tall/portrait image).
const DONATE_FLYER_SRC = "/images/donate-flyer.jpg";

// Venmo QR, cropped from the app's share export (public/images/venmo-qr.png) down to just
// the code plus a white quiet zone. If the file is missing, the modal shows a placeholder box.
const VENMO_QR_SRC = "/images/venmo-qr-code.png";

const ZELLE_EMAIL = "anayamdesai@gmail.com";

const VENMO_URL = "https://venmo.com/u/anayamdesai";
// Shown under the QR so donors can confirm who they're paying, e.g. "@anayamdesai".
const VENMO_HANDLE = `@${VENMO_URL.split("/").pop()}`;

const ENGAGE_URL = "https://gatech.campuslabs.com/engage/organization/india-club";

// Google Drive file ID for the sponsorship packet.
const SPONSORSHIP_PACKET_ID = "1c9u9mYHMBjfBUqMJISILKmUG7sH7prOT";
const SPONSORSHIP_PACKET_URL = `https://drive.google.com/file/d/${SPONSORSHIP_PACKET_ID}/view`;
const SPONSORSHIP_PACKET_EMBED = `https://drive.google.com/file/d/${SPONSORSHIP_PACKET_ID}/preview`;

type Card = {
  audience: string;
  title: string;
  subtitle: string;
  // Either an image thumbnail or an embedded preview (iframe).
  image?: { src: string; alt: string; className: string; bgClassName?: string };
  embed?: { src: string; title: string };
} & ({ href: string; onClick?: never } | { onClick: () => void; href?: never });

const cardClasses =
  "group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md";
const footerClasses =
  "p-4 text-center bg-white group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-orange-500 transition-all duration-300";

export default function GetInvolvedCards() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const donateTriggerRef = useRef<HTMLButtonElement>(null);

  const closeDonate = useCallback(() => {
    setIsDonateOpen(false);
    // Return focus to the card that opened the modal.
    donateTriggerRef.current?.focus();
  }, []);

  const cards: Card[] = [
    {
      audience: "For Students",
      title: "India Club on Engage",
      subtitle: "Click to join on CampusLabs Engage",
      href: ENGAGE_URL,
      image: {
        src: "/images/IClogowhite.png",
        alt: "India Club Engage",
        className: "object-contain p-5",
        bgClassName: "bg-[#2D2D2D]",
      },
    },
    {
      audience: "For Sponsors",
      title: "Sponsorship Packet",
      subtitle: "Click to view our sponsorship packet",
      href: SPONSORSHIP_PACKET_URL,
      embed: { src: SPONSORSHIP_PACKET_EMBED, title: "India Club sponsorship packet preview" },
    },
    {
      audience: "For Alumni",
      title: "Alumni Network",
      subtitle: "Click to join our alumni mailing list",
      href: ALUMNI_FORM_URL,
      image: {
        src: ALUMNI_IMAGE_SRC,
        alt: "India Club alumni network",
        className: "object-contain p-5",
        bgClassName: "bg-[#2D2D2D]",
      },
    },
    {
      audience: "For Donors",
      title: "Support India Club",
      subtitle: "Click to donate via Venmo or Zelle",
      onClick: () => setIsDonateOpen(true),
      image: {
        src: DONATE_FLYER_SRC,
        alt: "Donate to India Club flyer",
        className: "object-cover object-top",
        bgClassName: "bg-[#2D2D2D]",
      },
    },
  ];

  return (
    <>
      <section className="grid gap-8 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="flex flex-col items-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              {card.audience}
            </h2>
            <CardBody
              card={card}
              buttonRef={card.onClick ? donateTriggerRef : undefined}
            />
          </div>
        ))}
      </section>

      {isDonateOpen && <DonateModal onClose={closeDonate} />}
    </>
  );
}

function CardFooter({ card }: { card: Card }) {
  return (
    <>
      <h3 className="text-xl font-semibold text-green-800 group-hover:text-white transition-colors duration-300">
        {card.title}
      </h3>
      <p className="text-sm text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
        {card.subtitle}
      </p>
    </>
  );
}

function CardImage({ image }: { image: NonNullable<Card["image"]> }) {
  return (
    <div className={`relative aspect-[16/9] ${image.bgClassName ?? ""}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 448px, 100vw"
        className={`${image.className} group-hover:scale-[1.02] transition-transform duration-300`}
      />
    </div>
  );
}

function CardBody({
  card,
  buttonRef,
}: {
  card: Card;
  buttonRef?: React.Ref<HTMLButtonElement>;
}) {
  // Embedded previews can't sit inside a link, so the card is a plain wrapper with a
  // transparent overlay link on the preview and a separate link on the footer.
  if (card.embed && card.href) {
    return (
      <div className={cardClasses}>
        <div className="relative aspect-[16/9]">
          <iframe src={card.embed.src} title={card.embed.title} className="absolute inset-0 h-full w-full" />
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={card.subtitle}
            className="absolute inset-0 z-10"
          />
        </div>
        <a href={card.href} target="_blank" rel="noopener noreferrer" className={`block ${footerClasses}`}>
          <CardFooter card={card} />
        </a>
      </div>
    );
  }

  const content = (
    <>
      {card.image && <CardImage image={card.image} />}
      <div className={footerClasses}>
        <CardFooter card={card} />
      </div>
    </>
  );

  if (card.href) {
    return (
      <a href={card.href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={card.onClick}
      aria-haspopup="dialog"
      className={`${cardClasses} block cursor-pointer text-left`}
    >
      {content}
    </button>
  );
}

function DonateModal({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const [isQrMissing, setIsQrMissing] = useState(false);

  // While open: lock background scroll, close on Escape, keep Tab focus inside the modal.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!panelRef.current.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(ZELLE_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the email is still selectable text.
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]"
    >
      <div
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-lg md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close donation details"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/40 text-2xl leading-none text-white/80 transition-colors duration-200 hover:bg-black/60 hover:text-white"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2">
          {/* --- Donate panel: first on mobile, right column on desktop --- */}
          <div className="flex flex-col items-center p-5 pt-14 text-center md:order-last md:justify-center md:p-8">
            <h2 id="donate-modal-title" className="text-xl font-semibold text-green-800">
              Support India Club
            </h2>

            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mt-4 mb-3">
              Scan to donate
            </p>
            {/* White padding around the QR gives it the quiet zone scanners need. */}
            <div className="rounded-xl border border-gray-200 bg-white p-2">
              {isQrMissing ? (
                <div className="flex h-48 w-48 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500 md:h-[19rem] md:w-[19rem]">
                  Venmo QR coming soon
                </div>
              ) : (
                // The QR modules fill ~83% of the image (the rest is quiet zone),
                // so 19rem wide ≈ 250px of actual QR on desktop.
                <Image
                  src={VENMO_QR_SRC}
                  alt="Venmo QR code for India Club"
                  width={370}
                  height={370}
                  sizes="(min-width: 768px) 304px, 192px"
                  onError={() => setIsQrMissing(true)}
                  className="h-48 w-48 md:h-[19rem] md:w-[19rem]"
                />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">{VENMO_HANDLE}</p>

            <a
              href={VENMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-700 to-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg md:py-3 md:text-base"
            >
              Open in Venmo
            </a>

            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mt-6 mb-2">
              Donate via Zelle
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="select-all break-all rounded-lg bg-gray-100 px-3 py-2 text-gray-800">
                {ZELLE_EMAIL}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="shrink-0 cursor-pointer rounded-lg border border-green-800 px-3 py-2 text-sm font-semibold text-green-800 transition-colors duration-300 hover:bg-green-800 hover:text-white"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p aria-live="polite" className="sr-only">
              {copied ? "Zelle email copied to clipboard" : ""}
            </p>
          </div>

          {/* --- Flyer: opens full size in a new tab so the fine print is readable --- */}
          <a
            href={DONATE_FLYER_SRC}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the full donation flyer in a new tab"
            className="flex items-center justify-center bg-[#2D2D2D]"
          >
            <Image
              src={DONATE_FLYER_SRC}
              alt="Donate to India Club flyer with Venmo and Zelle details"
              width={1080}
              height={1350}
              sizes="(min-width: 768px) 448px, 100vw"
              className="h-auto w-auto max-w-full md:max-h-[85vh] object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
