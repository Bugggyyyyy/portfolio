"use client";

import Image from "next/image";
import IDCard from "../components/IDCard";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center relative overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{
          x: "-50%",
          y: "-50%",
          scale: 1,
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        animate={{
          top: "2vh",
          left: "2vw",
          x: 0,
          y: 0,
          scale: 0.6,
        }}
        transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
        className="absolute z-50 "

      >
        <Image
          src="/Hey,.svg"
          alt="Hero"
          width={709}
          height={454}
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Spacer to push content below Hey */}
      <div className="h-[280px] md:h-[200px] lg:h-[150px] " />

      {/* Row: IDCard + Experience */}
<div className="relative w-full max-w-[1055px] flex flex-col md:flex-row justify-between items-stretch gap-6 px-4 md:px-0 lg:mt-[240px] mt-[100px]">
  {/* ID Card */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2 }}
    className="w-full md:w-[50%] flex-shrink-0"
  >
    <IDCard />
  </motion.div>
     
     {/* Experience */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 2 }}
  className="w-full md:w-[50%] h-full"
>
  <Card height="345px"className="h-full">
    <div className="flex flex-col items-start px-4  gap-4">
      {/* Title inside smaller card */}
      <div className="bg-white/2 border border-white/20 rounded-3xl px-4 py-2">
        <p className="text-white text-xl font-semibold">Experience</p>
      </div>

      {/* Experience text */}
      <div className="text-white text-lg md:text-xl leading-relaxed">
        <p>
          <span className="font-semibold">Intern</span> — Front End Web
          Development (Virtual) —{" "}
          <span className="italic">Edunet Foundation</span> — AICTE — IBM
          SkillsBuild
        </p>
      </div>
    </div>
  </Card>
</motion.div>
</div>


      {/* Big Centered Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-10 px-4 md:px-0 w-full flex justify-center relative z-10"
      >
        <Card width="100%" height="100%" className="max-w-[1050px] " >
          <div className="flex flex-col items-start px-4 md:px-6 py-4">
            <Card width="120px" height="50px">
              <div className="flex items-center justify-center w-full h-full">
                <p className="text-white text-2xl">About</p>
              </div>
            </Card>
            <p className="text-white pt-5 text-base sm:text-lg md:text-xl break-words">
              Passionate software engineer with hands-on experience in front-end and full-stack development, cloud computing, and DSA. Proven track record in hackathons and internships, building scalable, production-ready applications. Skilled in React, Next.js, Node.js, and AWS, with a strong focus on collaboration and problem-solving.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Another Row of Cards: Education + Skills */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10 px-4 md:px-0 w-full max-w-[1050px] justify-center">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="w-full lg:w-[500px]"
        >
          <Card width="100%" height="600px">
            <div className="flex flex-col items-start px-4 py-4">
              <Card width="150px" height="50px">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-white text-2xl">Education</p>
                </div>
              </Card>
              <ul className="list-disc list-inside text-white pt-5 text-xl space-y-3">
                <li>
                  <span className="font-semibold">MLR Institute of Technology</span> — Hyderabad, Telangana  
                  B.Tech in Computer Science & Information Technology | Nov 2022 – May 2026  
                  CGPA: 7.69
                </li>
                <li>
                  <span className="font-semibold">Narayana Junior College</span> — Hyderabad, Telangana  
                  MPC (Maths, Physics, Chemistry) | May 2020 – May 2022  
                  Percentage: 90.6%
                </li>
                <li>
                  <span className="font-semibold">Paramita Heritage School</span> — Karimnagar, Telangana  
                  SSC | May 2020  
                  GPA: 10
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="w-full lg:w-[500px]"
        >
          <Card width="100%" height="600px">
            <div className="flex flex-col items-start px-4 py-4">
              <Card width="100px" height="50px">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-white text-2xl">Skills</p>
                </div>
              </Card>
              <ul className="list-disc list-inside text-white pt-5 text-lg space-y-3">
                <li>
                  <span className="font-semibold text-xl">Languages:</span> Python, Java, C, JavaScript, SQL, Solidity
                </li>
                <li>
                  <span className="font-semibold text-xl">Frontend:</span> ReactJS, Next.js, Redux, Flutter, HTML/CSS
                </li>
                <li>
                  <span className="font-semibold text-xl">Backend:</span> NodeJS, ExpressJS, REST APIs
                </li>
                <li>
                  <span className="font-semibold text-xl">Database:</span> MySQL, PostgreSQL, Firebase
                </li>
                <li>
                  <span className="font-semibold text-xl">Tools & Platforms:</span> Git, GitHub, AWS, Linux, Android Studio, VS Code, IntelliJ, Webflow, Figma
                </li>
                <li>
                  <span className="font-semibold text-xl">Concepts:</span> DSA, OOPS, OS, DBMS, Networking, Cloud Computing, Agile, CI/CD
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Spacer at bottom */}
      <div className="h-20"></div>
    </div>
  );
}