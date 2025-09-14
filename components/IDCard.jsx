"use client";

import Image from "next/image";

export default function IDCard() {
  return (
    <div className="relative w-[656px] h-[320px] border border-white/30 br bg-white/2 backdrop-blur-md rounded-3xl shadow-lg p-6 flex flex-col items-center">
      
      {/* ID SVG on top */}
      <div className="  w-full flex justify-end-safe  pr-[10px] pb-[2px]">
        <Image
            src="/id.png"
            alt="ID SVG"
            width={350}   // specify the width you want
            height={150}  // specify the height you want
            className="object-contain"
        />
      </div>
      <div className="  w-full flex justify-end-safe  pl-[150px] pb-[15px]">
        <Image
            src="/Line 1.svg"
            alt="Line SVG"
            width={450}   // specify the width you want
            height={10}  // specify the height you want
            className="object-contain "
        />
      </div>

      {/* Profile and text */}
      <div className="absolute left-[20px] w-[179px] h-[201px] border border-white/30 bg-white/2 backdrop-blur-md rounded-2xl shadow-lg p-6 ">
        {/* Profile */}
        <div className="w-[150px] h-[180px] pr-[20px] pb-[20px] flex justify-center">
          <Image
            src="/Profile.png"
            alt="Profile"
            width={150}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        </div>

        {/* Text info */}
        <div className="ml-50 flex flex-col justify-center text-white pb-[60px]">
          <h2 className="text-xl font-bold">Name:Bhagirath Reddy</h2>
          <p className="font-semibold">Email:<a href="https://mail.google.com/mail/?view=cm&to=bhagirathreddylingam@gmail.com"className=" hover:text-orange-600 transition-colors underline" target="_blank">bhagirathreddylingam@gmail.com</a></p>
          <p className="font-semibold">Github:Github: <a href="https://github.com/Bugggyyyyy" className="hover:text-orange-600 transition-colors underline" target="_blank">https://github.com/Bugggyyyyy</a></p>
          <p className="font-semibold">Linkedin:<a href="https://www.linkedin.com/in/bhagirath-reddy-7b9738284/" className=" hover:text-orange-600 transition-colors underline" target="_blank">https://linkedin.com/bhagirath</a></p>
      </div>

      {/* QR bottom-left */}
      <div className="absolute top-[240px] left-[40px] w-[130px] h-[100px] ">
        <Image
          src="/qr.svg"
          alt="QR Code"
          width={130}
          height={100}
          className="object-cover "
        />
      </div>
    </div>
  );
}
