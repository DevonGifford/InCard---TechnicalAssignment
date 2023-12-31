import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Button from "@/app/components/ui/button";
import socialIcons from "@/public/other";
import HomeUnauthenticated from "@/public/home/home_unauthenticated.png";

const socialIconsTyped: { [key: string]: StaticImageData } = socialIcons;

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-5 sm:m-10">
      <div className="flex flex-col justify-center gap-3 sm:gap-7 items-center text-center pt-5 sm:pt-20">
        <h1 className="text-center pb-2 font-bold text-4xl lg:text-6xl mx-10" role="heading">
          <span className="text-incard-blue">Grow your online </span>
          business <br /> with incard.
        </h1>

        <span className=" max-w-2xl text-sm sm:text-base sm:mx-14">
          This is a Frontend take home assessment. It consists of 3 pages - SSR & CSR.  Authentication 
          with persistent sessions.  Protected routes.  Route handeling.  Error handeling
        </span>

        <Link href="/dashboard">
          <Button text="Dashboard" />
        </Link>

        <p className="text-sm sm:text-xl">
          This is{" "}
          <strong className="text-incard-blue">a Client Side Rendered</strong>{" "}
          Page
        </p>

        {/* IMAGE */}
        <Image
          className="w-full -z-10 md:-translate-y-24"
          src={HomeUnauthenticated}
          width={900}
          height={300}
          alt="You shall not pass"
          role="background-image"
        />

        {/* COMPANY LOGOS */}
        <div className="flex flex-col -translate-y-20 md:-translate-y-72 justify-center items-center text-center gap-2 md:gap-10">
          <span>We work across all major ecom platforms</span>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6 ">
            {Object.keys(socialIcons).map((iconName: string, index: number) => (
              <div key={index}>
                <Image
                  src={socialIconsTyped[iconName]}
                  width={100}
                  height={200}
                  alt="company logo"
                  role="company-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
