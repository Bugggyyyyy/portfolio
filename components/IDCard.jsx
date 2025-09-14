"use client";

import Image from "next/image";

export default function IDCard() {
  return (
    <div className="relative w-full max-w-[656px] border border-white/30 bg-white/2 backdrop-blur-md rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-1">
      {/* Left Column: Profile & QR */}
      <div className="flex flex-col items-center gap-4 flex-shrink-0">
        <div className="w-[160px] h-[160px] border border-white/30 bg-white/2 rounded-2xl flex justify-center items-center">
          <Image
            src="/Profile.png"
            alt="Profile"
            width={150}
            height={180}
            className="rounded-lg object-cover w-[140px] h-[180px]"
          />
        </div>

        {/* QR below profile */}
        <div className="w-[120px] h-[120px]">
          <Image src="/qr.svg" alt="QR Code" width={120} height={120} className="object-contain" />
        </div>
      </div>

      {/* Right Column: This container holds the ID image and text info. */}
      {/* We use flex-col on all screens to stack the children */}
      {/* We will apply the order-* classes to the children within this column */}
      <div className="flex-1 flex flex-col justify-start gap-3 text-white -mt-15 md:mt-0">

        {/* 1. ID Image & Line (order-1 on mobile) */}
        <div className="flex flex-col items-center order-1 md:order-none w-full max-w-sm mx-auto">
          <Image src="/id.png" alt="Dev ID" width={260} height={150} className="h-[80px] w-auto flex items-center ml-15" />
          <div className="w-full h-[4px] bg-white/30 rounded-md mt-2 ml-3"></div>
        </div>

        {/* 2. Text Info (order-2 on mobile) */}
        <div className="flex flex-col justify-start gap-3 order-2 md:order-none ml-3">
          <h2 className="text-lg md:text-xl font-bold mt-3">Name: Bhagirath Reddy</h2>

          <p className="font-medium text-sm md:text-base">
            Email: <a href="mailto:bhagirathreddylingam@gmail.com" className="underline hover:text-orange-400">bhagirathreddylingam@gmail.com</a>
          </p>

          <p className="font-medium text-sm md:text-base">
            Github: <a href="https://github.com/Bugggyyyyy" className="underline hover:text-orange-400">github.com/Bugggyyyyy</a>
          </p>

          <p className="font-medium text-sm md:text-base">
            LinkedIn: <a href="https://www.linkedin.com/in/bhagirath-reddy-7b9738284/" className="underline hover:text-orange-400">linkedin.com/bhagirath</a>
          </p>
        </div>
      </div>
    </div>
  );
}