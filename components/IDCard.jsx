"use client";

import Image from "next/image";

export default function IDCard() {
  return (
    <div className="relative w-full max-w-[656px] border border-white/30 bg-white/2 backdrop-blur-md rounded-3xl shadow-lg p-4 sm:p-6 flex flex-col items-center">

      {/* Top Images */}
      <div className="w-full flex justify-end pr-2 pb-1">
        <Image
          src="/id.png"
          alt="ID SVG"
          width={350}
          height={150}
          className="object-contain w-[70%] sm:w-[350px] h-auto"
        />
      </div>
      <div className="w-full flex justify-start pl-8 pb-2">
        <Image
          src="/Line 1.svg"
          alt="Line SVG"
          width={450}
          height={10}
          className="object-contain w-[80%] sm:w-[450px] h-auto"
        />
      </div>

      {/* Profile */}
      <div className="w-[150px] sm:w-[179px] h-auto border border-white/30 bg-white/2 backdrop-blur-md rounded-2xl shadow-lg p-2 sm:p-4 mb-4 sm:mb-0">
        <Image
          src="/Profile.png"
          alt="Profile"
          width={150}
          height={180}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Text info */}
      <div className="flex flex-col justify-center text-white mt-4 sm:mt-0 sm:ml-4 w-full">
        <h2 className="text-lg sm:text-xl font-bold">Name: Bhagirath Reddy</h2>
        <p className="font-semibold text-sm sm:text-base">
          Email: <a href="mailto:bhagirathreddylingam@gmail.com" className="hover:text-orange-600 underline" target="_blank">bhagirathreddylingam@gmail.com</a>
        </p>
        <p className="font-semibold text-sm sm:text-base">
          Github: <a href="https://github.com/Bugggyyyyy" className="hover:text-orange-600 underline" target="_blank">https://github.com/Bugggyyyyy</a>
        </p>
        <p className="font-semibold text-sm sm:text-base">
          LinkedIn: <a href="https://www.linkedin.com/in/bhagirath-reddy-7b9738284/" className="hover:text-orange-600 underline" target="_blank">https://linkedin.com/bhagirath</a>
        </p>
      </div>

      {/* QR code */}
      <div className="mt-4 sm:mt-6 w-[100px] sm:w-[130px] h-auto">
        <Image
          src="/qr.svg"
          alt="QR Code"
          width={130}
          height={100}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}
