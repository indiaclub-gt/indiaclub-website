"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const linkStyle = (path: string) =>
    `px-2 py-1 text-base text-center transition-colors duration-200 ${
      pathname === path
        ? "text-[#b8c7d9] font-bold"
        : "text-white font-semibold hover:text-[#b8c7d9]"
    }`;

  const subLinkStyle = (path: string) =>
    `block px-4 py-2 text-sm text-center transition-colors duration-200 ${
      pathname === path
        ? "text-[#b8c7d9] font-bold"
        : "text-white font-semibold hover:text-[#b8c7d9]"
    }`;

  const sidebarLinkStyle = (path: string) =>
    `flex items-center w-full py-2.5 px-3 rounded-lg text-lg transition-all duration-200 hover:bg-white/5 ${
      pathname === path
        ? "text-[#b8c7d9] font-bold bg-white/5"
        : "text-white font-semibold hover:text-[#b8c7d9]"
    }`;

  const sidebarSubLinkStyle = (path: string) =>
    `flex items-center w-full py-2 px-3 rounded-lg text-base transition-all duration-200 hover:bg-white/5 ${
      pathname === path
        ? "text-[#b8c7d9] font-semibold bg-white/5"
        : "text-white/80 font-medium hover:text-[#b8c7d9]"
    }`;

  const sidebarExternalStyle =
    "flex items-center w-full py-2 px-3 rounded-lg text-base font-medium text-white/90 transition-all duration-200 hover:bg-white/5 hover:text-[#b8c7d9]";

  const sidebarGroupLabelStyle =
    "px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-white/40 navbar-font";

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-[#001f3f] border-b-2 border-[#f7f7f7] grid grid-cols-[320px_auto_320px] items-center py-3 px-4 navbar-font"
      >
        <Link href="/" className="flex items-center gap-2 justify-self-start w-[320px]">
          <Image
            src="/images/IClogowhite.png"
            alt="India Club @ Georgia Tech Logo"
            width={32}
            height={32}
          />
          <span className="ml-[4px] font-bold text-lg text-white transition-colors duration-200 hover:text-[#b8c7d9]">
            India Club @ GT
          </span>
        </Link>

        <div className="flex items-center gap-5 justify-self-center">
          <Link className={linkStyle("/")} href="/">Home</Link>
          <Link className={linkStyle("/about")} href="/about">About</Link>
          <Link className={linkStyle("/join")} href="/join">Get Involved</Link>
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsMembersDropdownOpen(true)}
            onMouseLeave={() => setIsMembersDropdownOpen(false)}
          >
            <span
              className={`px-2 py-1 text-base text-center cursor-default transition-colors duration-200 ${
                pathname === "/board-members" || pathname.startsWith("/board-members/")
                  ? "text-[#b8c7d9] font-bold"
                  : "text-white font-semibold hover:text-[#b8c7d9]"
              }`}
            >
              Members
            </span>
            {isMembersDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#001f3f] border border-[#f7f7f7] rounded-md shadow-lg w-[150px] z-50">
                <Link
                  href="/board-members/structure"
                  className={subLinkStyle("/board-members/structure")}
                >
                  Structure
                </Link>
                <Link
                  href="/board-members/officers"
                  className={subLinkStyle("/board-members/officers")}
                >
                  Officers
                </Link>
              </div>
            )}
          </div>
          <Link className={linkStyle("/events")} href="/events">Events</Link>
        </div>

        <div className="flex w-[320px] items-center justify-end gap-3 justify-self-end">
          <a href="mailto:info@indiaclub.gatech.edu" className="flex items-center px-2 py-1">
            <Image
              src="/images/mailicon.png"
              alt="Email Contact"
              title="Contact Us"
              width={30}
              height={30}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/indiaclub_gt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-2 py-1"
          >
            <Image
              src="/images/instagramwhite.png"
              alt="Instagram"
              title="Instagram"
              width={25}
              height={25}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>

          <a
            href="https://www.tiktok.com/@indiaclub_gt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-2 py-1"
          >
            <Image
              src="/images/tiktoklogo.png"
              alt="Tiktok"
              title="Tiktok"
              width={20}
              height={20}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            <span className="block w-4 h-0.5 bg-white mb-1" />
            <span className="block w-4 h-0.5 bg-white mb-1" />
            <span className="block w-4 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/35 z-[60]"
          onClick={() => setIsSidebarOpen(false)}
        >
          <aside
            className="absolute top-0 right-0 h-full w-72 bg-[#001f3f] shadow-xl p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Menu</h2>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsSidebarOpen(false)}
                className="text-2xl leading-none text-white hover:text-[#b8c7d9]"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              <Link href="/" className={sidebarLinkStyle("/")} onClick={() => setIsSidebarOpen(false)}>Home</Link>
              <Link href="/about" className={sidebarLinkStyle("/about")} onClick={() => setIsSidebarOpen(false)}>About</Link>
              <Link href="/join" className={sidebarLinkStyle("/join")} onClick={() => setIsSidebarOpen(false)}>Get Involved</Link>

              {/* Members group */}
              <p className={sidebarGroupLabelStyle}>Members</p>
              <div className="ml-3 flex flex-col gap-1 border-l border-white/15 pl-2">
                <Link href="/board-members/structure" className={sidebarSubLinkStyle("/board-members/structure")} onClick={() => setIsSidebarOpen(false)}>
                  Structure
                </Link>
                <Link href="/board-members/officers" className={sidebarSubLinkStyle("/board-members/officers")} onClick={() => setIsSidebarOpen(false)}>
                  Officers
                </Link>
              </div>

              <Link href="/events" className={`${sidebarLinkStyle("/events")} mt-1`} onClick={() => setIsSidebarOpen(false)}>Events</Link>

              {/* Connect group */}
              <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-2">
                <p className={sidebarGroupLabelStyle}>Connect</p>
                <a
                  href="mailto:info@indiaclub.gatech.edu"
                  className={sidebarExternalStyle}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact Us
                </a>
                <a
                  href="https://www.instagram.com/indiaclub_gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sidebarExternalStyle}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@indiaclub_gt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sidebarExternalStyle}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  TikTok
                </a>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
