"use client";

import Image from "next/image";

import localFont from "next/font/local";

import { Inter } from "next/font/google";
import { Demo } from "../components/demo";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const titleFont = localFont({
  src: "../../public/romie-regular.otf",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-col dark:bg-[#111008] text-[#111008] md:px-4  pb-10 relative dark:text-[#F7F7F4] bg-[#F7F7F4] items-center gap-10 md:gap-15  ${inter.variable}`}
    >
      <nav className="w-full sticky top-0 flex justify-center  dark:border-gray-300/90 border-gray-900/10 z-50  dark:bg-[#F7F7F4]/70 bg-[#111008]/70 backdrop-blur-3xl text-[#F7F7F4] dark:text-[#111008]">
        <div className="w-full flex max-w-350  md:px-12 lg:px-20 px-4 items-center justify-between py-4">
          <p
            className={`${titleFont.className} font-bold tracking-widest text-xl lg:tex-2xl`}
          >
            CLERENT
          </p>
          <div className="md:flex gap-6 lg:gap-10 items-center text-sm hidden">
            <p>About</p>
            <p>Compliance</p>
            <p>Security</p>
            <p>Pricing</p>
          </div>
          <div className=" gap-2 text-sm hidden md:flex">
            <button className="border h-fit border-white px-3 md:px-4 py-2 w-fit rounded-md bg-none  text-white text-sm">
              Request a demo
            </button>
            <button className="border h-fit px-3 md:px-4 py-2 w-fit rounded-md bg-white text-[#111008] text-sm">
              Sign in
            </button>
          </div>
          <Menu className="md:hidden" />
        </div>
      </nav>

      <div
        className={`flex w-full max-w-350 flex-col gap-20 md:px-12 lg:px-20 px-4 text-left items-start font-sans dark:bg-[#111008] text-[#111008] dark:text-[#F7F7F4] bg-[#F7F7F4] ${inter.variable}`}
      >
        <section className="w-full flex-col items-start flex justify-center">
          <div className="w-full flex justify-start h-full min-h-90 max-w-lg lg:max-w-3xl">
            <div className="border-l border-dashed dark:border-gray-300/60 border-gray-900/70 h-90 sm:h-80 md:h-90 -mt-3 md:-mt-5 -mr-3 md:-mr-5 lg:-mr-10 animate-intro opacity-0" />
            <div className="flex flex-col  items-start">
              <div className="border-t border-dashed dark:border-gray-300/60 border-gray-900/70 w-full animate-intro opacity-0" />
              <h1
                className={`font-bold col-start-2 text-2xl/9 md:text-3xl/10 lg:text-4xl/12 py-4 col-span-3 px-5 md:px-12 lg:px-20 tracking-wide ${titleFont.className}`}
              >
                AI built to keep wealth advisors competitive and compliant
              </h1>

              <div className="border-t border-dashed dark:border-gray-300/60 border-gray-900/70 w-full animate-intro opacity-0" />

              <div className="py-4 flex w-full justify-start px-5 md:px-12 lg:px-20">
                <p className="text-zinc-400 lg:text-lg">
                  Built by industry experts and backed by the FCA, Clerent is
                  built for the front office.
                </p>
              </div>
              <div className="border-t border-dashed dark:border-gray-300/60 border-gray-900/70 w-full animate-intro opacity-0" />

              <div className="flex w-full md:w-fit">
                <div className="flex flex-col gap-4 justify-center py-4 px-5 w-full md:px-12 lg:px-20">
                  <div className="font-medium flex gap-4 justify-start">
                    <button className="border h-fit border-zinc-200/30 px-3 md:px-4 py-2 w-fit rounded-md bg-[#111008]/75 text-white text-sm">
                      Request a demo
                    </button>{" "}
                    <button className="border h-fit px-3 md:px-4 py-2 w-fit rounded-md bg-white text-[#111008] text-sm">
                      Sign in
                    </button>{" "}
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Developed in partnership with the FCA
                  </p>
                </div>
                <div className="border-l border-dashed dark:border-gray-300/60 border-gray-900/70 h-full animate-intro opacity-0 hidden md:flex" />
              </div>

              <div className="border-t border-dashed dark:border-gray-300/60 border-gray-900/70 w-full animate-intro opacity-0" />
            </div>

            <div className="border-l border-dashed dark:border-gray-300/60 border-gray-900/70 h-90 sm:h-80 md:h-90 -mt-3 md:-mt-5 -ml-3 md:-ml-5 lg:-ml-10 animate-intro  opacity-0" />
          </div>
          <div className="w-full flex flex-col gap-10 lg:items-center overflow-clip">
            <Demo />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-y-20 lg:gap-4">
          <div className="col-span-1  lg:col-span-3 flex flex-col gap-2 lg:sticky lg:top-25 self-start font-medium">
            <h1
              className={`rounded-t-md font-bold text-xl md:text-2xl px-2 lg:px-6 border border-dashed py-3 border-gray-900/20 dark:bg-[#F7F7F4]/60 bg-[#111008]/50 backdrop-blur-3xl text-[#F7F7F4] dark:text-[#111008]  ${titleFont.className}`}
            >
              Your data, our priority
            </h1>
            <div className="md:aspect-video rounded-lg aspect-4/5 bg-zinc-200/80"></div>
          </div>
          <div className="grid sm:grid-cols-3 font-medium grid-cols-1 w-full lg:col-span-1 lg:gap-12 lg:grid-cols-1 gap-20 sm:gap-4 lg:mt-14">
            <div className="bg-zinc-200/80 rounded-lg  aspect-square w-full "></div>
            <div className="bg-zinc-200/80 rounded-lg  aspect-square w-full "></div>
            <div className="bg-zinc-200/80 rounded-lg  aspect-square w-full "></div>
          </div>
        </section>

        <section
          className={
            "self-center h-50 w-2/3 overdlow-clip transition-all rounded-lg bg-linear-to-b  from-olive-200 to-olive-50 flex relative flex-col gap-10 border border-white/10 " +
            (visible ? " to-50%" : "")
          }
        >
          <div className="absolute rounded-lg opacity-10 inset-0 bg-[url('https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png')] bg-repeat" />
        </section>

        <section
          className={
            "h-100 overdlow-clip transition-all rounded-lg bg-linear-to-b  from-olive-200 to-olive-50 flex relative flex-col gap-10 border border-white/10 w-full" +
            (visible ? " to-50%" : "")
          }
        >
          <div className="absolute rounded-lg opacity-10 inset-0 bg-[url('https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png')] bg-repeat" />
        </section>

        <section
          className={
            "h-60 overdlow-clip transition-all lg:px-20 rounded-lg flex relative flex-col gap-1 border border-white/10 w-full" +
            (visible ? " to-50%" : "")
          }
        >
          <div className="flex-1 bg-olive-200"></div>
          <div className="flex-1 bg-olive-200"></div>
          <div className="flex-1 bg-olive-200"></div>
          <div className="flex-1 bg-olive-200"></div>
          <div className="flex-1 bg-olive-200"></div>
        </section>
      </div>

      <footer className="h-100 bg-[#111008]/80 w-full"></footer>
    </div>
  );
}
