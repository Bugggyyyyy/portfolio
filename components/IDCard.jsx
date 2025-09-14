"use client";

import Image from "next/image";

export default function IDCard() {
  return (
    <div className="relative w-full max-w-[656px] h-auto md:h-[320px] border border-white/30 bg-white/2 backdrop-blur-md rounded-3xl shadow-lg p-4 md:p-6 flex flex-col items-center">
      
      {/* ID SVG on top */}
      <div className="w-full flex justify-end pr-2 md:pr-4 pb-1 md:pb-2">
        <Image
          src="/id.png"
          alt="ID SVG"
          width={350}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="w-full flex justify-start pl-10 md:pl-[150px] pb-2">
        <Image
          src="/Line 1.svg"
          alt="Line SVG"
          width={300}
          height={10}
          className="object-contain md:w-[450px] md:h-[10px]"
        />
      </div>

      {/* Profile and text */}
      <div className="relative w-full flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-0">
        {/* Profile */}
        <div className="flex-shrink-0 w-full md:w-[179px] h-auto md:h-[201px] border border-white/30 bg-white/2 backdrop-blur-md rounded-2xl shadow-lg p-2 md:p-6 flex justify-center items-center">
          <Image
            src="/Profile.png"
            alt="Profile"
            width={150}
            height={180}
            className="rounded-lg object-cover w-[120px] md:w-[150px] h-auto md:h-[180px]"
          />
        </div>

        {/* Text info */}
        <div className="flex-1 text-white flex flex-col justify-center gap-2 md:gap-3 px-2 md:px-4">
          <h2 className="text-lg md:text-xl font-bold">Name: Bhagirath Reddy</h2>
          <p className="font-semibold text-sm md:text-base">
            Email: <a href="mailto:bhagirathreddylingam@gmail.com" className="hover:text-orange-600 underline" target="_blank">bhagirathreddylingam@gmail.com</a>
          </p>
          <p className="font-semibold text-sm md:text-base">
            Github: <a href="https://github.com/Bugggyyyyy" className="hover:text-orange-600 underline" target="_blank">https://github.com/Bugggyyyyy</a>
          </p>
          <p className="font-semibold text-sm md:text-base">
            LinkedIn: <a href="https://www.linkedin.com/in/bhagirath-reddy-7b9738284/" className="hover:text-orange-600 underline" target="_blank">https://linkedin.com/bhagirath</a>
          </p>
        </div>
      </div>

      {/* QR bottom-left */}
      <div className="absolute bottom-4 left-4 w-[80px] md:w-[130px] h-auto md:h-[100px]">
        <Image
          src="/qr.svg"
          alt="QR Code"
          width={130}
          height={100}
          className="object-cover w-[80px] md:w-[130px] h-auto md:h-[100px]"
        />
      </div>
    </div>
  );
}
