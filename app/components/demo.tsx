"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Demo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1500 ease-out-in transform w-full lg:mx-20 flex justify-center items-center rounded-md p-10 relative min-w-200 aspect-video bg-orange-100 ${
        visible ? "translate-y-0" : "opacity-0 -translate-y-7"
      }`}
    >
      <div className="relative w-full h-full rounded-lg">
        <div className="w-full h-full bg-white/10 flex flex-col justify-center rounded-lg items-center z-20 absolute">
          <p className="text-black">& Glowing Card</p>
        </div>
        <div className="absolute bg-indigo-200 blur-lg z-10 -inset-3" />
      </div>
      <Image
        src="/classical-1.jpg"
        alt="bg"
        fill={true}
        className="rounded-lg border opacity-70 z-30 object-cover "
      />
      <div className="w-11/12 md:w-10/12 overflow-auto h-10/12 bg-zinc-800 absolute rounded-md z-40">
        <Image
          src="/claude.png"
          alt="GPT"
          fill={true}
          className="rounded-md dark:hidden"
        />
        <Image
          src="/claude-light.png"
          alt="GPT"
          fill={true}
          className="rounded-md hidden dark:block"
        />
      </div>
    </div>
  );
};
