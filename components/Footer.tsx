import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] border-t-2 border-[#faf6f0] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="md:basis-2/3 md:pl-16 lg:pl-24">
          <Image
            src="/images/IClogowhite.png"
            alt="India Club @ Georgia Tech Logo"
            width={260}
            height={260}
            className="h-auto w-48 md:w-64"
          />
        </div>

        <div className="md:basis-1/3 md:self-center">
          <h2 className="mb-5 text-2xl font-bold">Contact Info</h2>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:info@indiaclub.gatech.edu"
              className="grid grid-cols-[2.5rem_1fr] items-center gap-2 text-base font-medium hover:text-[#b8c7d9]"
            >
              <span className="flex h-9 w-9 items-center justify-center">
                <Image src="/images/mailicon.png" alt="Email" width={34} height={34} />
              </span>
              <span>info@indiaclub.gatech.edu</span>
            </a>

            <a
              href="https://www.instagram.com/indiaclub_gt/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[2.5rem_1fr] items-center gap-2 text-base font-medium hover:text-[#b8c7d9]"
            >
              <span className="flex h-9 w-9 items-center justify-center">
                <Image src="/images/instagramwhite.png" alt="Instagram" width={34} height={34} />
              </span>
              <span>@indiaclub_gt</span>
            </a>

            <a
              href="https://www.tiktok.com/@indiaclub_gt"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[2.5rem_1fr] items-center gap-2 text-base font-medium hover:text-[#b8c7d9]"
            >
              <span className="flex h-9 w-9 items-center justify-center">
                <Image src="/images/tiktoklogo.png" alt="TikTok" width={30} height={30} />
              </span>
              <span>@indiaclub_gt</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
