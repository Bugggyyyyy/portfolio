"use client";
import Image from "next/image";
import IDCard from "../components/IDCard";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center relative">
      {/* Hero Section */}
      <motion.div
        initial={{
          opacity: 1,
          x: "-50%", // center horizontally
          y: "-50%", // center vertically
          scale: 1,
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        animate={{
          top: "1vh",
          left: "2vw",
          x: 0,
          y: 0,
          scale: 0.6,
        }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        className="absolute z-50"
      >
        <Image
          src="/Hey,.svg"
          alt="Hero"
          width={709}
          height={454}
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </motion.div>

      {/* Row: IDCard + Experience */}
      <div className="pt-[45vh] w-full flex flex-col items-center px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-center items-start gap-5 w-full max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex-1"
          >
            <IDCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex-1"
          >
            <Card className="w-full h-auto min-h-[300px]">
              <div className="flex flex-col items-start">
                <Card className="w-[140px] h-[50px]">
                  <div className="flex items-center justify-center w-full h-full">
                    <p className="text-white text-lg sm:text-2xl">Experience</p>
                  </div>
                </Card>
                <p className="text-white pt-5 text-base sm:text-xl">
                  Intern – Front End Web Development (Virtual) – Edunet Foundation – AICTE — IBM SkillsBuild
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Big Centered About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-10 w-full flex justify-center"
        >
          <Card className="w-full sm:w-[1000px] h-auto min-h-[250px]">
            <div className="flex flex-col items-start">
              <Card className="w-[120px] h-[50px]">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-white text-lg sm:text-2xl">About</p>
                </div>
              </Card>
              <p className="text-white pt-5 text-base sm:text-xl">
                Passionate software engineer with hands-on experience in front-end and full-stack development, cloud computing, and DSA. Proven track record in hackathons and internships, building scalable, production-ready applications. Skilled in React, Next.js, Node.js, and AWS, with a strong focus on collaboration and problem-solving.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Education + Skills */}
        <div className="flex flex-col lg:flex-row gap-6 mt-10 w-full max-w-[1100px]">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="flex-1"
          >
            <Card className="w-full h-auto min-h-[400px]">
              <div className
